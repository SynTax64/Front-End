$(function () {
    function showBadgeStatus() {
        var contentLength = $('#content li').length,
            reviewLength = $('#review li').length;

        $('span.badge-content')
            .html(contentLength);
        $('span.badge-review')
            .html(reviewLength);
    };

    showBadgeStatus();

    $('ul.list-group').sortable({
        connectWith: 'ul.list-group',
        opacity: 0.7,
        placeholder: 'dragging-border',
        dropOnEmpty: true,
        stop: function () {
            showBadgeStatus();
        }
    });

    $('button#btn-create-new-team').click(function () {
        $('.navbar-form p').css('display', 'block');
    });


});