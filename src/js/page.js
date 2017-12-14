const html = require('./html.js')
const ul = html.get('sounds-list')

function addSoundItem (filename, filepath) {
  // Create elements
  let li = document.createElement('li')
  let span = document.createElement('span')
  let b = document.createElement('b')
  let a = document.createElement('a')
  let p = document.createElement('p')

  // Prepare elements
  // List item
  li.setAttribute('id', filename)
  li.setAttribute('class', 'collection-item avatar')
  // Span
  span.setAttribute('class', 'title')
  // A tags
  a.setAttribute('class', 'secondary-content')
  a.setAttribute('href', '#')
  a.setAttribute('onclick', `renderer.fileRemoved(this.parentNode.id, '${filename}')`)

  // Append elements
  li.insertAdjacentHTML('afterbegin', `<i class="material-icons circle indigo">play_arrow</i>`)
  li.appendChild(span)
  span.appendChild(b)
  b.innerHTML = filename
  span.appendChild(p)
  p.innerHTML = `<audio controls><source src="${filepath}"></audio>`
  li.appendChild(a)
  a.innerHTML = '<i class="material-icons indigo-text">close</i>'
  ul.appendChild(li)
}

function resizeCollections () {
  let screenSize = _detectWindowSize()
  html.get('console').setAttribute('style', `height: ${screenSize}px;`)
  html.get('sounds-list').setAttribute('style', `height: ${screenSize}px;`)
}

function _detectWindowSize () {
  let h = window.screen.height
  let w = window.screen.width
  if (w > 1366 && h > 768) return 330
  else if (w <= 1366 && h <= 768) return 290
}

exports.addSoundItem = addSoundItem
exports.resizeCollections = resizeCollections
