TagsCollection = new Meteor.Collection('tags');

var Schemas ={};

Schemas.TagsCollection = new SimpleSchema({
  label: {
    type: String,
    label: "Label"
  },
  postId:{
    type: String, 
    regEx: SimpleSchema.RegEx.Id,
    label: "postId"
  },
  submitted: {
      type: Date,
      label: "When this Tag was created",
      //showWidget:false,
      denyUpdate: true,
      autoValue: function(){
        if (this.isInsert)
          return new Date();
      }
  },
});


TagsCollection.attachSchema(Schemas.TagsCollection);