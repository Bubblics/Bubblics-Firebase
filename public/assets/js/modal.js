$('.modal').on('shown.bs.modal', function() {
  $('body').css('position', 'fixed');
  $("#modal-input").focus();
});
$('.modal').on('hidden.bs.modal', function() {
  $('body').css('position', 'relative');
  $('#modal-input').css("display", "block");
  $('#modal-submit').css("display", "block");
  $('#modal-thank-you').css("display", "none");
});

function subscribe() {
  var email = $("#modal-input").val();
  if (email && email.length > 0) {
    Parse.initialize("xRmLMsYx5yWnE3JWYPYIToUm0NPqacXVr8jFoU6C", "nTokTB9of3iigpwBevZny1T1FnvLwwaZ6iWVN0sb");
    var Subscription = Parse.Object.extend("Subscription");
    var subscription = new Subscription();
    subscription.save({
      email: email
    });
  }
  $('#modal-input').css("display", "none");
  $('#modal-submit').css("display", "none");
  $('#modal-thank-you').css("display", "block");
}
