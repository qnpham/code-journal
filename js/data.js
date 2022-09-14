/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var previousData = localStorage.getItem('userData');
if (previousData !== undefined) {
  data = JSON.parse(previousData);
}
window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  this.localStorage.setItem('userData', stringData);
});
