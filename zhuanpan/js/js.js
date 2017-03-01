$(function () {
    var i = 0;
    var set = null;
    $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");

    function ppt() {
        set = setInterval(function () {
            if (i < 4) {
                i++;
            }
            else {
                i = 0;
            }
            $(".pic").eq(i).show().siblings(".pic").hide();
            $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
        }, 2000);
    }
    ppt();
    $(".ppt").mouseover(function () {
            clearInterval(set);
        })
    $(".ppt").mouseleave(function () {
        ppt();
    })
    $(".left").click(function () {
        if (i > 0) {
            i--;
        }
        else {
            i = 4;
        }
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
    })
    $(".right").click(function () {
        if (i < 4) {
            i++;
        }
        else {
            i = 0;
        }
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(".c").eq(i).addClass("h").siblings(".c").removeClass("h");
    })
    $(".c").click(function () {
        i = $(this).index();
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(this).addClass("h").siblings(".c").removeClass("h");
    })
})
        