// ------------------------------------
// #POSTHTML - META
// ------------------------------------

'use strict'

module.exports = function Meta (meta) {
  if (meta.http) {
    this.http = meta.http || ''
    this.content = meta.content || ''
    this.node = {tag: 'meta', attrs: { 'http-equiv': `${this.http}`, content: `${this.content}` }}
    return this.node
  }
  if (meta.charset) {
    this.charset = meta.charset || ''
    this.node = {tag: 'meta', attrs: { charset: `${this.charset}` }}
    return this.node
  }

  this.name = meta.name || ''
  this.content = meta.content || ''

  this.node = {tag: 'meta', attrs: { name: `${this.name}`, content: `${this.content}` }}
  return this.node
}
