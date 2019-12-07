// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
cssLoaderOptions: {
url: false
}
})

const withImages = require('next-images')
module.exports = withImages()
