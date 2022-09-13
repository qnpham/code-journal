var $form = document.querySelector('form');
var $img = document.querySelector('img');
var $title = document.querySelector('#title');
var $url = document.querySelector('#url');
var $notes = document.querySelector('#notes');
$url.addEventListener('input', function (event) {
  $img.setAttribute('src', $url.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var object = {
    title: $title.value,
    url: $url.value,
    notes: $notes.value,
    nextEntryId: 0
  };
  object.nextEntryId = object.nextEntryId + 1;
});
