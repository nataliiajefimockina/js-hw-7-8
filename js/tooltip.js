var title;
$('input').hover(function() {
    title = $(this).attr('title');
    $(this).attr('title', '');
    $(this).parent('label').append("<span class='title'>"+title+"</span>")
},

function() {
    $('.title').remove();
    $(this).attr('title', title);
});

$("form").on('submit', function(e) {
    e.preventDefault();
    $('.title').remove()
    $('input').each(function () {
        var title = $(this).attr('title');
        $(this).parent('label').append("<span class='title'>"+title+"</span>");
      });
      return false;
});
