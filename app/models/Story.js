var attr = DS.attr,
  belongsTo = DS.belongsTo,
  hasMany = DS.hasMany;

module.exports = App.Story = DS.Model.extend({
  title: attr('string'),
  url: attr('string'),
  text: attr('string'),
  votes: hasMany('vote'),
  submitedBy: belongsTo('user'),
  createdAt: attr('date')
});
