[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <a href="https://github.com/posthtml/posthtml">
    <img width="180" height="180"
      src="http://posthtml.github.io/posthtml/logo.svg">
  </a>
  <h1>Inject Plugin</h1>
  <p>A plugin to inject resources with ease<p>
</div>

# ! WIP

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-inject
```

<h2 align="center">Usage</h2>

#### Images
```txt
inject(img='photo.png' lazy)
```

```html
<inject img="photo.png" lazy></inject>
```

```html
<img data-src='photo.png'>
<noscript>
  <img src="photo.png">
</noscript>


<script>LazyJS..</script>
```

<h2 align="center">Example</h2>

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) 2016 PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-inject.svg
[npm-url]: https://npmjs.com/package/posthtml-inject

[deps]: https://david-dm.org/posthtml/posthtml-inject.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-inject

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-inject.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-inject

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-inject/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-inject?branch=master
