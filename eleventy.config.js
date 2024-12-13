// filters
import { dateDisplay, dateISO, dateFull } from "./src/_11ty/filters/dates.js";

// collections
import { speakers } from "./src/_11ty/collections/speakers.js";

export default async function (eleventyConfig) {
  // filters
  eleventyConfig.addFilter("dateDisplay", dateDisplay);
  eleventyConfig.addFilter("dateISO", dateISO);
  eleventyConfig.addFilter("dateFull", dateFull);

  // collections
  eleventyConfig.addCollection("speakers", speakers);

  // avoid processing and watching files
  eleventyConfig.ignores.add("./src/assets/**/*");
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // passthrough copy
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });

  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/css/*", "./dist/assets/js/*"],
  });
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: "_includes",
    data: "_data",
  },
  templateFormats: ["njk", "md"],
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};
