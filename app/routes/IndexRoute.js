module.exports = App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo('stories');
  }
});
