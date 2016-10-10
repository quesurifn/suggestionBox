app.factory('suggestions', [function(){
  var demoSuggestions = {
    posts: [
    {
      title: 'Free pizza at club meetings',
      upvotes: 15,
      downvotes: 12,
      comments: [],
    },

      title: 'Make everybody vote republican'
      upvotes: 15,
      downvotes: 1,
      comments: [],
    },
    {
      title: 'Make everybody vote republican'
      upvotes: 15,
      downvotes: 1,
      comments: [],
    },
    {
      title: 'Kyle dances around like an idiot after eating pizza',
      upvotes: 1,
      downvotes:12,
      comments: [],
    },
  ]
};
  return demoSuggestions;
}]);
