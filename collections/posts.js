Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
    return !! userId;
  }
});

Meteor.methods({
  post: function(postAttributes){
    
    var user = Meteor.user(),
        duplicatePost = Posts.findOne({url: postAttributes.url});
    
    //make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged in!");
    
    //make sure postAttributes has a title and URL
    if (!postAttributes.title)
      throw new Meteor.Error(422, "Uh-oh! You need a title!");
    
    if (!postAttributes.title)
      throw new Meteor.Error(422, "Uh-oh! You need a URL!");
    //check to make sure URL has not already been submitted
    if (postAttributes.url && duplicatePost) {
      throw new Meteor.Error(302, "This link has already been posted.", duplicatePost._id);
    }
 
    
    
    //grab the right fields, and add new fields such as: username, timestamp
    var post =_.extend(_.pick(postAttributes, 'url', 'title', 'description'),{userId: user._id,
                                                                              author: user.username,
                                                                              submitted: new Date(). getTime()
  });
  
  
  var postId = Posts.insert(post);
    
    return postId;
  }
});