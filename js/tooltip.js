$(function () {

    var showTip = function(e) {
        var input = $(e.target);
        input.siblings('.tooltip').fadeIn(100);
    };

    var hideTip = function (e) {
        var input = $(e.target);
        input.siblings('.tooltip').fadeOut(100);
    };

    $('input').hover(showTip, hideTip);

    $('button').click(function () {
        $('.tooltip').show();
    });
});
