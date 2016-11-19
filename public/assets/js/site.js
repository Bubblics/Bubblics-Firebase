$(document).ready(function() {
  if (width <= 893) {
    $("#bubblics").css("margin-top", 0);

    $("#heart").css("display", "block");
    $("#sohooot").css("display", "block");
    $("#yesiam").css("display", "block");
  } else {
    $("#bubblics").css("margin-top", -650 / 1024 * width * 0.30);

    $("#heart").css("display", "none");
    $("#sohooot").css("display", "none");
    $("#yesiam").css("display", "none");
  }
});

var width = $(window).width();
var height = $(window).height();

$("#bubblics").css("width", width);
$("#bubblics").css("height", 650 / 1024 * width * 0.90 + 250);
$("#background").css("height", 650 / 1024 * width);

$("#heart").css("width", 74.7 / 1024 * width);
$("#heart").css("height", 73.3 / 1024 * width);
$("#heart").css("margin-top", 40 / 1024 * width);
$("#heart").css("margin-left", 230 / 1024 * width);

$("#sohooot").css("width", 197.3 / 1024 * width);
$("#sohooot").css("height", 75.3 / 1024 * width);
$("#sohooot").css("margin-top", 135 / 1024 * width);
$("#sohooot").css("margin-left", 195 / 1024 * width);

$("#yesiam").css("width", 158.7 / 1024 * width);
$("#yesiam").css("height", 75.3 / 1024 * width);
$("#yesiam").css("margin-top", 163 / 1024 * width);
$("#yesiam").css("margin-left", 724 / 1024 * width);

if (width / height > 1024 / 650)
  $("#background").css("background-size", "cover");
else
  $("#background").css("background-size", "contain");

if (width <= 893) {
  $("#bubblics").css("margin-top", 0);

  $("#heart").css("display", "block");
  $("#sohooot").css("display", "block");
  $("#yesiam").css("display", "block");
} else {
  $("#bubblics").css("margin-top", -650 / 1024 * width * 0.30);

  $("#heart").css("display", "none");
  $("#sohooot").css("display", "none");
  $("#yesiam").css("display", "none");
}

$(window).resize(function() {
  var width = $(window).width();
  var height = $(window).height();

  $("#bubblics").css("width", width);
  $("#bubblics").css("height", 650 / 1024 * width * 0.90 + 250);
  $("#background").css("height", 650 / 1024 * width);

  $("#heart").css("width", 74.7 / 1024 * width);
  $("#heart").css("height", 73.3 / 1024 * width);
  $("#heart").css("margin-top", 40 / 1024 * width);
  $("#heart").css("margin-left", 230 / 1024 * width);

  $("#sohooot").css("width", 197.3 / 1024 * width);
  $("#sohooot").css("height", 75.3 / 1024 * width);
  $("#sohooot").css("margin-top", 135 / 1024 * width);
  $("#sohooot").css("margin-left", 195 / 1024 * width);

  $("#yesiam").css("width", 158.7 / 1024 * width);
  $("#yesiam").css("height", 75.3 / 1024 * width);
  $("#yesiam").css("margin-top", 163 / 1024 * width);
  $("#yesiam").css("margin-left", 724 / 1024 * width);

  if (width / height > 1024 / 650)
    $("#background").css("background-size", "cover");
  else
    $("#background").css("background-size", "contain");

  if (width <= 893) {
    $("#bubblics").css("margin-top", 0);

    $("#heart").css("display", "block");
    $("#sohooot").css("display", "block");
    $("#yesiam").css("display", "block");
  } else {
    $("#bubblics").css("margin-top", -650 / 1024 * width * 0.30);

    $("#heart").css("display", "none");
    $("#sohooot").css("display", "none");
    $("#yesiam").css("display", "none");
  }
});
