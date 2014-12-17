Router.configure({
  layoutTemplate:'layout'
});

Router.map(function() {
    this.route('index', {
    path: '/index'
  });
  
  this.route('postsList', {
    path: '/'
  });
  
  this.route('howitWorks', {
    path:'/howitWorks'
  });
  
  this.route('postPage', {
    path:'/posts/:_id',
    data:function(){
      return Posts.findOne(this.params._id);
    }
  });
  
    this.route('postEdit', {
    path:'/posts/:_id/edit',
    data:function(){
      return Posts.findOne(this.params._id);
    }
  });
  
  this.route('postsByAuthor', {
    path:'/author/:author',
    data:function(){
      return {author:this.params.author}
    }
  });
  
  this.route('postSubmit', {
    path:'/new'
  });
  
  this.route('chooseCategories', {
    path: '/home'
  });
  
  this.route('travelInfo', {
    path: '/travelInfo'
  });
  
});
  
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}
  
Router.onBeforeAction(requireLogin, {only:['postSubmit', 'postEdit']});
