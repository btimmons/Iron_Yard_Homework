//document.getElementById('text').innerHTML = "Hello"

//$('#text').text("Hello World")

//$('#text').html("<h1>Hello World</h1>")

//get the shopping cart to increment by one
function add() {
  var total = $('#total').text();
  var newTotal = $('#total').text(Number(total) + 1);//Number converts a string into an integer
  return newTotal;
}


function sendEmail() {
  $('#email').text("Email has been sent!");
  return window.setTimeout(function() { //this is called an anonymous function
    //(you don't have to name it)
    $('#email').text('Send Email')
  },2000)//this time is in milliseconds
}

function checkClass(header, content) {
  if ($(header).hasClass('active')) {
    $(header).removeClass('active');
    $(content).addClass('hidden');
  }
  return true;
}

function makeActive(header, content) {
  checkClass('#description', '#descriptionContent');
  checkClass('#questions', '#questionsContent');
  checkClass('#reviews', '#reviewsContent');
  $(header).addClass('active');
  $(content).removeClass('hidden');
  return true;
}

$(function () {

  $("#rateYo").rateYo({
    rating: 3.6
  });

});

$('#cool').css('background-color', 'red');
