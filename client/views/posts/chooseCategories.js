/*
var postsData = [
  {
    title:'Secluded Intown Treehouse',
    category: 'Unique Lodging',
    location: 'Atlanta, Georgia, United States',
    url: 'http://airbnb.com/rooms/1415908'
  },
  

Template.postsList.helpers({
  //posts: postsData
  posts: function() {
    return Posts.find({}, {sort:{ submitted: -1, title: 1 }}) ;
  }
});
  */

Template.chooseCategories.events({
  'click #local' : function() {
    Session.set("myCat", "local");
    console.log("session set: " + Session.get("myCat"));
  },
  'click #international' : function() {
    Session.set("myCat", "international");
    console.log("session set: " + Session.get("myCat"));
  },
   'click #themed' : function() {
    Session.set("myCat", "themed");
    console.log("session set: " + Session.get("myCat"));
  }
  
});
 

Template.chooseCategories.rendered = function() {
  return Holder.run();
};