$(document).ready(function(){function t(t){var o=$(t).attr("href"),e=$(o).offset().top-i+5;$("html, body").animate({scrollTop:e},400)}function o(){var t,o=$(".section"),n=$(document).scrollTop(),a=o[o.length-1],s=$(a).height()<$(window).height();if(s)var r=$(a).offset().top,l=$(window).height()+$(document).scrollTop()-$(a).height()/2,c=l>r;s&&c?t=$(a).attr("id"):o.each(function(){var o=$(this).offset().top-i,e=o+$(this).outerHeight();n>=o&&n<=e&&(t=$(this).attr("id"))}),t?(e.find("li").removeClass("active"),e.find('a[href="#'+t+'"]').parent("li").addClass("active")):e.find("li").removeClass("active")}var e=$("nav"),i=e.outerHeight();$('a[href*="#"]:not([href="#"])').click(function(o){t(this),o.preventDefault()}),$(document).scroll(function(){o()}),$(document).scroll(function(){o()}),$(document).scroll(function(){y=$(this).scrollTop(),console.log(y);var t=10*y,o=y/10,e=1-y/50;o<1&&(o=1),$(".scrollAnimation .header-title, .scrollAnimation .header-info").css({transform:"scale("+o+")",opacity:e,transition:"0.5s"}),$(".logo-large-before").css({opacity:e,transition:"0.5s"}),$(".scrollAnimation .registration-btn").css({transform:"translateX("+t+"%)",transition:"0.2s"}),$(".wrap-after").css({transform:"translateX("+t+"%)",transition:"0.5s"}),$(".scrollAnimation .registration-btn, .wrap-before").css({transform:"translateX(-"+t+"%)",transition:"0.5s"}),y>100?($(".logo-large").css({bacground:'url("images/logo-large.svg") no-repeat center',transition:"0.5s"}),$(".scrollAnimation").css({position:"absolute",top:"0",left:"0",right:"0",width:"100%","z-index":"555",transition:"0.2s",transform:"scale(1.2)",opacity:"0"}),$(".page-template-home main").css({"margin-top":"100px"})):($(".scrollAnimation").css({position:"static",top:"0",left:"0",right:"0",width:"100%","z-index":"555",transform:"scale(1)",opacity:"1"}),$(".page-template-home main").css({"margin-top":"0"}))});$(".datepicker-here").datepicker({onRenderCell:function(t,o){if("day"==o&&12==t.getDate()&&11==t.getMonth())return{classes:"-selected-"}}}),$(".head-img img").click(function(){var t=$(".program").offset().top-0;$("body,html").animate({scrollTop:t},500)})});