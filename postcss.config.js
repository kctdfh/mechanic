// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-focus-visible"),
    require("autoprefixer"),
    require("postcss-discard-comments")({removeAll:true}),
    require('cssnano')({preset: 'default',})
  ],
};