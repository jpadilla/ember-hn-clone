var belongsTo = DS.belongsTo;

module.exports = App.Vote = DS.Model.extend({
  user: belongsTo('user')
});
