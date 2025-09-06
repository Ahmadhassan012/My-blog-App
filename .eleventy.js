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
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort(function(a, b) {
      return a.date - b.date;
    });
  });

  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").filter(function(item) {
      return item.data.featured;
    }).sort(function(a, b) {
      return b.date - a.date; // Sort by newest first
    });
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

  eleventyConfig.addCollection("topTags", function(collectionApi) {
    const tagsCount = {};
    collectionApi.getAll().forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => {
          if (tagsCount[tag]) {
            tagsCount[tag]++;
          } else {
            tagsCount[tag] = 1;
          }
        });
      }
    });

    const sortedTags = Object.entries(tagsCount).sort((a, b) => b[1] - a[1]);
    return sortedTags.slice(0, 5).map(tag => tag[0]);
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

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/My-blog-App/"
  };
};
