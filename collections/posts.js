Posts = new Meteor.Collection('posts');

Posts.allow({
  update: function(userId, post){
    return ownsDocument(userId, post);
  },
  remove: function(userId, post){
    return ownsDocument(userId, post);
  }
});

Posts.deny({
  update: function(userId, post, fieldNames){
    return (_.without(fieldNames, 'title', 'url', 'description').length > 0)
  }
});

/*
var Schemas = {};

Schemas.Posts = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
   
    images: {
     type: String,
      regEx: SimpleSchema.RegEx.Id,
      // auxCollections: ["Images"],
      label: "Images"
    },
    
    description: {
        type: String,
        label: "Description"
    },
    
    tags: {
      type: String, 
      regEx: SimpleSchema.RegEx.Id,
      label: "Tags"
    },
    
    submitted: {
        type: Date,
        label: "When this post was created",
        //showWidget:false,
        denyUpdate: true,
        autoValue: function(){
          if (this.isInsert)
            return new Date();
        }
    },
    userId: {
      type: String,
      //showWidget:false,
      regEx: SimpleSchema.RegEx.Id,
      denyUpdate: true,
      autoValue: function(){
         if (this.isInsert)
          return Meteor.userId();
      }
    }
});


Posts.attachSchema(Schemas.Posts);
*/


Meteor.methods({
  post: function(postAttributes){
    
    var user = Meteor.user(),
        duplicatePost = Posts.findOne({url: postAttributes.url});
    
    // make sure user is logged in
    if (!user)
      throw new Meteor.Error(401, "Uh-oh! You need to be logged!");
    
    // make sure that postAttributes has a title and URL
    if (!postAttributes.title)
      throw new Meteor.Error(422, "Uh-oh! You need a title!");
      
    if (!postAttributes.url)
      throw new Meteor.Error(422, "Uh-oh! You need a URL!");
    
    // check to make sure that the URL has not already been submitted
    if (postAttributes.url && duplicatePost) {
      throw new Meteor.Error(302, "This link has already been posted", duplicatePost._id);
    }
    
    // grab the right fields, and add new fields such as: username, timestamp
    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'description'), {
      userId: user._id,
      author: user.profile.name, // if using Facebook account, then username is not available. Use profile.name instead
      submitted: new Date().getTime()
    });
    
    var postId = Posts.insert(post);
    
    return postId;
  }
});