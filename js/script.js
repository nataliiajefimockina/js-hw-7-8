$(function() {

    function hideTabs() {
        var currentId = $('.activeTab').attr('id');
        var kids = $('div.content').children();
        kids.hide();
        kids.eq(currentId).show();
    }

    hideTabs();

    // tab toggling
    var tabsToggling = function(event) {
        $('.activeTab').removeClass('activeTab');
        $(this).addClass('activeTab');

        hideTabs();
    };

    $('.tab').click(tabsToggling);
});
