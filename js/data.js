/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  this.localStorage.setItem('data', stringData);
});
