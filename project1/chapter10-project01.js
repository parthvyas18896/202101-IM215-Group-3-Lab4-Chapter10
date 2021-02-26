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
}); 