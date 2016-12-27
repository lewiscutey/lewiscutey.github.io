/**
 * Created by Lewis on 2016/10/5.
 */

var anum = 0;
var tc_w = $(window).width();
var a = $(window).height();
var p2 = $(".p2").html();

$(function() {
    $("article").height(a);
    $(".button").css("top", a * 0.5 - 90);
    $("img").load(function() {
        anum++;
        $(".loadf div").html("已加载" + Math.round(anum / 0.25) + "%");
    })
});

$(window).resize(function() {
    $("article").height(a);
    $(".button").css("top", a * 0.5 - 90);
});

function allcon() {
    $(".loadf").fadeOut(100);
    setTimeout(function() {
        $(".p1").fadeIn(300);
    }, 300);
    setTimeout(function() {
        $(".p2").show(300);
    }, 600);
}

$(".button_img").click(function() {
    menu("news.asp", "a/news.asp");
});

$(".menu1_li_1").find("a").click(function() {
    var h1 = $(this).attr("data-h1");
    var h2 = $(this).attr("data-h2");
    menu(h1, h2);
});

$(".menu1_li_zp").find("a").click(function() {
    var h1 = $(this).attr("data-h1");
    menu2(h1);
});

function menu(bhref1, bhref2) {
    loading();
    setTimeout(function() {
        news_1(bhref1, bhref2);
    }, 500);
};

function menu2(bhref1) {
    loading();
    setTimeout(function() {
        news_2(bhref1);
    }, 500)
};

function loading() {
    $(".button2").addClass("articledis");
    $(".p1").addClass("articledis2");
    setTimeout(function() {
        $("#content span").addClass("expand");
    }, 400);
};

function loadingok() {
    $(".m").show();
    setTimeout(function() {
        $(".m").fadeOut(400);
        $(".p1").hide();
    }, 1500);
};

function news_1(nhref1, nhref2) {
    $("#con").load(nhref1 + "?time=" + (parseInt(Math.random() * 10000)).toString(), function() {
        $.getScript("js/index.js");
        $(".con_li").load(nhref2, function() {
            $.getScript("js/index.js");
            loadingok();
            $(".con_li").find("img").load(function() {
                $(this).fadeIn(300);
            });
        });
    });
};

function news_2(nhref1) {
    $("#con").load(nhref1 + "?time=" + (parseInt(Math.random() * 10000)).toString(), function() {
        $.getScript("js/index.js");
        loadingok();
        $(".zp_li").find("img").load(function() {
            $(this).fadeIn(300);
        });
        $(".zp_li ul").animate({
            left: 30,
            opacity: 1
        }, 600);
    });
};

function news_li(nhref) {
    $(".con_li").stop().animate({
        opacity: 0
    }, 200, function() {
        $(".con_li").load(nhref + "?time=" + (parseInt(Math.random() * 10000)).toString(), function() {
            $.getScript("js/index.js");
            $(".con_li").find("img").load(function() {
                $(this).fadeIn(300);
            });
            $(".con_li").animate({
                opacity: 1
            }, 200);
        });
    });
};

$(".menu2_li_1").find("a").click(function() {
    var h1 = $(this).attr("data-h1");
    var h2 = $(this).attr("data-h2");
    news_menu(h1, h2);
    $("#news_menu").find("img").attr("id", "");
    $("#news_menu").find("span").attr("id", "");
    $(this).find("img").attr("id", "p2si");
    $(this).find("span").attr("id", "p2si");
});

$(".zp").find("a").click(function() {
    var h1 = $(this).attr("data-h1");
    news_menu2(h1);
    $("#news_menu").find("img").attr("id", "");
    $("#news_menu").find("span").attr("id", "");
    $(this).find("img").attr("id", "p2si");
    $(this).find("span").attr("id", "p2si");
});

function news_menu(nhref1, nhref2) {
    $("section").animate({
        left: -30,
        opacity: 0
    }, 200, function() {
        $("#con").load(nhref1 + "?time=" + (parseInt(Math.random() * 10000)).toString(), function() {
            $.getScript("style/js/ayq2.js");
            $("section").css({
                "left": "-30px",
                "opacity": "0"
            });
            $(".con_li").load(nhref2, function() {
                $.getScript("style/js/ayq2.js");
                $(".con_li").find("img").load(function() {
                    $(this).fadeIn(300);
                })
            });
            $("section").animate({
                left: 0,
                opacity: 1
            }, 500)
        });
    });
};

