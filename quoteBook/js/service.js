angular.module('quoteBook').service('service', function() {
  this.test = "everything works";

  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  if (localStorage.getItem('quoteArr')) {
    var arr = JSON.parse(localStorage.getItem('quoteArr'));
    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      quotes.push(arr[i]);
    }
  }

  this.getData = function() {
    return quotes;
  };

  this.addData = function(data) {

    if (data.text && data.author) {
      quotes.push(data);
      arr.push(data);
      localStorage.setItem("quoteArr", JSON.stringify(arr));
      return true;
    }
    return false;
  };

  this.removeData = function(text) {
    for (var i = data.length - 1; i >= 0; i++) {
      if (text.toLowerCase() === quotes[i].text.toLowerCase()) {
        data.splice(i, 1);
      }
    }
  };

});
