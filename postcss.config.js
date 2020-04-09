const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const importer = require('postcss-import')

module.exports = {
  plugins: [
    importer,
    tailwindcss('./tailwind.config.js'),
    cssnano({
      preset: 'default'
    }),
    autoprefixer
  ]
}

