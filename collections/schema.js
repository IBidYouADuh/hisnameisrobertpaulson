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
    description: {
        type: String,
        label: "Description"
    },
    tags: {
        type: String,
        label: "Tags"
    },
    submitted: {
        type: Date,
        label: "When this post was created",
        denyUpdate: true
    }
});

Posts.attachSchema(Schemas.Posts);