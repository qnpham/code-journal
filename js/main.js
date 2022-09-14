var $form = document.querySelector('form');
var $img = document.querySelector('img');
var $title = document.querySelector('#title');
var $url = document.querySelector('#url');
var $notes = document.querySelector('#notes');
var $ul = document.querySelector('ul');
var $newBtn = document.querySelector('#new-button');
var $entryForm = document.querySelector("[data-view='entry-form']");
var $entries = document.querySelector("[data-view='entries']");
var $entriesNav = document.querySelector('#entries-nav');
var $noEntries = document.querySelector('#no-entries');
$url.addEventListener('input', function (event) {
  $img.setAttribute('src', $url.value);
});

function checkEntries() {
  if (data.entries.length === 0) {
    $noEntries.classList.remove('hidden');
  } else if (data.entries.length > 0) {
    $noEntries.classList.add('hidden');
  }
}

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
  data.view = 'entries';
  checkEntries();
});

function createDom(entry) {
  var li = document.createElement('li');
  li.setAttribute('data-entry-id', entry.entryId);

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

  var middleContent = makeChild('div', 'class', 'middle-content row');
  columnHalf2.appendChild(middleContent);

  var h4 = document.createElement('h4');
  h4.textContent = entry.title;
  middleContent.appendChild(h4);

  var icon = makeChild('i', 'class', 'fa-solid fa-pen');
  middleContent.appendChild(icon);

  var p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalf2.appendChild(p);

  return li;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.append(createDom(data.entries[i]));
  }
  if (data.view === 'entries') {
    $entryForm.classList.add('hidden');
    $entries.classList.remove('hidden');
    checkEntries();
  } else if (data.view === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  }
});

$newBtn.addEventListener('click', function (event) {
  $entryForm.classList.remove('hidden');
  $entries.classList.add('hidden');
  data.view = 'entry-form';
});

$entriesNav.addEventListener('click', function () {
  $entryForm.classList.add('hidden');
  $entries.classList.remove('hidden');
  data.view = 'entries';
  checkEntries();
});

$ul.addEventListener('click', function (event) {
  if (event.target.tagName !== 'I') return;
  $entryForm.classList.remove('hidden');
  $entries.classList.add('hidden');

  var id = event.target.closest('li').getAttribute('data-entry-id');

  for (var i = 0; i < data.entries.length; i++) {
    if (Number(id) === data.entries[i].entryId) {
      data.editing = data.entries[i];

      $title.value = data.editing.title;
      $url.value = data.editing.url;
      $img.setAttribute('src', data.editing.url);
      $notes.value = data.editing.notes;
    }
  }
});
