module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets.
  eleventyConfig.addPassthroughCopy("public");

  // Filter to format dates
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  });

  // Shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Create a collection of blog posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    // Files to process as templates, includes markdown and nunjucks
    templateFormats: ["md", "njk", "html"],
    // Use Nunjucks as the template engine for markdown files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
