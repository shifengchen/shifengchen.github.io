var colors = ['#b03665', '#41786e', '#5cb8b3', '#1e3560', '#8867ca', '#3fa3e7', '#97c579', '#e67471', '#6aaa5e', '#f5d957', '#2c4d72', '#5e3138', '#501651', '#0e1122', '#c37b3c', '#e67471']

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
