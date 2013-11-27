module.exports = App.Router.map(function() {
  this.resource('stories', function() {
    this.route('recent');
    this.route('submit');
    this.resource('comments', {path: '/:story_id'});
  });
});
