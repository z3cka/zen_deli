(function ($) {
$(document).ready(function(){
  if ($('.webform-button-wrapper input:nth-child(2)').attr('value') >= '2' ) {
    $('.form-seperator').columnize({width:330});
  //$('.page-node-1 .form-item:first-child').addClass('pad-column-tops');
  };
});
})(jQuery);
