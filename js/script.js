$(function(){
  var warning = $('#warning').html();
  var seizure = $('#seizure').html();

  $('body').html(warning);
  $('#accept').click(function(){
    $('body').html(seizure);
  });
});
