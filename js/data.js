/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var stringData = JSON.stringify(data);

window.addEventListener('beforeunload', function (event) {
  this.localStorage.setItem('data', stringData);
});
