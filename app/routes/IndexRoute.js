export default = App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo('stories');
  }
});
