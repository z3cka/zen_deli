(function ($) {
  $(document).ready(function(){
    // Add Next Page buttons
    $('#webform-component-about-you').append('<button type="button" class="fancy-next-button about-you">Next Page</button>');
    $('#webform-component-group-1').append('<button type="button" class="fancy-next-button group-1">Next Page</button>');
    $('#webform-component-group-2').append('<button type="button" class="fancy-next-button group-2">Next Page</button>');
    $('#webform-component-group-3').append('<button type="button" class="fancy-next-button group-3">Next Page</button>');
    $('#webform-component-group-4').append('<button type="button" class="fancy-next-button group-4">Next Page</button>');
    $('#webform-component-group-5').append('<button type="button" class="fancy-next-button group-5">Next Page</button>');
    $('#webform-component-group-6').append('<button type="button" class="fancy-next-button group-6">Next Page</button>');
    $('#webform-component-group-7').append('<button type="button" class="fancy-next-button group-7">Next Page</button>');
    $('#webform-component-group-8').append('<button type="button" class="fancy-next-button group-8">Next Page</button>');
    $('#webform-component-female-only').append('<button type="button" class="fancy-next-button female-only">Next Page</button>');
    $('#webform-component-male-only').append('<button type="button" class="fancy-next-button male-only">Next Page</button>');

    // Add Previous Page buttons
    $('#webform-component-group-1').append('<button type="button" class="fancy-back-button group-1">Back</button>');
    $('#webform-component-group-2').append('<button type="button" class="fancy-back-button group-2">Back</button>');
    $('#webform-component-group-3').append('<button type="button" class="fancy-back-button group-3">Back</button>');
    $('#webform-component-group-4').append('<button type="button" class="fancy-back-button group-4">Back</button>');
    $('#webform-component-group-5').append('<button type="button" class="fancy-back-button group-5">Back</button>');
    $('#webform-component-group-6').append('<button type="button" class="fancy-back-button group-6">Back</button>');
    $('#webform-component-group-7').append('<button type="button" class="fancy-back-button group-7">Back</button>');
    $('#webform-component-group-8').append('<button type="button" class="fancy-back-button group-8">Back</button>');
    $('#webform-component-female-only').append('<button type="button" class="fancy-back-button female-only">Back</button>');
    $('#webform-component-male-only').append('<button type="button" class="fancy-back-button male-only">Back</button>');
    $('#webform-component-important').append('<button type="button" class="fancy-back-button important">Back</button>');

    // Make buttons work
    $('.fancy-next-button.about-you').click(function(){
      $('#webform-component-about-you').hide();
      $('#webform-component-group-1').fadeIn('slow');
    });
//g1    
    $('.fancy-next-button.group-1').click(function(){
      $('#webform-component-group-1').hide();
      $('#webform-component-group-2').fadeIn('slow');
    });
    $('.fancy-back-button.group-1').click(function(){
      $('#webform-component-group-1').hide();
      $('#webform-component-about-you').fadeIn('slow');
    });
//g3
    $('.fancy-next-button.group-2').click(function(){
      $('#webform-component-group-2').hide();
      $('#webform-component-group-3').fadeIn('slow');
    });
    $('.fancy-back-button.group-2').click(function(){
      $('#webform-component-group-2').hide();
      $('#webform-component-group-1').fadeIn('slow');
    });
//g3
    $('.fancy-next-button.group-3').click(function(){
      $('#webform-component-group-3').hide();
      $('#webform-component-group-4').fadeIn('slow');
    });
    $('.fancy-back-button.group-3').click(function(){
      $('#webform-component-group-3').hide();
      $('#webform-component-group-2').fadeIn('slow');
    });
//g4
    $('.fancy-next-button.group-4').click(function(){
      $('#webform-component-group-4').hide();
      $('#webform-component-group-5').fadeIn('slow');
    });
    $('.fancy-back-button.group-4').click(function(){
      $('#webform-component-group-4').hide();
      $('#webform-component-group-3').fadeIn('slow');
    });
//g5
    $('.fancy-next-button.group-5').click(function(){
      $('#webform-component-group-5').hide();
      $('#webform-component-group-6').fadeIn('slow');
    });
    $('.fancy-back-button.group-5').click(function(){
      $('#webform-component-group-5').hide();
      $('#webform-component-group-4').fadeIn('slow');
    });
//g6
    $('.fancy-next-button.group-6').click(function(){
      $('#webform-component-group-6').hide();
      $('#webform-component-group-7').fadeIn('slow');
    });
    $('.fancy-back-button.group-6').click(function(){
      $('#webform-component-group-6').hide();
      $('#webform-component-group-5').fadeIn('slow');
    });
//g7
    $('.fancy-next-button.group-7').click(function(){
      $('#webform-component-group-7').hide();
      $('#webform-component-group-8').fadeIn('slow');
    });
    $('.fancy-back-button.group-7').click(function(){
      $('#webform-component-group-7').hide();
      $('#webform-component-group-6').fadeIn('slow');
    });
//g8
    $('.fancy-next-button.group-8').click(function(){
      if ($('#edit-submitted-about-you-gender-2').is(':checked')) {
        $('#webform-component-group-8').hide();
        $('#webform-component-male-only').fadeIn('slow');
      }      
      if ($('#edit-submitted-about-you-gender-1').is(':checked')) {
        $('#webform-component-group-8').hide();
        $('#webform-component-female-only').fadeIn('slow');
      }
    });
    $('.fancy-back-button.group-8').click(function(){
      $('#webform-component-group-8').hide();
      $('#webform-component-group-7').fadeIn('slow');
    });
//female-only
    $('.fancy-next-button.female-only').click(function(){
      $('#webform-component-female-only').hide();
      $('#webform-component-important').fadeIn('slow');
      // Show Submit button & Captcha
      $('.captcha.form-wrapper').fadeIn('slow');
      $('#edit-submit').fadeIn('slow');
    });
    $('.fancy-back-button.female-only').click(function(){
      $('#webform-component-female-only').hide();
      $('#webform-component-group-8').fadeIn('slow');
    });
//male-only
    $('.fancy-next-button.male-only').click(function(){
      $('#webform-component-male-only').hide();
      $('#webform-component-important').fadeIn('slow');
      // Show Submit button & Captcha
      $('.captcha.form-wrapper').fadeIn('slow');
      $('#edit-submit').fadeIn('slow');
    });
    $('.fancy-back-button.male-only').click(function(){
      $('#webform-component-male-only').hide();
      $('#webform-component-group-8').fadeIn('slow');
    });
//important
    $('.fancy-back-button.important').click(function(){
      $('#webform-component-important').hide();
      if ($('#edit-submitted-about-you-gender-2').is(':checked')) {
        $('#webform-component-male-only').fadeIn('slow');
      } else {
        $('#webform-component-female-only').fadeIn('slow');
      }
      // Hide Submit button & Captcha
      $('.captcha.form-wrapper').hide();
      $('#edit-submit').hide();
    });
  // Check if user messed up the captcha
  if ($('#edit-captcha-response').hasClass('error')) {    
    $('.captcha.form-wrapper').fadeIn('slow');
    $('#edit-submit').fadeIn('slow');
  }
  // Let's wrap our fancy buttons
  $('.fancy-next-button, fancy-back-button').wrap('<div class="fancy-buttons">');

  // Let's make columns
  // About You
  // Tag stuff in columns
  $('#webform-component-about-you .fieldset-wrapper .form-item:lt(3)').addClass('column-1-wrapped');
  $('#webform-component-about-you .fieldset-wrapper .form-item:gt(2)').addClass('column-2-wrapped');
  // Wrap About You columns
  $('#webform-component-about-you .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-about-you .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 1
  // Tag stuff in columns
  $('#webform-component-group-1 .fieldset-wrapper .form-item:lt(10)').addClass('column-1-wrapped');
  $('#webform-component-group-1 .fieldset-wrapper .form-item:gt(9)').addClass('column-2-wrapped');
  // Wrap Group 1 columns
  $('#webform-component-group-1 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-1 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 2
  // Tag stuff in columns  
  $('#webform-component-group-2 .fieldset-wrapper .form-item:lt(10)').addClass('column-1-wrapped');
  $('#webform-component-group-2 .fieldset-wrapper .form-item:gt(9)').addClass('column-2-wrapped');
  // Wrap Group 2 columns
  $('#webform-component-group-2 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-2 .column-2-wrapped').wrapAll('<div class="column-2" />');
  
  // Group 3
  // Tag stuff in columns  
  $('#webform-component-group-3 .fieldset-wrapper .form-item:lt(7)').addClass('column-1-wrapped');
  $('#webform-component-group-3 .fieldset-wrapper .form-item:gt(6)').addClass('column-2-wrapped');
  // Wrap Group 3 columns
  $('#webform-component-group-3 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-3 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 4
  // Tag stuff in columns  
  $('#webform-component-group-4 .fieldset-wrapper .form-item:lt(9)').addClass('column-1-wrapped');
  $('#webform-component-group-4 .fieldset-wrapper .form-item:gt(8)').addClass('column-2-wrapped');
  // Wrap Group 4 columns
  $('#webform-component-group-4 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-4 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 5
  // Tag stuff in columns  
  $('#webform-component-group-5 .fieldset-wrapper .form-item:lt(13)').addClass('column-1-wrapped');
  $('#webform-component-group-5 .fieldset-wrapper .form-item:gt(12)').addClass('column-2-wrapped');
  // Wrap Group 5 columns
  $('#webform-component-group-5 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-5 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 6
  // Tag stuff in columns  
  $('#webform-component-group-6 .fieldset-wrapper .form-item:lt(5)').addClass('column-1-wrapped');
  $('#webform-component-group-6 .fieldset-wrapper .form-item:gt(4)').addClass('column-2-wrapped');
  // Wrap Group 6
  $('#webform-component-group-6 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-6 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 7
  // Tag stuff in columns  
  $('#webform-component-group-7 .fieldset-wrapper .form-item:lt(38)').addClass('column-1-wrapped');
  $('#webform-component-group-7 .fieldset-wrapper .form-item:gt(37)').addClass('column-2-wrapped');
  // Wrap Group 7
  $('#webform-component-group-7 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-7 .column-2-wrapped').wrapAll('<div class="column-2" />');

  // Group 8
  // Tag stuff in columns  
  $('#webform-component-group-8 .fieldset-wrapper .form-item:lt(14)').addClass('column-1-wrapped');
  $('#webform-component-group-8 .fieldset-wrapper .form-item:gt(13)').addClass('column-2-wrapped');
  // Wrap Group 8
  $('#webform-component-group-8 .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-group-8 .column-2-wrapped').wrapAll('<div class="column-2" />');
  
  // Female Only
  // Tag stuff in columns  
  $('#webform-component-female-only .fieldset-wrapper .form-item:lt(7)').addClass('column-1-wrapped');
  $('#webform-component-female-only .fieldset-wrapper .form-item:gt(6)').addClass('column-2-wrapped');
  // Wrap Female only columns
  $('#webform-component-female-only .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-female-only .column-2-wrapped').wrapAll('<div class="column-2" />');
  
  // male Only
  // Tag stuff in columns  
  $('#webform-component-male-only .fieldset-wrapper .form-item:lt(6)').addClass('column-1-wrapped');
  $('#webform-component-male-only .fieldset-wrapper .form-item:gt(5)').addClass('column-2-wrapped');
  // Wrap male only columns
  $('#webform-component-male-only .column-1-wrapped').wrapAll('<div class="column-1" />');
  $('#webform-component-male-only .column-2-wrapped').wrapAll('<div class="column-2" />');
  
  });
})(jQuery);
