$(function () {
    $('.helptip').hide();

    $('[data-tooltip]').on('mouseenter', function (eventObject) {
        var $dataTooltip = $(this).attr('data-tooltip');
        var $helpId = $(this).attr('id');
        $('.' + $helpId).text($dataTooltip).fadeIn()
    });

    $('[data-tooltip]').on('mouseleave', function () {
        $('.helptip').hide().text('')
    });

    $('.help').on('click',function() {
        $('[data-tooltip]').each(function() {
            var $dataTooltip = $(this).attr('data-tooltip');
            var $helpId = $(this).attr('id');
            $('.' + $helpId).text($dataTooltip).fadeIn()
        });
    });
});
