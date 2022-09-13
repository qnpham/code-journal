var $form = document.querySelector('form');
var $img = document.querySelector('img');
var $title = document.querySelector('#title');
var $url = document.querySelector('#url');
var $notes = document.querySelector('#notes');
$url.addEventListener('input', function (event) {
  $img.setAttribute('src', $url.value);
});
var counter = 0;

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    title: $title.value,
    url: $url.value,
    notes: $notes.value,
    nextEntryId: 0
  };
  entry.nextEntryId = ++counter;
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.entries.unshift(entry);
  $title.value = '';
  $url.value = '';
  $notes.value = '';
});
