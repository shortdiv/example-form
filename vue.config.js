const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const JSDOMRenderer = require('@prerenderer/renderer-jsdom')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
    plugins: [
      new PrerenderSPAPlugin(
        // Absolute path to compiled SPA
        path.resolve(__dirname, 'dist'),
        // List of routes to prerender
        [ '/'],
        {
            // options
        }
      ),
    ]
    }
  }
}