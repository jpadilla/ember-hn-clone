var attr = DS.attr;

module.exports = App.User = DS.Model.extend({
  username: attr('string'),
  email: attr('string')
});
