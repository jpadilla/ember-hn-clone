export default = App.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('story');
  }
});
