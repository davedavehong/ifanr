/**
 * Created by daved on 2015/9/3.
 */

$(function () {
    var t = null;
    var itemShowT = null;
    var headerLogo = $('a.logo');
    var snsNav = $('.sns-nav');
    var player = $('#player');
    var itemShow = $('#items-preview');
    var post = $('#post-collections');
    var ee = $('#ee');

    post.children('div').each(function () {
        $(this).mouseover(function () {
            post.children('div').height(50).css({
                'background-color': '#591f27',
                'color': 'rgba(255,255,255,0.56)'
            });
            $(this).height(100).css({
                'color':'#fff',
                'background-color':'rgba(25, 55, 255, 0.34)'
            });
        });
    });

    headerLogo.mouseenter(function () {
        clearTimeout(t);
        snsNav.addClass('sns-show');
    });
    headerLogo.mouseleave(function () {
        t = setTimeout(function () {
            if (!snsNav.hasClass("hover")) {
                snsNav.removeClass('sns-show')
            }
        }, 200)
    });
    snsNav.mouseenter(function () {
        $(this).addClass('hover')
    });
    snsNav.mouseleave(function () {
        $(this).removeClass("hover").removeClass('sns-show');
    });
    $('a').attr('target', '_blank');
    player.mouseenter(function () {
        itemShow.addClass('show');
    });
    player.mouseleave(function () {
        itemShowT = setTimeout(function () {
            if (!itemShow.hasClass('hover')) {
                itemShow.removeClass('show')
            }
        }, 200);
    });
    itemShow.mouseenter(function () {
        $(this).addClass('hover')
    });
    itemShow.mouseleave(function () {
        $(this).removeClass("hover").removeClass('show')
    })
});