$(function(){
	//点击按钮，隐藏头部广告
	$('#banner_x').click(function(){
		if($('#banner').is(':hidden')){
			$('#banner').show();
			$(this).removeClass('add_banner');
		}else{
			$('#banner').hide();
			$(this).addClass('add_banner');
		}
	})
	//导航栏菜单弹出效果
	var _this=null;
	var popTimer=null;
	$('.navi_pop').bind('mouseenter',function(){
		_this=this;
		var n=0;
		var tar=_this;
		if(popTimer!=null){
			clearTimeout(popTimer);
		}
		popTimer=setTimeout(function(){
			$(_this).children('div').addClass('navi_ht');
			$(_this).children('.navi_hb').slideDown(200);
			$('.ct_kuang input').blur();
			//>旋转动画效果
			(function rtaN(){
				n-=4;
				$(tar).find('i').css('transform','rotate('+n+'deg)');
				if(n>=-180&&n<0){
					setTimeout(rtaN,0.1);
				}
			})()
		},200)
	})
	var popTimerAnmt=null;
	$('.navi_pop').bind('mouseleave',function(){
	
		if(popTimer!=null){
			clearTimeout(popTimer);
		}
		clearTimeout(popTimerAnmt);
		var n=-180;
		var tar=_this;
		popTimerAnmt=setTimeout(function(){
			//>旋转动画效果
			(function rtaS(){
				n+=4;
				$(tar).find('i').css('transform','rotate('+n+'deg)');
				if(n>=-180&&n<=0){
					setTimeout(rtaS,0.1);
				}
			})()
		},200)
		$('.navi_pop').children('div').removeClass('navi_ht');
		$('.navi_pop').children('.navi_hb').slideUp(200);
	})
	//手机苏宁栏点击关闭
	$('#khd_x').click(function(){
		$('#navi_khd').slideUp(200);
		$('div:contains("手机苏宁")').removeClass('navi_ht');
	})
	//网站导航栏点击关闭
	$('#navi_1_x').click(function(){
		$('div:contains("网站导航")').removeClass('navi_ht');
		$('#navi_1>div:last').slideUp(200);
	})
	//搜索框获得焦点
	$('.ct_kuang input').focus(function(){
		$(this).val('');
		$('#search_help').show();
	})
	$('.ct_kuang input').blur(function(){
		var num=Math.random();
		if(num<=0.5){
			$(this).val('品质家电疯狂抢 省到没朋友啊！');
		}else{
			$(this).val('1199元笔记本,办公配件2折起');
		}
		$('#search_help').hide();
		
	})
	$('#search_x').click(function(){
		$('#search_help').hide();
	})
	//广告轮显效果
	var color=['d90f4b','11b2ff','fb2950','0050ef',
				'321742',
				'fe3498','0998fe',
				'c30d1c','ee8100',
				'27010e',
				'5901d1','7722f7','ff3165',
				'0172ff','ec2d95',
				'0258bf','5b11bc',
				'2ba7ff','dddddd',
				'38b3bb','f13d58',
				'2b085c','ff8c03'];
	//半透明分类标签自动切换
	var tagsWid=parseInt($('.cl2_toggle1').css('width'));
	var tagsMargin=parseInt($('.cl2_toggle1').css('margin-right'));
	var l=tagsWid+tagsMargin;
	var $tags=$('.tags');
	var $tagsA=$('.tags>a');
	var tagsLen=$tags.length;
	var num=1;
	var $bs=$('.cl2_kuang>b');
	var cvs='next';
	var trst=null;
	function tagNext(){
		$tags.show();
		$bs.show();
		if(!trst){
			cvs=='prev'&&(num+=2);	
		}	
		n==22&&(num=0);
		$($tags[num]).hide();
		$('.cl2_toggle_now>a').text($($tagsA[num]).text());
		$('.cl2_toggle_now').css('left',l*num);
		num++;
	}
	function tagPrev(){
		$tags.show();
		$bs.show();
		cvs=='next'&&(num-=2);
		n==0&&(num=10);
		$($tags[num]).hide();
		$('.cl2_toggle_now>a').text($($tags[num]).text());
		$('.cl2_toggle_now').css('left',l*num);
		num--;
	}
	function tTagsNext(){
		if(n==22){
			tagNext();
		}else if(n==3){
			tagNext();
			$('.chose_1').hide();
		}else if(n==4){
			tagNext();
			$('.chose_2').hide();
		}else if(n==6){
			tagNext();
			$('.chose_2').hide();
		}else if(n==8){
			tagNext();
			$('.chose_1').hide();
		}else if(n==9){
			tagNext();
			$('.chose_3').hide();
		}else if(n==12){
			tagNext();
			$('.chose_2').hide();
		}else if(n==14){
			tagNext();
			$('.chose_2').hide();
		}else if(n==16){
			tagNext();
			$('.chose_2').hide();
		}else if(n==18){
			tagNext();
			$('.chose_2').hide();
		}else if(n==20){
			tagNext();
			$('.chose_2').hide();
		}
	}
	function tTagsPrev(){
		if(n==0){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==4){
			tagPrev();
		}else if(n==5){
			tagPrev();
			$('.chose_1').hide();
		}else if(n==7){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==9){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==10){
			tagPrev();
			$('.chose_1').hide();
		}else if(n==13){
			tagPrev();
			$('.chose_3').hide();
		}else if(n==15){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==17){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==19){
			tagPrev();
			$('.chose_2').hide();
		}else if(n==21){
			tagPrev();
			$('.chose_2').hide();
		}
	}
	function nthBannerNext(){
		if(n==0||n==5||n==7||n==10||n==13||n==15||n==17||n==19||n==21){
			$bs.removeClass('chose');
			$($bs[1]).addClass('chose');
		}else if(n==1||n==11){
			$bs.removeClass('chose');
			$($bs[2]).addClass('chose');
		}else if(n==2){
			$bs.removeClass('chose');
			$($bs[3]).addClass('chose');
		}else if(n==22||n==3||n==4||n==6||n==8||n==9||n==12||n==14||n==16||n==18||n==20){
			$bs.removeClass('chose');
			$($bs[0]).addClass('chose');
		}
	}
	function nthBannerPrev(){
		if(n==0||n==2||n==7||n==9||n==12||n==15||n==17||n==19||n==21){
			$bs.removeClass('chose');
			$($bs[1]).addClass('chose');
		}else if(n==3||n==13){
			$bs.removeClass('chose');
			$($bs[2]).addClass('chose');
		}else if(n==4){
			$bs.removeClass('chose');
			$($bs[3]).addClass('chose');
		}else if(n==1||n==5||n==6||n==8||n==10||n==11||n==14||n==16||n==18||n==20||n==22){
			$bs.removeClass('chose');
			$($bs[0]).addClass('chose');
		}
	}
	var length=$('.cl2_center_banner').length;
	var n=0;
	function adNext(){
		var next=n+1;
		if(trst){
			next=trstNext;
		}
		if(!trst){
			tTagsNext();
			nthBannerNext();
		}
		var opacity_line2_bg1=getComputedStyle($('#content_line2_bg1')[0]).opacity;
		var opacity_line2_bg2=getComputedStyle($('#content_line2_bg2')[0]).opacity;
		if(next>length-1){
			next=0;
		}
		if(opacity_line2_bg1==1){
			$('#content_line2_bg1').css('background-color','#'+color[n]).animate({
				'opacity':0
			},500);
		}else{
			$('#content_line2_bg1').css('background-color','#'+color[next]).animate({
				'opacity':1
			},500);
		}
		if(opacity_line2_bg2==0){
			$('#content_line2_bg2').css('background-color','#'+color[next]).animate({
			'opacity':1
			},500);
		}else{
			$('#content_line2_bg2').css('background-color','#'+color[n]).animate({
			'opacity':0
			},500);
		}
		$('.cl2_center_banner').eq(n).css('z-index','1').fadeOut(1000);
		$('.cl2_center_banner').eq(next).css('z-index','2').fadeIn(1000);
		if(trst){
			n=trstN;
			tTagsNext();
			nthBannerNext();
		}
		n++;
		n>length-1&&(n=0);
		cvs='next';
	}
	function adPrev(){
		prev=n-1;
		tTagsPrev();
		nthBannerPrev();
		if(prev<0){
			prev=length-1;
		}
		var opacity_line2_bg1=getComputedStyle($('#content_line2_bg1')[0]).opacity;
		var opacity_line2_bg2=getComputedStyle($('#content_line2_bg2')[0]).opacity;
		if(opacity_line2_bg1==1){
			$('#content_line2_bg1').css('background-color','#'+color[n]).animate({
				'opacity':0
			},500);
		}else{
			$('#content_line2_bg1').css('background-color','#'+color[prev]).animate({
				'opacity':1
			},500);
		}
		if(opacity_line2_bg2==0){
			$('#content_line2_bg2').css('background-color','#'+color[prev]).animate({
			'opacity':1
			},500);
		}else{
			$('#content_line2_bg2').css('background-color','#'+color[n]).animate({
			'opacity':0
			},500);
		}
		$('.cl2_center_banner').eq(n).css('z-index','1').fadeOut(1000);
		$('.cl2_center_banner').eq(prev).css('z-index','2').fadeIn(1000);
		n--;
		n<0&&(n=length-1);
		cvs='prev';
	}
	var control=true;
	function banner(){
		if(control){
			adNext();
		}
		setTimeout(banner,4000);
	}
	setTimeout(banner,4000);
	//左右按钮切换广告
			//显示与隐藏
	$('#content').mousemove(function(){
		var e=window.event||arguments[0];
		if(e.pageX>=$('.cl2_left')[0].offsetLeft+parseInt($('.cl2_left').css('width'))
		&&e.pageX<=$('.cl2_left')[0].offsetLeft+parseInt($('.cl2_left').css('width'))+parseInt($('.cl2_center_banner').css('width'))
		&&e.pageY>=parseInt($('.content_top').css('height'))+parseInt($('#header').css('height'))
		&&e.pageY<=parseInt($('.content_top').css('height'))+parseInt($('#header').css('height'))+parseInt($('.cl2_center_banner').css('height'))){
			$('.cl2_toleft').fadeIn(300);
			$('.cl2_toright').fadeIn(300);
			control=false;
		}else{
			$('.cl2_toleft').fadeOut(300);
			$('.cl2_toright').fadeOut(300);
			control=true;
		}
	})
		//透明度渐变
	$('.cl2_toleft').mouseover(function(){
		$(this).fadeTo(300,0.5);
	}).mouseout(function(){
		$(this).fadeTo(300,0.3);
	})
	$('.cl2_toright').mouseover(function(){
		$(this).fadeTo(100,0.5);
	}).mouseout(function(){
		$(this).fadeTo(300,0.3);
	})
		//点击切换
	$('.cl2_toleft').click(function(){
		adPrev();
	})
	$('.cl2_toright').click(function(){
		adNext(); 
	})
	//鼠标移入标签，广告跳转到指定位置
	var timer=null;
	$('.tags').each(function(index,domEle){
		$(this).mouseenter(function(){	
			if(index==0){
				jump(22,0,index);
			}else if(index==1){
				jump(3,4,index);
			}else if(index==2){
				jump(4,5,index);
			}else if(index==3){
				jump(6,7,index);
			}else if(index==4){
				jump(8,9,index);
			}else if(index==5){
				jump(9,10,index);
			}else if(index==6){
				jump(12,13,index);
			}else if(index==7){
				jump(14,15,index);
			}else if(index==8){
				jump(16,17,index);
			}else if(index==9){
				jump(18,19,index);
			}else if(index==10){
				jump(20,21,index);
			}
		})
	})
	function jump(a,b,index){
		timer!=null&&clearTimeout(timer);
		timer=setTimeout(function(){
			trstN=a;
			trstNext=b;
			trst=true;
			num=index;
			$('.cl2_center_banner').hide();
			adNext();
			trst=null;
		},300)
	}
	//全部商品分类二级菜单
	/*
	$('.cl2_left>li').bind('mouseenter mouseleave',function(){
		if($(this).hasClass('cl2_left_hover')){
			$(this).children('.cl2_left_detail').animate({
				width:0,
				opacity:'hide'
			},'fast');
			$(this).removeClass('cl2_left_hover');
		}else{
			$(this).children('.cl2_left_detail').css('width',750).show();
			$(this).addClass('cl2_left_hover');
		}
	})
*/
	var liEnterTimer=null;
	var liLeaveTimer=null;
	$('.cl2_left>li').mouseenter(function(){
		var _this=this;
		liEnterTimer=setTimeout(function(){
			$(_this).children('.cl2_left_detail').css('width',750).show();
			$(_this).addClass('cl2_left_hover');
		},200)
		
	})
	$('.cl2_left>li').mouseleave(function(){
		clearTimeout(liEnterTimer);
		var _this=this;
		setTimeout(function(){
			$(_this).children('.cl2_left_detail').animate({
				width:0,
				opacity:'hide'
			},'fast');
			$(_this).removeClass('cl2_left_hover');
		},200)
	})
	$('.cl2_left_detail_x').click(function(){
		$(this).removeClass('cl2_left_hover');
		$(this).parent('.cl2_left_detail').animate({
				width:0,
				opacity:'hide'
		},'fast');
	})
	
	//楼层商品切换
	var hotTimer=null;
	$('.c_f_hot').mouseenter(function(){
		clearTimeout(hotTimer);
		var _this=this;
		hotTimer=setTimeout(function(){
			$(_this).siblings().removeClass('current');
			if(!$(_this).hasClass('current')){
			$(_this).addClass('current');
			}
		},300)
	})
	//侧边栏(右)，滑动效果
	$('#fixed_right>div').mouseenter(function(){
	//console.log($('#sm')[0]);
	//console.log($(this)[0]);
		if(this==$('#sm')[0]){
			$(this).children('.fixed_pop')
					.css({
						'background-color':'#fff',
						'color':'#383838'
					})
			$(this).children('span').css('display','inline');
		}else{
			$(this).children('.fixed_pop')
				.css({
					'background-color':'#fa0',
					'color':'#383838'
				})
		}
		$(this).children('.fixed_pop')
				.animate({
					left:-$(this).children('.fixed_pop').width(),
				},300);
	})
	$('#fixed_right>div').mouseleave(function(){
		if(this!=$('#sm')[0]){
			$(this).children('.fixed_pop')
				.css({
					'background-color':'#383838',
					'color':'#fa0'
				});
		}else{
			$(this).children('span').css('display','none');
		}
		$(this).children('.fixed_pop')
				.animate({
					left:0,
				},300)
	})
	
	//侧边栏(左),锚效果,动态变换效果
	var scrollTop=0;
	var fixed_left_title=['服饰百货','手机通讯','生活用品','食品酒水','母婴玩具','美妆个护','家电数码','家用电器','家装建材','图书音像'];
	//动态设置侧边栏(左)的位置，使其始终位于页面显示区域左侧,垂直居中
	$('#fixed_left').css('top',($(window).height()-$('#fixed_left').height())/2);
	//窗口大小变化时重新计算侧边栏(左)位置
	$(window).resize(function(){
		$('#fixed_left').css('top',($(window).height()-$('#fixed_left').height())/2);
	});
	$('.fixed_left_all').each(function(index,domEle){
		//var _index=index;
		var _this=this;
		$(this).mouseenter(function(){
			$(this).addClass('fixed_left_current').text(fixed_left_title[index]);
		})
		$(this).mouseleave(function(){
			$(this).removeClass('fixed_left_current');
			if(!$(this).hasClass('fixed_left_chose')){
				$(this).text('');
			}
		})
		$(this).click(function(){
			$(this).siblings().removeClass('fixed_left_chose');
			$(this).addClass('fixed_left_chose').text(fixed_left_title[index]);
			$(this).addClass('fixed_left_current').text(fixed_left_title[index]);
			$(window).scrollTop($($('.content_f')[index]).offset().top);
		})
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>=$('#content_1f').offset().top-$('#content_1f').height()){
			$('#fixed_left').fadeIn(100);
		}else{
			$('#fixed_left').fadeOut(100);
		}
		$('.content_f').each(function(index,domEle){
			if($(window).scrollTop()>=scrollTop){
				scrollTop=$(window).scrollTop();
				if($(window).scrollTop()>=$($('.content_f')[index]).offset().top){
					$($('.fixed_left_all')[index]).siblings().removeClass('fixed_left_chose').text('');
					$($('.fixed_left_all')[index]).addClass('fixed_left_chose').text(fixed_left_title[index]);
				}
			}else if($(window).scrollTop()<=scrollTop){
				scrollTop=$(window).scrollTop();
				if($(window).scrollTop()+$(window).height()<=$($('.content_f')[index]).offset().top+$($('.content_f')[index]).height()){
					$($('.fixed_left_all')[index]).siblings().removeClass('fixed_left_chose').text('');
					$($('.fixed_left_all')[index]).addClass('fixed_left_chose').text(fixed_left_title[index]);
				}
			}
			
		})
	})
})