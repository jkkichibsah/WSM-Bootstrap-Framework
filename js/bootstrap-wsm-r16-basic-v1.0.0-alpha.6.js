/* Release 16.0.0 / Version 1.0.0 / 2017.05.10  */

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $("[data-toggle='slide']").click(function() {
        var selector = $(this).data("target");
        $(selector + "-open").toggleClass('active');
        $(selector).toggleClass('open');
    });

    $("[data-toggle='tabs']").click(function() {
        var selector = $(this).data("target") //.attr("href");
        $(".nav-tab.active, .nav-tabs .nav-item.active").toggleClass('active');
        $(this).parent().toggleClass('active');
        $(selector).toggleClass('active');
        $(".col-12.scrollpanel").scrollpanel('update');
    });

    $('.scrollpanel').scrollpanel({
        prefix: 'sp-'
    });

    $('.btn').on('click', function() {
        var dataTarget = $(this).attr('data-target') + ' .scrollpanel';
        $(dataTarget).wait(200).scrollpanel('update').scrollpanel('update');
    });

    $('.scrollpanel').on('mouseenter', function() {
        $(this).scrollpanel('update');
    });

    $('.scrollpanel').on('click', function() {
        $(this).wait(100).scrollpanel('update');
    });

    $('.scrollpanel').on('resize', function() {
        console('test');
        $(this).wait(100).scrollpanel('update');
    });

    $(window).on('resize', function() {
        $('.scrollpanel').wait(100).scrollpanel('update').scrollpanel('update');
    });

});