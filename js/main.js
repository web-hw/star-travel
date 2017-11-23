$('#star-travel').fullpage({
	sectionsColor: ['transparent', 'transparent', '#e4e4e4', 'rgba(255, 255, 255, .0)', 'transparent', 'transparent'],
	
	scrollingSpeed: 700,
	// 是否首尾相接
	// continuousVertical: true,
	normalScrollElementTouchThreshold: 5,
	
	// navigation: true,// 导航条显示
	autoScrolling: true,//true or false , false -- 会出现滚动条
	scrollOverflow: false,// 内容超出后是否出现滚动条
	loopHorizontal: false,// 左右滑块循环
	// controlArrowColor: '#16BA9D',// 左右滑块颜色
	
	resize:true,
	
	// 导航栏设置
	anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6','page-7'], //会显示在地址栏
	menu: '#menu',
	easing: 'fold',
	//==================================================== 左边导航 ============================================================
	// >>>>>>>>>>>>>>>>>>>> 左边导航 鼠标滚动效果 <<<<<<<<<<<<<<<<<<<<
	afterLoad:function (anchorLink,index) {
		console.log(index);
		var _thisOBJ = $('.nav-left .list-ul li');
		_thisOBJ.eq(index-1).find('span.active').addClass('visible');
		_thisOBJ.eq(index-1).siblings().find('span.active').removeClass('visible');
		_thisOBJ.eq(index-1).find('a').addClass('active');
		_thisOBJ.eq(index-1).siblings().find('a').removeClass('active');
	},
	// <<<<<<<<<<<<<<<<< 第一屏 隐藏左边导航 >>>>>>>>>>>>>>>>>>>>>>
	onLeave:function(index,netIndex,direction){
		if(netIndex==1){
			$('.nav-left').hide();
			$('.player-info').hide();
		}else {
			$('.nav-left').show();
			$('.player-info').show();
		}
	},
	afterRender:function(){
		$('.nav-left').hide();
		$('.player-info').hide();
	}
	// <<<<<<<<<<<<<<< 第一屏 隐藏左边导航 >>>>>>>>>>>>>>>>>
});

	// >>>>>>>>>>>>>>>>>>>> 左边导航 点击效果 <<<<<<<<<<<<<<<<<<<<
	var _pageIndex = $('.nav-left .list-ul li a');
	_pageIndex.on('click',function () {
		var p_index = $(this).parent().index();
		$.fn.fullpage.moveTo(p_index+1);
	});
	//==================================================== 左边导航 ============================================================
	$('.next-page').click(function () {
		$.fn.fullpage.moveSectionDown();
	});