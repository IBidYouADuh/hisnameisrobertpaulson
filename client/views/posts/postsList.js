var postsData = [
  {
    title:'Feel Alive in a VW t5 Camperman',
    author: 'Air BnB',
    url: 'http://airbnb.com/rooms/1848164'
  },
  {
    title:'Sleep in a Tour Bus!',
    author: 'Air Bnb',
    url: 'http://airbnb.com/2410308'
  },
  {
    title:'The Worlds first Self Catering Pub',
    author: 'Air Bnb',
    url: 'http://airbnb.com/1223481'
  },
  {
    title:'Boat-house in the Beach',
    author: 'Air BnB',
    url: 'http://airbnb.com/1361072'
  },
  {
    title:'Tree House in a Natural Park',
    author: 'airbnb',
    url: 'http://airbnb.com/645850'
  }
];

Template.postsList.helpers({
  //posts: postsData
  posts: function() {
    return Posts.find({}, {sort:{ submitted: -1, title: 1 }}) ;
  }
});
  
 