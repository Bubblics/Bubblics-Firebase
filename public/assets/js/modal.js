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
    var subscriptionsRef = firebase.database().ref("subscriptions");
    var newSubscriptionRef = subscriptionsRef.push();
    newSubscriptionRef.set({
      'email': email
    });
  }
  $('#modal-input').css("display", "none");
  $('#modal-submit').css("display", "none");
  $('#modal-thank-you').css("display", "block");
}
