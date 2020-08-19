module.exports = function (conf) {
  conf.setTemplateFormats([
    "html",
    "njk",
    "gif",
    "jpg",
    "png",
    "webp",
    "svg",
    "woff2",
    "ico",
    "pdf",
  ]);

  conf.addPassthroughCopy("./src/**/*.js");
  conf.addPassthroughCopy("./src/manifest.webmanifest");
  conf.addWatchTarget("./src/**/*.css");
  conf.addWatchTarget("./src/**/*.js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
