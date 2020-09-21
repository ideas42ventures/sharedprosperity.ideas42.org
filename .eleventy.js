const CleanCSS = require("clean-css");

module.exports = function (conf) {
  conf.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
  conf.setTemplateFormats([
    "html",
    "njk",
    "gif",
    "jpg",
    "png",
    "webp",
    "svg",
    "ttf",
    "woff",
    "woff2",
    "ico",
    "pdf",
  ]);

  conf.addPassthroughCopy("./src/js/**/*.js");
  conf.addPassthroughCopy("./src/manifest.webmanifest");
  conf.addWatchTarget("./src/**/*.css");
  conf.addWatchTarget("./src/js/**/*.js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
