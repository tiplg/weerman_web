const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./public/*.html",
    "./public/*.vue",
    "./public/*.jsx"
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss,
    require("cssnano")({
      preset: "default"
    })
    //...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
