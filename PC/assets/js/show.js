/* 侧边栏顶部图标 */
$(function(){
	/*
	  大家都在看 -轮播图
	  需求分析: 点击左右按钮图片轮播
			   鼠标拖动图片
	*/

	var browseImage = new Swiper('.browse-image', {
    	slidesPerView: 4,
      	spaceBetween: 30,
      	slidesPerGroup: 4,

      	nextButton: '.product-right',
        prevButton: '.product-left'
      
    });

    /*
      商品详情-图片放大
	  需求分析:
	  	1.加载进来显示当前图片
	  	2.鼠标移入小图,显示大图
	  	3.鼠标移出,还显示当前
    */
    var index = 0;
    var len = $('.img-small').length;
    // 鼠标移入小图
    $('.small-img').mouseenter(function(){
    	// 去除当前class类
    	$('.img-big .small').hide();
    	// 隐藏右边小图对应大图的图片
    	$('.img-big .big').eq(index).hide();
    	$('.small-img a').eq(index).removeClass('active');

    	index = $(this).index();
    	// 鼠标移入对应图片添加class类
    	$('.img-big .big').eq(index).show();
    	$('.small-img a').eq(index).addClass('active');
    })

    /*
      商品详情-颜色-图片放大
	  需求分析:
		点击小图,显示大图
		再次点击,小图边框消失,还显示当前大图
    */
    var num = 0;

    $('.color-img').click(function() {
    	/*console.log($('.img-big .small'));*/
    	//隐藏当前大图片
    	$('.img-big .big').hide();
    	//隐藏当前小图片
    	$('.img-big .small').eq(num).hide();
    	// 去除图标的class类
    	$('.color-img .iconfont').eq(num).removeClass('active');
    	// 去除小图边框的class类
    	$('.color-img').eq(num).removeClass('active');

    	num = $(this).parent().index();

    	// 显示点击小图对应的大图
    	$('.img-big .small').eq(num).show();
    	// 添加图标的class类
    	$('.color-img .iconfont').eq(num).addClass('active');
    	// 添加小图边框的class类
    	$('.color-img').eq(num).addClass('active');
    })
    /*
      商品详情-尺寸
	  需求分析:
		点击尺寸,显示边框
    */

  /*  var num = 0;*/
  	var num = 0;
    $('.size-text').click(function(){
    	// 去除图标的class类
    	$('.size-text .iconfont').eq(num).removeClass('active');
	    $('.size-text a').eq(num).removeClass('active');
    	/*console.log($(this).children('a').attr('class'))*/
    	var num = $(this).index();

    	if($(this).children('a').attr('class')== undefined || $(this).children('a').attr('class')=="") {
    		
    		$('.size-text .iconfont').eq(num).addClass('active');
	    	$('.size-text a').eq(num).addClass('active');
    	} else {
    		$('.size-text .iconfont').eq(num).removeClass('active');
    		$('.size-text a').eq(num).removeClass('active');
    	}
    })
    
    /*$('.size-text').click(function(){ 
        

    }*/

 /*   var num1 = 0
     $('.size-text').click(function(){

        $('.size-text .iconfont').eq(num1).removeClass('active');
        $('.size-text a').eq(num1).removeClass('active');

         var num1 = $(this).index();

        $('.size-text .iconfont').eq(num1).addClass('active');
        $('.size-text a').eq(num1).addClass('active');
     })
*/
 /*   var num1 = 0;
    $('.size-text').click(function(){
    	$('.size-text .iconfont').siblings().removeClass('active');
    	$('.size-text a').siblings().removeClass('active');
     	console.log($('.size-tetx a'));
        num1 = $(this).index();
         num1 = $(this).index();
    	if($(this).index() != num1){
  			// 添加图标的class类
  			num1 = $(this).index();
	    	$('.size-text .iconfont').siblings().addClass('active');
	    	$('.size-text a').siblings().addClass('active');

    	} else {
    		$('.size-text .iconfont').siblings().removeClass('active');
    		$('.size-text a').siblings().removeClass('active');
    	}
    	
    })*/

	// 页面滚动
	$(window).scroll(function(){
		// 获取滚动距离
		var scrollTop = $(this).scrollTop();
		console.log(scrollTop);
		if(scrollTop > 300) {
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


    /* 质检报告遮盖层 */
    // 点击质检报告,显示遮盖层
	$('.report').click(function(){
        $('.cover').show();
    })

    // 点击X,隐藏遮盖层
    $('.cha').click(function(){
        $('.cover').hide();
    })
    // 遮盖层轮播图
    var index =0;
    var len = $('.cover-img').length;
    $('.left').click(function(){
        // 隐藏当前
        console.log($(this));
        $('.cover-img').eq(index).removeClass('active');

        index--;
        if(index < 0) {
            index = len-1;
        }

        // 显示当前
        $('.cover-img').eq(index).addClass('active');
    })
    $('.right').click(function(){
        // 隐藏当前
        console.log($(this));
        $('.cover-img').eq(index).removeClass('active');

        index++;
        if(index > len) {
            index = 0;
        }

        // 显示当前
        $('.cover-img').eq(index).addClass('active');
    })

})