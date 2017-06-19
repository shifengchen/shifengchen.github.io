var colors = ['#c67c8d', '#ffac70', '#0a6faf', '#bcdd83', '#c37b3c', '#aa468c', '#47dbf5', '#fff2d2', '#cce58a', '#54844d', '#5cb8b3', '#85929e']

function getMessage() {
  var message = $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    cache: false
  });

  message.done(function(json) {
    var content = json[0].content.slice(3,-5);
    var title = json[0].title;
    $(".quote-main").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#content').text(content);
      $('#title').text('- ' + title);
    });
    var color = Math.floor(Math.random() * colors.length);
    color = colors[color];
    $("html body").css("background-color", color);
    $("html body").css("color", color);
    $("button").css("background-color", color);
  });

  message.fail(function(jqXHR, textStatus) {
    $("#content").html( "Request failed: " + textStatus );
  });
}

$(document).ready(function() {
  getMessage();
  $("#getMessage").on("click", function() {
    getMessage();
  });
});
