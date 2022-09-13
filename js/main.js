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
  var entry = {
    title: $title.value,
    url: $url.value,
    notes: $notes.value,
    nextEntryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(entry);

  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
});