function news_menu2(nhref) {
    $("section").animate({
        opacity: 0
    }, 200, function() {
        $("#con").html();
        $("#con").load(nhref + "?time=" + (parseInt(Math.random() * 10000)).toString(), function() {
            $.getScript("style/js/ayq3.js");
            $("section").css({
                "opacity": "0"
            });
            $(".zp_li").find("img").load(function() {
                $(this).fadeIn(300);
            });
            $("section").animate({
                opacity: 1
            }, 500);
            $(".zp_li ul").animate({
                left: 30,
                opacity: 1
            }, 600)
        });
    });
    $(".yd_con_1").css("background", "url(images/yd_left_1.png)");
    $(".yd_con_2").css("background", "url(images/yd_right_1.png)");
};

$(".click").click(function() {
    var cthis = $(this);
    cthis.removeClass("mouseup").addClass("mousedown");
    setTimeout(function() {
        cthis.removeClass("mousedown").addClass("mouseup");
    }, 50);
});

$(".pop_close,.art_top").click(function() {
    $(".pop").removeClass("pop1");
    $(".art_top").fadeOut(300);
    $("#framewin").fadeOut(200);
    $("#framewin").attr("src", " ");
});

function tc(thref) {
    $(".art_top").fadeIn(200);
    $(".pop").addClass("pop1");
    $(".pop_back").fadeIn(200);
    $("#framewin").attr("src", thref);
};

function dk() {
    $(".pop_back").fadeOut(200);
    $("#framewin").fadeIn(200);
};

$(".menu1_li_2").click(function() {
    per(".p1")
});

$(".menu2_li_2").click(function() {
    per(".p2")
});

$(".per_back,.art_top").click(function() {
    $(".per").animate({
        right: -471
    }, 500);
    $("article").animate({
        right: 0
    }, 500);
    $(".art_top").fadeOut(500);
});

function per(pn) {
    $(".per").animate({
        right: 0
    }, 500);
    $(pn).animate({
        right: 471
    }, 500);
    $(".art_top").fadeIn(500);
};

//开始页面的开关
$(function () {

    $('#button_img').on('click',function () {
        $('.p1').css('display','none');
        $('.m').css('display','block');
        setTimeout(function(){
            $('.m').delay(2000).css('display','none');
        },2000);
        setTimeout(function(){
            $('.p2').delay(4000).css('display','block');
        },4000);
    });
});

//开始页面的菜单栏
$(function (){

    var nav_items = $('#news_menu .nav_item');
    var screens = $(".screen");
    function navClick(I) {
        $('.p1 nav .nav'+I+'').on('click',function () {
            $('#button_img').click();
            for(var i=0; i<5; i++){
                nav_items.eq(i).find('img').css('opacity',0.3);
                nav_items.eq(i).find('span').css('opacity',0.3);
                screens.eq(i).css('opacity','0');
            }
            nav_items.eq(I-1).find('img').css('opacity',1);
            nav_items.eq(I-1).find('span').css('opacity',1);
            screens.eq(I-1).css('opacity','1');
            screens.eq(I-1).css('top',0);
            screens.eq(I-1).css('left',0);
        });
    }
    navClick(1);
    navClick(2);
    navClick(3);
    navClick(4);
    navClick(5);

});

