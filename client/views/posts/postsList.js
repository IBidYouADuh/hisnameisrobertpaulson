var postsData = [
  {
    title:'Moby Dick',
    author: 'Herman Melville',
    url: 'http://barnesandnoble.com'
  },
  {
    title:'The Lord of the Rings',
    author: 'J.R. Tolkein',
    url: 'http://google.com'
  },
  {
    title:'The Lion the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    url: 'http://google.com'
  },
  {
    title:'The Catcher in the Rye',
    author: 'J.D. Salinger',
    url: 'http://google.com'
  },
  {
    title:'Cujo',
    author: 'Stephen King',
    url: 'http://yahoo.com'
  }
];

Template.postsList.helpers({
  //posts: postsData
  posts: function() {
    return Posts.find({}, {sort:{ submitted: -1, title: 1 }}) ;
  }
});
  
 