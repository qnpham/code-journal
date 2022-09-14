/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
var hiddenOn = {
  form: null,
  entries: null
};
var previousData = localStorage.getItem('userData');
if (previousData !== undefined) {
  data = JSON.parse(previousData);
}
var previousHidden = localStorage.getItem('hiddenView');
if (previousHidden !== undefined) {
  hiddenOn = JSON.parse(previousHidden);
}
window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  this.localStorage.setItem('userData', stringData);

  var stringHidden = JSON.stringify(hiddenOn);
  this.localStorage.setItem('hiddenView', stringHidden);
});
