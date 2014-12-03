Template.postItem.helpers({
  ownpost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
    }
});

Template.postItem.rendered = function() {
  return Holder.run();
};