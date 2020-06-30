// 顶部的右边
function topRight(){
	// 鼠标进入菜单
	$(".top .top-right1 li").mouseenter(function (){
		// 设置下拉选项的显示及其特效,且排除第三个菜单
		if($(this).index()!=2){
				$(this).css({"backgroundColor":"#fff"})
				.find("p").css({"display":"block"})
				.mouseenter(function (){
					$(this).css({"backgroundColor":"#cdd0d4"});
				})
				.mouseleave(function (){
					$(this).css({"backgroundColor":"#fff"});
				});
		}

		// 菜单字体颜色及键号颜色变为红色，且第三个菜单无键号
		if($(this).index()!=2){
			var a=$(this).find(".tr-a1").text();	
			$(this).find(".tr-a1").html(a+'<img src="素材/icon/24.png"/>').css({"color":"red"})
			.mouseleave(function (){
				$(this).html(a+'<img src="素材/icon/21.png"/>').css({"color":"black"});
			})
			.mouseenter(function (){
				$(this).html(a+'<img src="素材/icon/24.png"/>').css({"color":"red"});
			});
		}else{
			$(this).find(".tr-a1").css({"color":"red"});
		}			
	});
	// 鼠标离开菜单
	$(".top .top-right1 li").mouseleave(function (){
		// 设置下拉选项的消失
		$(this).css({"backgroundColor":"#f3f5f7"})
		.find("p").css({"display":"none"});
		// 菜单字体颜色及键号颜色变为黑色，且第三个菜单无键号
		if($(this).index()!=2){
			var a=$(this).find(".tr-a1").text();		
			$(this).find(".tr-a1").html(a+'<img src="素材/icon/21.png"/>').css({"color":"black"});
		}else{
			$(this).find(".tr-a1").css({"color":"black"});
		}
		
	});
}

// logo区 购物车下拉表特效
function logoright(){
	$("#logo-r").hover(function (){
		$(".logo-right1").show();
		$(this).addClass("carActive");
		$(".lr-img1").attr("src","素材/icon/25.png");
		$(".lr-img2").attr("src","素材/icon/24.png");
	},function (){
		$(".logo-right1").hide();
		$(this).removeClass("carActive");
		$(".lr-img1").attr("src","素材/icon/26.png");
		$(".lr-img2").attr("src","素材/icon/23.png");
	});	
}
// 轮播图特效
function lunbo(){
	var i=0;
	var a1=document.getElementById("banner1");
	var a=document.getElementById("ba-ct").getElementsByTagName("img");	
	var b=document.getElementById("dot1").getElementsByTagName("span");	
	var timer1;
	var len=a.length;
	// 清除
	function clear(){
		for(var j=0;j<len;j++){
			a[j].className="";
			b[j].className="";
		}
		a[i].className="img1";
		b[i].className="dot-1";
	}
	function bh(){
		// 每隔一秒换一张图片,且圆点一起变化
		timer1=setInterval(function (){
		for(var j=0;j<len;j++){
			a[j].className="";
			b[j].className="";
		}
		i++;
		if(i>=len){
			i=0;
		}
		a[i].className="img1";
		b[i].className="dot-1";
	},1000);
	}
	
	bh();
	// 鼠标进入时，图片停止变化。离开后继续变化
	a1.onmouseover=function (){
		clearInterval(timer1);
	}
	a1.onmouseout=function (){
		bh();
	}	
	//点击圆点更换图片
	$("#dot1 span").click(function (){
		i=$(this).index();
		clear();
	});
	// 点击箭头更换图片
	$(".prev").click(function (){
		if(i--==0){
			i=len-1;
		}
		clear();
	});
	$(".next").click(function (){
		if(i++==len-1){
			i=0;
		}
		clear();
	});
}
// 轮播区左边特效
function lunboLeft(){
	$("#banner-left li").hover(function (){
		$(this).find(".ltz1").addClass("ltz11");
		// $(this).find(".ltz1").show();
		$(this).css({"backgroundColor":"#fff","color":"red"});
		$(this).children("img").attr("src","素材/icon/24.png");
	},function (){
		$(this).find(".ltz1").removeClass("ltz11");
		// $(this).find(".ltz1").hide();
		$(this).css({"backgroundColor":"red","color":"#fff"});
		$(this).children("img").attr("src","素材/icon/23.png");
	});
	
}
// 轮播区右边特效
function lunboRight(){
	$("#a1").mouseenter(function (){
		$(this).html($(this).text()+' <img src="素材/icon/24.png">');		
	}).mouseleave(function (){
		$(this).html($(this).text()+' <img src="素材/icon/21.png">');
	});
}
// 楼层的特效
function　loucen(){
	// 一楼
	// 显示边框
	$("#floorz").find(".clothe").mouseenter(function (){
		$(this).css({"border":"1px solid #ccc"});
	}).mouseleave(function (){
		$(this).css({"border":"1px solid #fff"})
	});
	// 分类的特效
	$(".floor-up .f-top .top2").find("span").mouseenter(function (){
		$(this).css({"color":"red"}).siblings().css({"color":"#aaa"});
		var a=$(this).width()/2-7;
		var b=$(this).position().left+20;
		var sum=a+b;
		var sum1=1200-sum-14;
		// console.log(sum);
		var dex=$(this).index();
		$(".floor-up .f-middle").find(".hr1").width(sum);
		$(".floor-up .f-middle").find(".hr2").width(sum1);
		$(".floor-up").find(".ab").css({"display":"none"}).eq(dex).css({"display":"block"});
	});
	// 二楼
	// 分类的特效
	$(".floor-down .f-top .top2").find("span").mouseenter(function (){
		$(this).css({"color":"red"}).siblings().css({"color":"#aaa"});
		var a=$(this).width()/2-7;
		var b=$(this).position().left+20;
		var sum=a+b;

		var sum1=1200-sum-14;
		// console.log(sum);
		var dex=$(this).index();
		$(".floor-down .f-middle").find(".hr1").width(sum);
		$(".floor-down .f-middle").find(".hr2").width(sum1);
		$(".floor-down").find(".ab").css({"display":"none"}).eq(dex).css({"display":"block"});
	});
}
// 右导航特效
function navRight(){
	$(".nav-right").children("a").hover(function (){
		$(this).find("img").css({"backgroundColor":"#71777d"});
		$(this).find(".span2").stop().animate({"right":"112px"},500).css({"backgroundColor":"#71777d"});
	},function (){
		$(this).find(".span2").stop().animate({"right":"0px"},500).css({"backgroundColor":"#b7bbbf"});
		$(this).find("img").css({"backgroundColor":"#b7bbbf"});
	});
	$(".nav-right").children("a").eq(4).click(function (){
		$(window).scrollTop("0");
	})
	
}
$(document).ready(function (){
	// 顶部右边特效
	topRight();
	// logo区右边购物车下拉表
	logoright();
	// 中间轮播
	lunbo();
	// 轮播区左边特效
	lunboLeft();
	// 轮播区右边特效
	lunboRight();
	// 楼层的特效
	loucen();
	// 右导航特效
	navRight();
});