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

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    pathPrefix: "/My-blog-App/"
  };
};
