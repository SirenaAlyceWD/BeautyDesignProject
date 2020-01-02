// JavaScript Document
$(document).ready(function(){
  $(".lips").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#CBAC8F");
		}, function(){
		$(this).css("color", "transparent");
	}),
	$(".products").css({"-webkit-text-stroke-color":"#CBAC8F"}),
	$(".lips").css("color", "#CBAC8F");	$("video").attr("src","images/stockVideos/lipstick.mov");
  });
	
 $(".eyes").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#86664D");
		}, function(){
		$(this).css("color", "transparent");
	}),
	$(".products").css({"-webkit-text-stroke-color":"#86664D"}),
	$(".eyes").css("color", "#86664D");	$("video").attr("src","images/stockVideos/eyeshadow.mov");
  });
	
 $(".face").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#a0755f");
		}, function(){
		$(this).css("color", "transparent");
	}),		
	$(".products").css({"-webkit-text-stroke-color":"#a0755f"}),
	$(".face").css("color", "#a0755f");	
	 $("video").attr("src","images/stockVideos/face.mov");
  });
	
$(".skin").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#493109");
		}, function(){
		$(this).css("color", "transparent");
	}),		
	$(".products").css({"-webkit-text-stroke-color":"#493109"}),
	$(".skin").css("color", "#493109");
	$("video").attr("src","images/stockVideos/glamourshot2.mov");
  });
	
	
$(".best").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#c88770");
		}, function(){
		$(this).css("color", "transparent");
	}),		
	$(".products").css({"-webkit-text-stroke-color":"#c88770"}),
	$(".best").css("color", "#c88770");
	$("video").attr("src","images/stockVideos/bestchoice.mov");
  });
		
$(".navbar-brand").click(function(){
  $(".products").hover(function(){
    $(this).css("color", "#ddcecd");
		}, function(){
		$(this).css("color", "transparent");
	}),		
	$(".products").css({"-webkit-text-stroke-color":"#ddcecd"}),
	$(".left-div").css({"background-color":"#ddcecd"});
	$("video").attr("src","images/stockVideos/glamourshot1.mov");
  });
});
	
