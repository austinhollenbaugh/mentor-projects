$(document).ready(function() {
  console.log('ready!');
  var tweetControls = '#tweet-controls';
  var tweetCompose = '.tweet-compose';
  var charCount = parseInt($('#char-count').text());
  var tweetSubmit = '#tweet-submit';
  var tweetStream = '#stream';
  var tweetActions = '.tweet-actions';
  var name = $('#name').text();
  var username = $('#username').text();
  var avatar = $('#avatar').attr('src');
  var tweet = '.tweet';
  var stats = '.stats';
  var reply = '.reply';
  var hiddenStats = '.hidden-stats';
  var time = jQuery.timeago(new Date());

  $(tweetControls).hide();
  $(hiddenStats).hide();

  $(document).on('click', tweet, function() {
    $(hiddenStats, this).slideToggle();
  });

  $(tweetCompose).on('click', function() {
    $(this).css('height', '5em');
    $(tweetControls).show();
  });

  $(tweetCompose).on('keyup', function() {
    var tweetLength = $(this).val().length;
    var currentChars = charCount - tweetLength;
    $('#char-count').text(currentChars);

    if (currentChars <= 10) {
      $('#char-count').css('color', 'red');
      $(tweetSubmit).prop("disabled", false);
      if (currentChars <= 0) {
        console.log('too many characters');
        $(tweetSubmit).prop("disabled", true);
      }
    } else {
      $('#char-count').css('color', '#999');
    }

  });

  $(tweetSubmit).on('click', function() {
    var tweetText = $(tweetCompose).val();
    console.log(tweetText);
    // localStorage.setItem(tweetText)

    $(tweetStream).prepend(`<div class="tweet">
      <div class="content">
        <img class="avatar" src="` + avatar + `" />
        <strong class="fullname">` + name + `</strong>
        <span class="username">@austin</span>
        <p class="tweet-text">` + tweetText + `</p>
        <div class="tweet-actions">
          <ul>
            <li><span class="icon action-reply"></span> Reply</li>
            <li><span class="icon action-retweet"></span> Retweet</li>
            <li><span class="icon action-favorite"></span> Favorite</li>
            <li><span class="icon action-more"></span> More</li>
          </ul>
        </div>
        <div class="hidden-stats">
        <div class="stats">
          <div class="retweets">
            <p class="num-retweets">30</p>
            <p>RETWEETS</p>
          </div>
          <div class="favorites">
            <p class="num-favorites">6</p>
            <p>FAVORITES</p>
          </div>
          <div class="users-interact">
            <div>
              <img src="img/alagoon.jpg" />
              <img src="img/vklimenko.jpg" />
            </div>
          </div>
          <div class="time">`+ time +`</div>
        </div>
        <div class="reply">
          <img class="avatar" src="img/alagoon.jpg" />
          <textarea class="tweet-compose" placeholder="Reply to ` + username + `"/></textarea>
        </div>
        </div>
      </div>
    </div>`);

    $(hiddenStats).hide();




  });

}); //end jQuery function
