$(function(){
	/*
	图片轮播：直接显示，直接隐藏
		1. 页面刚进来，图片自动轮播
			初始化显示第一张图片，每隔2s显示一张图片
		2. 鼠标移入图片
			2.1 显示左右按钮
			2.2 自动轮播必须停止
		3. 鼠标移入索引栏
			显示对应的图片
		4. 点击左按钮，显示上一张图片
			点击右按钮，显示下一张图片
	*/
	var index = 0;
	var len = $('.swiper-img li').length;
	var timer;
	run();
	// 图片自动轮播
	function  run() {
		timer = setInterval(function(){
			// 当前的图片淡出
			$('.swiper-img li').eq(index).fadeOut();
			$('.swiper-index li').eq(index).removeClass('active');

			// 自增1
			index++;
			if(index >= len) {
				index = 0;
			}

			// 下一张图片淡入
			$('.swiper-img li').eq(index).fadeIn();
			$('.swiper-index li').eq(index).addClass('active');
			console.log(index);
		},3000)
	}
	// 鼠标移入图片
	$('.swiper').mouseenter(function(){
		// 停止轮播
		clearInterval(timer);
	})
	// 鼠标移出图片
	$('.swiper').mouseleave(function(){
		// 继续轮播
		run();
	})
	// 点击左按钮，显示上一张图片
	$('.swiper-left').mousedown(function(){
		// 当前的图片淡出
		$('.swiper-img li').eq(index).fadeOut();
		$('.swiper-index li').eq(index).removeClass('active');

		// 自减1
		index--;
		if(index < 0) {
			index = len-1;
		}

		// 上一张图片淡入
		$('.swiper-img li').eq(index).fadeIn();
		$('.swiper-index li').eq(index).addClass('active');

	})
	// 点击右按钮，显示下一张图片
	$('.swiper-right').mousedown(function(){
		// 当前的图片淡出
		$('.swiper-img li').eq(index).fadeOut();
		$('.swiper-index li').eq(index).removeClass('active');

		// 自增1
			index++;
			if(index >= len) {
				index = 0;
			}

		// 下一张图片淡入
		$('.swiper-img li').eq(index).fadeIn();
		$('.swiper-index li').eq(index).addClass('active');
	})

	// 鼠标移入索引栏 显示对应的图片
	$('.swiper-index li').mouseover(function(){
		$('.swiper-img li').stop(true,true);
		// 当前的图片淡出
		$('.swiper-img li').eq(index).fadeOut();
		$('.swiper-index li').eq(index).removeClass('active');

		index = $(this).index();

		// 索引对应的图片显示
		$('.swiper-img li').eq(index).fadeIn();
		$('.swiper-index li').eq(index).addClass('active');

	})

	/* 新品首发*/
	var productItem = new Swiper('.product-item', {
    	slidesPerView: 4,
      	spaceBetween: 10,
      	slidesPerGroup: 4,
      	loop: true,

      	nextButton: '.product-right',
        prevButton: '.product-left'
      
    });

	/*大家都在说*/
     var evaluateItem = new Swiper('.evaluate-item', {
	    autoplay: 2000,
	    slidesPerView: 3,
	    spaceBetween: 12,
     	slidesPerGroup: 1,
      	loop: true,

     	nextButton: '.evaluate-right',
      	prevButton: '.evaluate-left'
    });

     $('.evaluate-item').mouseenter(function(){
		evaluateItem.stopAutoplay();
	}).mouseleave(function(){
		evaluateItem.startAutoplay()
	})

})

/*人气推荐*/
$(function(){
	var title = document.querySelectorAll('.title');
	var listUl = document.querySelectorAll('.recommend-list');

	var index = 0;
	var len = title.length;
	for(i = 0; i < len; i++) {
		title[i].index = i;
		title[i].onclick = function(){
			// 隐藏当前
			title[index].className = 'title';
			listUl[index].className = 'recommend-list';

			index = this.index;
			// 显示对应
			title[index].className = 'title active';
			listUl[index].className = 'recommend-list active';
		}
	}

})

/*限时购*/
$(function(){
	
	fun();
	setInterval(function(){
		fun();
	},1000);
	function fun() {	

		// 获取对象
		var hours = document.querySelector('.hour');
		var minutes = document.querySelector('.minute');
		var seconds = document.querySelector('.second');
		// 获取当前时间
		var d1 = new Date();
		// 获取未来时间
		var d2 = new Date('2018-08-08 00:00:00');
		// 计算时间差
		var time = d2.getTime() - d1.getTime();
		// 计算剩余时间
		var hour = addTime(Math.floor(time/1000/60/60%24));
		var minute = addTime(Math.floor(time/1000/60%60));
		var second = addTime(Math.floor(time/1000%60));
		// 写入span里
		hours.innerHTML = hour;
		minutes.innerHTML = minute;
		seconds.innerHTML = second;
	}
	function addTime(time) {
		if(time < 10) {
			time = '0' + time;
		}
		return time;
	}
	
	
})

/* 侧边栏顶部图标 */
$(function(){
	// 页面滚动
	$(window).scroll(function(){
		// 获取滚动距离
		var scrollTop = $(this).scrollTop();
		console.log(scrollTop);
		if(scrollTop > 500) {
			$('.top').show();
		} else {
			$('.top').hide();
		}
	})

	// 点击回顶部按钮,让页面滚动的浏览器顶部
	$('.top').click(function(){
		$('html,body').animate({'scrollTop':0},1000,'linear');
	})

	// 头部固定导航栏
	$(window).scroll(function(){
		// 获取滚动距离
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= 250) {
			$('.topfixed').show();
		} else {
			$('.topfixed').hide();
		}
	})
})