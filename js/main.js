/* eslint-disable no-undef */
var $form = document.querySelector('form');
var $img = document.querySelector('img');
var $title = document.querySelector('#title');
var $url = document.querySelector('#url');
var $notes = document.querySelector('#notes');
var $ul = document.querySelector('ul');
var $newBtn = document.querySelector('#new-button');
var $entryForm = document.querySelector("[data-view='entry-form']");
var $entries = document.querySelector("[data-view='entries']");
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

  $ul.prepend(createDom(entry));

  $entryForm.classList.add('hidden');
  $entries.classList.remove('hidden');
  hiddenOn.form = true;
  hiddenOn.entries = false;
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
    $ul.append(createDom(data.entries[i]));
  }
  if (hiddenOn.form === true) {
    $entryForm.classList.add('hidden');
    $entries.classList.remove('hidden');
  } else if (hiddenOn.entries === true) {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  }
});

$newBtn.addEventListener('click', function (event) {
  $entryForm.classList.remove('hidden');
  $entries.classList.add('hidden');
  hiddenOn.form = false;
  hiddenOn.entries = true;
});
