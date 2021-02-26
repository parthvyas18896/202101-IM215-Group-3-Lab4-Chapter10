$(document).ready(function()
{
  $("#thumbBox img").on('click',function()
  {
      
      var alt = $(this).attr("alt");
      var title = $(this).attr("title");
      var src = $(this).attr("src"); 
      var random = src.replace("small","medium");
      var newsrc = $("#imgManipulated img").attr("src",random);
      $('figcaption').replaceWith($('<figcaption><em>'+ alt + '</em><br>' + title + '</figcaption>'))
  });

var setFilterandwebkit = function () {

    var filter = 'opacity('   + $('#sliderOpacity').attr('value')    + '%) ' +
    'saturate('   + $('#sliderSaturation').attr('value') + ') ' +
    'brightness(' + $('#sliderBrightness').attr('value') + '%) ' +
    'hue-rotate('  + $('#sliderHue').attr('value')        + 'deg) ' +
    'grayscale('  + $('#sliderGray').attr('value')       + '%) '  +
    'blur('       + $('#sliderBlur').attr('value')       + 'px)';

    $('#imgManipulated>img').css('filter',filter);
    $('#imgManipulated>img').css('-webkit-ffilter',filter);
        

}
$('#sliderOpacity').on('input', function (a) {
  $('#sliderOpacity').attr('value', a.target.value);

  setFilterandwebkit();

});
$('#sliderSaturation').on('input', function (a) {
  $('#sliderSaturation').attr('value', a.target.value);

  setFilterandwebkit();

});
$('#sliderBrightness').on('input', function (a) {
  $('#sliderBrightness').attr('value', a.target.value);

  setFilterandwebkit();

});
$('#sliderHue').on('input', function (a) {
  $('#sliderHue').attr('value', a.target.value);

  setFilterandwebkit();

});
$('#sliderGray').on('input', function (a) {
  $('#sliderGray').attr('value', a.target.value);

  setFilterandwebkit();

});

$('#sliderBlur').on('input', function (a) {
  $('#sliderBlur').attr('value', a.target.value);

  setFilterandwebkit();

});





}); 