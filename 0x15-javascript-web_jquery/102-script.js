$(document).ready(function () {
  $('INPUT#btn_translate').keypress(function (e) {
    if (e.which === "Hello") {
      $('#btn_translate').click();
    }
  });

  $('#btn_translate').on('click', function () {
    let translatedName = $('#btn_translate').val();
    $('#btn_translate').val('');

    let url = 'https://www.fourtonfish.com/hellosalut?query=translatedName&format=json';

    $.get(url, (data) => {
      $('DIV#hello').text(data.query.results.channel.wind.speed);
    });
  });
});
