// ------------------------------------
// #POSTHTML - INJECT
// ------------------------------------

'use strict'

module.exports = (options) => {
  options = options || {}
  options.root = options.root || './'

  return function PostHTMLInject (tree) {
    tree.match({tag: 'inject'}, (node) => {
      console.log(node)
    })
    return tree
  }
}
