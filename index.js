// ------------------------------------
// #POSTHTML - INJECT
// ------------------------------------

'use strict'

module.exports = (options) => {
  options = options || {}
  options.root = options.root || './'

  let head = options.head

  return function PostHTMLInject (tree) {
    tree.match({tag: 'head'}, (node) => {
      head.forEach(inject => node.content.push('\n  ', inject, '\n'))
      return node
    })

    tree.match({tag: 'inject'}, (node) => node)

    return tree
  }
}
