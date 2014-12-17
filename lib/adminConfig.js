AdminConfig = { 
  adminEmails: ['sad343@nyu.edu'],
  collections: { 
    Posts: {
      omitFields: ['submitted', 'userId']
    }, 
    TagsCollection: {
      auxCollections: ['Posts'],
      tableColumns: [
        {label: 'Label', name: 'label'},
        {label: 'postId', name:'postId'},
        {label: 'Post Title', name: 'postId', collection: 'Posts', collection_property: 'title'}
      ],
      omitFields: ['submitted']
    }
    /*
    Images: {
      auxCollections: ["Posts"]
    }
    */
  } 
}