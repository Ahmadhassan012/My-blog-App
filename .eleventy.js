module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!(dateObj instanceof Date) || isNaN(dateObj)) {
      return "";
    }
    return dateObj.toISOString().split("T")[0];
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort(function(a, b) {
      return a.date - b.date;
    });
  });

  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").filter(function(item) {
      return item.data.featured;
    }).sort(function(a, b) {
      return b.date - a.date; // Sort by newest first
    });
  });

  eleventyConfig.addCollection("postsByTag", function(collectionApi) {
    const postsByTag = {};
    collectionApi.getFilteredByGlob("src/blog/posts/*.md").forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => {
          if (!postsByTag[tag]) {
            postsByTag[tag] = [];
          }
          postsByTag[tag].push(item);
        });
      }
    });
    for (const tag in postsByTag) {
      postsByTag[tag].sort((a, b) => b.date - a.date);
    }
    return postsByTag;
  });

  eleventyConfig.addCollection("tagsList", function(collectionApi) {
    const tagsSet = new Set();
    collectionApi.getAll().forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => tagsSet.add(tag));
      }
    });
    return [...tagsSet].sort();
  });

  eleventyConfig.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    };
    // Note: this is a simplified slugify function. For a real project,
    // you might want to use a more robust library like 'slugify'.
    return input.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  });

  eleventyConfig.addFilter("getRelatedPosts", (posts, url, postsByTag) => {
    const currentPost = posts.find(p => p.url === url);
    const relatedPosts = new Map();
    if (currentPost && currentPost.data.tags) {
      for (const tag of currentPost.data.tags) {
        if (postsByTag[tag]) {
          for (const relatedPost of postsByTag[tag]) {
            if (relatedPost.url !== url) {
              relatedPosts.set(relatedPost.url, relatedPost);
            }
          }
        }
      }
    }
    return Array.from(relatedPosts.values()).slice(0, 3);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/My-blog-App/"
  };
};
