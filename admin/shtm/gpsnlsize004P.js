function updateMiddleSize(){$("#container").css("height",$(window).height()-198+"px");adsyes?(mywidth=$(window).width()-292,mytmpwidth=$(window).width()-155,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",mytmpwidthpx=mytmpwidth+"px",1100<$(window).width()?$("#middle").css("width",mywidthpx):$("#middle").css("width",mytmpwidthpx)):(mywidth=$(window).width()-10,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",$("#middle").css("width",mywidthpx));mytop=$("#middle").position().top+3+"px";myleft=
$("#middle").position().left+30+"px";mywidth=$("#middle").width()-60+"px";myheight=$("#middle").height()-33+"px";$("#myframe").css("top",mytop);$("#myframe").css("left",myleft);$("#myframe").css("width",mywidth);$("#myframe").css("height",myheight)}
function updateMiddleMenuSize(){$("#container").css("height",$(window).height()-198+"px");adsyes?(mywidth=$(window).width()-292,mytmpwidth=$(window).width()-155,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",mytmpwidthpx=mytmpwidth+"px",1100<$(window).width()?$("#middle").css("width",mywidthpx):$("#middle").css("width",mytmpwidthpx)):(menulistexpanded=readCookie("Cmenulistexpanded"),mywidth=1==menulistexpanded?$(window).width()-155:$(window).width()-10,mywidth=Math.max(mywidth,700),mywidthpx=
mywidth+"px",$("#middle").css("width",mywidthpx));mytop=$("#middle").position().top+3+"px";myleft=$("#middle").position().left+30+"px";mywidth=$("#middle").width()-60+"px";myheight=$("#middle").height()-33+"px";$("#myframe").css("top",mytop);$("#myframe").css("left",myleft);$("#myframe").css("width",mywidth);$("#myframe").css("height",myheight)}
function updateMapSize(){adsyes?($("#container").css("height",$(window).height()-198+"px"),mywidth=$(window).width()-283,mytmpwidth=$(window).width()-146,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",mytmpwidthpx=mytmpwidth+"px",1100<$(window).width()?$("#map").css("width",mywidthpx):$("#map").css("width",mytmpwidthpx)):(infoexpanded=readCookie("Cinfoplanexpanded"),1==infoexpanded?$("#container").css("height",$(window).height()-198+"px"):$("#container").css("height",$(window).height()-91+"px"),
menuplanexpanded=readCookie("Cmenuplanexpanded"),mywidth=1==menuplanexpanded?$(window).width()-141:$(window).width()-0,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",$("#map").css("width",mywidthpx));mytop=$("#map").position().top+3+"px";myleft=$("#map").position().left+30+"px";mywidth=$("#map").width()-60+"px";myheight=$("#map").height()-33+"px";$("#myframe").css("top",mytop);$("#myframe").css("left",myleft);$("#myframe").css("width",mywidth);$("#myframe").css("height",myheight)}
function updateControlSize(){mywidth=adsyes?$(window).width()-764:$(window).width()-22;mywidth=Math.max(mywidth,100);mywidthpx=mywidth+"px";document.getElementById("topcontrol").style.width=mywidthpx}
function updateMapSizeSmall(){adsyes?($("#container").css("height",$(window).height()-198+"px"),mywidth=$(window).width()-343,mytmpwidth=$(window).width()-206,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",mytmpwidthpx=mytmpwidth+"px",1100<$(window).width()?$("#map").css("width",mywidthpx):$("#map").css("width",mytmpwidthpx)):(infoexpanded=readCookie("Cinfozoekexpanded"),1==infoexpanded?$("#container").css("height",$(window).height()-198+"px"):$("#container").css("height",$(window).height()-
91+"px"),menuzoekexpanded=readCookie("Cmenuzoekexpanded"),mywidth=1==menuzoekexpanded?$(window).width()-202:$(window).width()-0,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",$("#map").css("width",mywidthpx));mytop=$("#map").position().top+3+"px";myleft=$("#map").position().left+30+"px";mywidth=$("#map").width()-60+"px";myheight=$("#map").height()-33+"px";$("#myframe").css("top",mytop);$("#myframe").css("left",myleft);$("#myframe").css("width",mywidth);$("#myframe").css("height",myheight)}
function updateMapSizeHigh(){adsyes?($("#container").css("height",$(window).height()-198+"px"),mywidth=$(window).width()-283,mytmpwidth=$(window).width()-146,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",mytmpwidthpx=mytmpwidth+"px",1100<$(window).width()?$("#map").css("width",mywidthpx):$("#map").css("width",mytmpwidthpx)):($("#container").css("height",$(window).height()-91+"px"),menudetailexpanded=readCookie("Cmenudetailexpanded"),mywidth=1==menudetailexpanded?$(window).width()-141:$(window).width()-
0,mywidth=Math.max(mywidth,700),mywidthpx=mywidth+"px",$("#map").css("width",mywidthpx));mytop=$("#map").position().top+3+"px";myleft=$("#map").position().left+30+"px";mywidth=$("#map").width()-60+"px";myheight=$("#map").height()-33+"px";$("#myframe").css("top",mytop);$("#myframe").css("left",myleft);$("#myframe").css("width",mywidth);$("#myframe").css("height",myheight)}function strstr(a,d){var b=0,b=(a+"").indexOf(d);return-1==b?!1:!0}
function createCookie(a,d,b){if(b){var c=new Date;c.setTime(c.getTime()+864E5*b);b="; expires="+c.toGMTString()}else b="";document.cookie=a+"="+d+b+"; path=/"}function readCookie(a){var d=a+"=",b=document.cookie.split(";");if(strstr(document.cookie,a))for(a=0;a<b.length;a++){for(var c=b[a];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(d))return c.substring(d.length,c.length)}return null}function eraseCookie(a){createCookie(a,"",-1)};