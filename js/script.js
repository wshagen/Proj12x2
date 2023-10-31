/*Hover Effect on True/False*/

$('.answer').mouseenter(function() {
  $(this).addClass("hover-effect");
});

$('.answer').mouseleave(function() {
  $(this).removeClass("hover-effect");
});


// Selecting Answers

$('#q1__answer-selection-4').on('click', function() {
  $('.feedback').text('That"s Right!!').addClass("correct");
  $('.answer').attr('disabled',true).removeClass("hover-effect").off('mouseenter').off('mouseleave');
  $('.next').attr('disabled', false).on("click", function() {
    alert("Thanks for playing!!");
    location.reload();
  });
  $(this).addClass("correct");
});

$('#q1__answer-selection-1, #q1__answer-selection-2, #q1__answer-selection-3').on('click',function() {
  $('.feedback').text("Not Quite").addClass("incorrect");
  $('.answer').attr('disabled', true).removeClass("hover-effect").off('mouseenter').off('mouseleave');
  $('.next').attr('disabled', false).text("Try again!").on("click", function() {
    location.reload();
  });
  $(this).addClass("incorrect");
});