//菜单栏
$(function () {
    var nav_items = $('#news_menu .nav_item');
    var screens = $(".screen");
//菜单栏作用于内容区域
    nav_items.on('mouseenter',function () {
        for(var i=0; i<5; i++){
            nav_items.eq(i).find('img').css('opacity',0.3);
            nav_items.eq(i).find('span').css('opacity',0.3);
        }
        $(this).find('img').css('opacity',1);
        $(this).find('span').css('opacity',1);
    });
    nav_items.on('mouseleave',function () {
        $(this).find('img').css('opacity',0.3);
        $(this).find('span').css('opacity',0.3);
    });

    nav_items.on('click',function () {
        for(var i=0; i<5; i++){
            nav_items.eq(i).find('img').css('opacity',0.3);
            nav_items.eq(i).find('span').css('opacity',0.3);
            screens.eq(i).css('opacity','0');
        }
        $(this).find('img').css('opacity',1);
        $(this).find('span').css('opacity',1);
        screens.eq($(this).index()/2).css('opacity','1');
        screens.eq($(this).index()/2).css('top',0);
        screens.eq($(this).index()/2).css('left',0);
    });
});


//内容页面的滚轮事件
$(function(){
    var screens = $(".screen");
    var nav_item = $('#news_menu .nav_item .click');
    var screenheight = document.documentElement.clientHeight;
    var screenwidth = document.documentElement.clientWidth;
    var index = 0;
    var next = 0;
    var flag = true;
    screens[0].style.top = 0;
    screens[0].style.left = 0;
    nav_item.eq(0).find('img').css('opacity',1);
    nav_item.eq(0).find('span').css('opacity',1);
    mouseWheel(document,function(){
        for(var i=0; i<screens.length; i++){
            nav_item.eq(i).find('img').css('opacity',0.3);
            nav_item.eq(i).find('span').css('opacity',0.3);
        }
        nav_item.eq(index).find('img').css('opacity',1);
        nav_item.eq(index).find('span').css('opacity',1);
        if(!flag) return;
        flag = false;
        next--;
        if(next<0) next = screens.length-1;
        screens[next].style.top=0;
        screens[next].style.left=screenwidth + "px";
        animate(screens[index],{top:0,left:-screenwidth},800,function(){
            flag = true;
        });
        animate(screens[next],{top:0,left:0},500);
        index = next;
    },function(){
        for(var i=0; i<screens.length; i++){
            nav_item.eq(i).find('img').css('opacity',0.3);
            nav_item.eq(i).find('span').css('opacity',0.3);
        }
        nav_item.eq(index).find('img').css('opacity',1);
        nav_item.eq(index).find('span').css('opacity',1);
        if(!flag) {return;};
        flag = false;
        next++;
        if(next==screens.length) next = 0;
        screens[next].style.left=-screenwidth + "px";
        screens[next].style.top=0;
        animate(screens[index],{top:0,left:screenwidth},800,function(){
            flag = true;
        });
        animate(screens[next],{top:0,left:0},500);
        index = next;
    });

// 兼容浏览器关于鼠标滚轮的事件
    function mouseWheel(obj,upcallback,downcallback){
        if(document.attachEvent){
            obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
        }else if(document.addEventListener){
            obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari -webkit-
            obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox -moz-
        }

        function scrollFn(e){
            var event = e || window.event;
            var dir = event.wheelDelta || event.detail;
            if(event.preventDefault){
                event.preventDefault(); //阻止默认浏览器动作(W3C)
            }else{
                event.returnValue = false;//IE中阻止函数器默认动作的方式
            }
            if(dir==120||dir==-3){
                return upcallback.call(obj);
            }else if(dir==-120||dir==3){
                return downcallback.call(obj);
            }
        }
    }

//我的作品页面-更多作品展示
    $('.btnAll').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .all').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnWeb').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .web').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnHtml5').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .html5').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnCss3').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .css3').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnGame').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .game').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnApp').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .app').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnNode').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .node').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });
    $('.btnOther').on('click',function () {
        $('.work .project .row').css('display','none');
        $('.work .project .other').css('display','block');
        $('.work .project .btn').removeClass('btn-default').addClass('btn-info');
        $(this).addClass('btn-default').removeClass('btn-info');
    });

//我的作品页面全部下面的点击链接事件
    $('.work .project .all .thumb1').on('click',function () {
        $('.btnWeb').click();
    });
    $('.work .project .all .thumb2').on('click',function () {
        $('.btnHtml5').click();
    });
    $('.work .project .all .thumb3').on('click',function () {
        $('.btnGame').click();
    });
    $('.work .project .all .thumb4').on('click',function () {
        $('.btnApp').click();
    });


});




















