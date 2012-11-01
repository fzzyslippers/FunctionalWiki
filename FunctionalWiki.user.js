// ==UserScript==
// @name        FunctionalWiki
// @namespace   sandwich
// @description Cleans up some of Wikipedia and removes some less useful features
// @include     https://en.wikipedia.org/wiki/*
// @version     0.1.01
// @require		https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @updateURL	https://github.com/nickippoliti/FunctionalWiki/raw/master/FunctionalWiki.user.js
// @downloadURL	https://github.com/nickippoliti/FunctionalWiki/raw/master/FunctionalWiki.user.js
// ==/UserScript==

//Hide basic stuff

$("div#left-navigation").hide();
$("div#p-views").hide();
if($("div#protected-icon").length > 0){
	$("div#mw-content-text").append("This article is semi-protected due to vandalism");
	$("div.topicon").hide();
}

$("div#p-logo a").hide();

//Set up the function that allows us to toggle lists

function listToggle(h5Text, object){
	$("h5:contains("+h5Text+")").click(function () {
		$(object).toggle(500);
	});
}

//Call the function

listToggle("Languages",$("div#p-lang div.body"));
listToggle("Toolbox",$("div#p-tb div.body"));
listToggle("Interaction",$("div#p-interaction div.body"));
listToggle("Navigation",$("div#p-navigation div.body"));
listToggle("Print/export",$("div#p-coll-print_export div.body"));

//Initially hide the lists

$("div#p-coll-print_export div.body").hide();
$("div#p-lang div.body").hide();
$("div#p-tb div.body").hide();
$("div#p-interaction div.body").hide();
$("div#p-navigation div.body").hide();

//Hide InfoBox
$("table.infobox tbody tr").hide();
$("table.infobox").append('<center><span id="cl2tg"> (click here to toggle)</span></center>');
$("span#cl2tg").css({"font-size":10});
$("span#cl2tg").click(function () {
	$("table.infobox tbody tr").toggle(500);
	});

//Hide Inner Thumbnails
$("div.thumbinner a img").hide();
$("div.thumbinner div.thumbcaption").hide();
$("div.thumb").append('<center><div id="cl2tgth">(click here to toggle)</div></center>');
$("div#cl2tgth").css({"font-size":10});
$("div.thumb").click(function () {
	$("div.thumbinner div.thumbcaption", this).toggle(500);
	$("div.thumbinner a img", this).toggle(500);
	});