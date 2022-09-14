var $form = document.querySelector('form');
var $img = document.querySelector('img');
var $title = document.querySelector('#title');
var $url = document.querySelector('#url');
var $notes = document.querySelector('#notes');
var $ul = document.querySelector('ul');

$url.addEventListener('input', function (event) {
  $img.setAttribute('src', $url.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    title: $title.value,
    url: $url.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(entry);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});

function createDom(entry) {
  var li = document.createElement('li');

  function makeChild(tagName, attr, attrValue) {
    var element = document.createElement(tagName);
    element.setAttribute(attr, attrValue);
    return element;
  }

  var row = makeChild('div', 'class', 'row');
  li.appendChild(row);

  var columnHalf = makeChild('div', 'class', 'column-half');
  row.appendChild(columnHalf);

  var imgContainer = makeChild('div', 'class', 'entry-image-container');
  columnHalf.appendChild(imgContainer);

  var img = makeChild('img', 'src', entry.url);
  imgContainer.appendChild(img);

  var columnHalf2 = makeChild('div', 'class', 'column-half');
  row.appendChild(columnHalf2);

  var h4 = document.createElement('h4');
  h4.textContent = entry.title;
  columnHalf2.appendChild(h4);

  var p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalf2.appendChild(p);

  return li;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(createDom(data.entries[i]));
  }
});
