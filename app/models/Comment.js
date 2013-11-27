var attr = DS.attr,
  belongsTo = DS.belongsTo,
  hasMany = DS.hasMany;

module.exports = App.Comment = DS.Model.extend({
  body: attr('string'),
  votes: hasMany('vote'),
  user: belongsTo('user'),
  createdAt: attr('date')
});
