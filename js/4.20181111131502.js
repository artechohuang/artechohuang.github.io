(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js-389 .slide0').hasAttr('src')) { a='src'; } $('.js-389 .slide0').attr(a, (dpi>1) ? 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-2400-1.jpg' : 'images/69646ccagy1fd1phvpw65j22gi1w0hdt-1200-1.jpg');
var a='data-src'; if($('.js-389 .slide1').hasAttr('src')) { a='src'; } $('.js-389 .slide1').attr(a, (dpi>1) ? 'images/psb-2400-1.jpg' : 'images/psb-1200-1.jpg');
var a='data-src'; if($('.js-389 .slide2').hasAttr('src')) { a='src'; } $('.js-389 .slide2').attr(a, (dpi>1) ? 'images/wechatimg24-2400.jpg' : 'images/wechatimg24-1200.jpg');
var a='data-src'; if($('.js-389 .slide3').hasAttr('src')) { a='src'; } $('.js-389 .slide3').attr(a, (dpi>1) ? 'images/wechatimg680-2-2400.jpg' : 'images/wechatimg680-2-1200.jpg');
var a='data-src'; if($('.js-389 .slide4').hasAttr('src')) { a='src'; } $('.js-389 .slide4').attr(a, (dpi>1) ? 'images/wechatimg739-2400.jpg' : 'images/wechatimg739-1200.jpg');
var a='data-src'; if($('.js-389 .slide5').hasAttr('src')) { a='src'; } $('.js-389 .slide5').attr(a, (dpi>1) ? 'images/211-2400.jpg' : 'images/211-1200.jpg');
var a='data-src'; if($('.js-389 .slide6').hasAttr('src')) { a='src'; } $('.js-389 .slide6').attr(a, (dpi>1) ? 'images/wechatimg49-2400-1.jpg' : 'images/wechatimg49-1200-1.jpg');
var a='data-src'; if($('.js-389 .slide7').hasAttr('src')) { a='src'; } $('.js-389 .slide7').attr(a, (dpi>1) ? 'images/311-2400.jpg' : 'images/311-1200.jpg');
var a='data-src'; if($('.js-389 .slide8').hasAttr('src')) { a='src'; } $('.js-389 .slide8').attr(a, (dpi>1) ? 'images/1-2400-1.jpg' : 'images/1-1200-1.jpg');
var a='data-src'; if($('.js-389 .slide9').hasAttr('src')) { a='src'; } $('.js-389 .slide9').attr(a, (dpi>1) ? 'images/rg-2400.jpg' : 'images/rg-1200.jpg');
var a='data-src'; if($('.js-389 .slide10').hasAttr('src')) { a='src'; } $('.js-389 .slide10').attr(a, (dpi>1) ? 'images/wechatimg23021313-2400.jpg' : 'images/wechatimg23021313-1200.jpg');
var a='data-src'; if($('.js-389 .slide11').hasAttr('src')) { a='src'; } $('.js-389 .slide11').attr(a, (dpi>1) ? 'images/wechatimg551-2-2400-1.jpg' : 'images/wechatimg551-2-1200-1.jpg');
$('.js-390').attr('src', (dpi>1) ? 'images/echo-huang-780.png' : 'images/echo-huang-390.png');
$('.js-391').attr('src', (dpi>1) ? 'images/echo-huang-780-2.png' : 'images/echo-huang-390-2.png');
$('.js-392').attr('src', (dpi>1) ? 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-46.png' : 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-23.png');
$('.js-393').attr('src', (dpi>1) ? 'images/facebook29-copy-38.png' : 'images/facebook29-copy-19.png');
$('.js-394').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-395').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-40.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-20.png');
$('.js-396').attr('src', (dpi>1) ? 'images/ju-xing-2400.png' : 'images/ju-xing-1200.png');
$('.js-397').attr('src', (dpi>1) ? 'images/the-complete-works--1760.png' : 'images/the-complete-works--880.png');
$('.js-398').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-399').attr('src', (dpi>1) ? 'images/341fu-ben-364.jpg' : 'images/341fu-ben-182.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-401').attr('src', (dpi>1) ? 'images/111111-298.jpg' : 'images/111111-149.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-403').attr('src', (dpi>1) ? 'images/3212-398-1.jpg' : 'images/3212-199-1.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-405').attr('src', (dpi>1) ? 'images/painting-3-copy-404.jpg' : 'images/painting-3-copy-202.jpg');
$('.js-406').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-407').attr('src', (dpi>1) ? 'images/7de-fu-ben-2-226.jpg' : 'images/7de-fu-ben-2-113.jpg');
$('.js-408').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-409').attr('src', (dpi>1) ? 'images/222-226-1.jpg' : 'images/222-113-1.jpg');
$('.js-410').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-411').attr('src', (dpi>1) ? 'images/43-226.jpg' : 'images/43-113.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-413').attr('src', (dpi>1) ? 'images/3de-fu-ben-308.jpg' : 'images/3de-fu-ben-154.jpg');
$('.js-414').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-498.png' : 'images/rectangle-3-copy-9-249.png');
$('.js-415').attr('src', (dpi>1) ? 'images/wechatimg42-304.jpeg' : 'images/wechatimg42-152.jpeg');
$('.js-416').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-46.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-23.png');
$('.js-417').attr('src', (dpi>1) ? 'images/facebook29-38.png' : 'images/facebook29-19.png');
$('.js-418').attr('src', (dpi>1) ? 'images/instagram-2-40.png' : 'images/instagram-2-20.png');
$('.js-419').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-140.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-70.png');
$('.js-420').attr('src', (dpi>1) ? 'images/facebook29-copy-3-176.png' : 'images/facebook29-copy-3-88.png');
$('.js-421').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-184.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-92.png');}else{$('.js-390').attr('src', (dpi>1) ? 'images/echo-huang-318.png' : 'images/echo-huang-159.png');
$('.js-391').attr('src', (dpi>1) ? 'images/echo-huang-208.png' : 'images/echo-huang-104.png');
$('.js-392').attr('src', 'images/soutu123.com_4217226_xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-2-47.png');
$('.js-393').attr('src', 'images/facebook29-copy-41.png');
$('.js-394').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-395').attr('src', 'images/u-2260898377-2056122756-fm-26-gp-0-copy-41.png');
$('.js-396').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-397').attr('src', (dpi>1) ? 'images/the-complete-works--444.png' : 'images/the-complete-works--222.png');
$('.js-398').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-399').attr('src', (dpi>1) ? 'images/341fu-ben-98-1.jpg' : 'images/341fu-ben-49-1.jpg');
$('.js-400').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-401').attr('src', (dpi>1) ? 'images/111111-80-1.jpg' : 'images/111111-40-1.jpg');
$('.js-402').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-403').attr('src', (dpi>1) ? 'images/3212-108-1.jpg' : 'images/3212-54-1.jpg');
$('.js-404').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-405').attr('src', (dpi>1) ? 'images/painting-3-copy-106.jpg' : 'images/painting-3-copy-53.jpg');
$('.js-406').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-407').attr('src', (dpi>1) ? 'images/7de-fu-ben-2-62.jpg' : 'images/7de-fu-ben-2-31.jpg');
$('.js-408').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-409').attr('src', (dpi>1) ? 'images/222-62-1.jpg' : 'images/222-31-1.jpg');
$('.js-410').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-411').attr('src', (dpi>1) ? 'images/43-60.jpg' : 'images/43-30.jpg');
$('.js-412').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-413').attr('src', (dpi>1) ? 'images/3de-fu-ben-82.jpg' : 'images/3de-fu-ben-41.jpg');
$('.js-414').attr('src', (dpi>1) ? 'images/rectangle-3-copy-9-130.png' : 'images/rectangle-3-copy-9-65.png');
$('.js-415').attr('src', (dpi>1) ? 'images/wechatimg42-82.jpeg' : 'images/wechatimg42-41.jpeg');
$('.js-416').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-36.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_sou-tu123zhu-nin-gong-zuo-shun-li-copy-18.png');
$('.js-417').attr('src', (dpi>1) ? 'images/facebook29-32.png' : 'images/facebook29-16.png');
$('.js-418').attr('src', (dpi>1) ? 'images/instagram-2-32.png' : 'images/instagram-2-16.png');
$('.js-419').attr('src', (dpi>1) ? 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-106.png' : 'images/xin-lang-wei-bo-biao-zhi-tu-biao_-copy-4-53.png');
$('.js-420').attr('src', (dpi>1) ? 'images/facebook29-copy-3-106.png' : 'images/facebook29-copy-3-53.png');
$('.js-421').attr('src', (dpi>1) ? 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-106.png' : 'images/u-2260898377-2056122756-fm-26-gp-0-copy-5-53.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-389 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2450});
});