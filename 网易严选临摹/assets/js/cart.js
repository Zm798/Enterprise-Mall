$(function(){
	/*
	  猜你喜欢 -轮播图
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

	/* 购物车 */
	// 1. ++ -- 删除
	// 2. 计算总价格和总数量
	// 3. 全选和全不选

	var data=[
		{ "id": 1, "img": "13.png", "title": "奶萨酥 210克（6包入）", "desc": "蔓越莓味", "price":16.00, "num": 4 },
        { "id": 2, "img": "14.png", "title": "经典百搭毛球针织帽", "desc": "黑色", "price": 69.00, "num": 2 },
        { "id": 3, "img": "15.png", "title": "伸缩式趣味猫窝", "desc": "粉色", "price": 98.00, "time": "", "num": 1 }
	];
	var str = '';
	data.forEach(function(value,key){
		str += '<div class="cart-list asdf">';
		str += '<div  class="frame">';
		str += '<input type="checkbox" checked class="elect">';
		str += '</div>';
		str += '<a class="product-img" href=""><img src="./assets/image/cart/'+value.img+'" alt=""></a>';
		str += '<a class="headline" href="">';
		str += '<span class="headline-big">'+value.title+'</span><br>';
		str += '<span class="headline-small">'+value.desc+'<i class="iconfont icon-arrow-up1"></i></span>';
		str += '</a>';
		str += '<div class="cost-num">';
		str += '<p>¥<span class="cost">'+value.price.toFixed(2)+'</span></p>';
		str += '</div>';
		str += '<div class="num">';
		str += '<div class="num-case">';
		str += '<span class="jian">-</span>';
		str += '<span class="num-v">'+value.num+'</span>';
		str += '<span class="jia">+</span>';
		str += '</div>';
		str += '</div>';
		str += '<div class="price-num">';
		str += '<p>¥<span class="price">' + (value.price * value.num).toFixed(2) + '</span></p>';
		str += '</div>';
		str += '<div class="remove">';
		str += '<a class="move" href="">移入收藏夹</a><br>';
		str += '<a href="javascript:;" class="dele">删除</a>';
		str += '</div>';
		str += '</div>';

	})
	$('.cart-product').html(str);
	/*console.log(str);*/

	// 1.数量增加
	$('.jia').click(function(){
		// 获取当前点击对象的上一个内容
		var num = $(this).prev().text();
		// console.log(num)
		// 自增
		num++;
		$(this).prev().text(num);
		//获取当前商品的价格
		var price = $(this).parents('.num').prev().find('span').text();
		//console.log(price);
		// 计算小计价格
		$(this).parents('.num').next().find('span').text((num * price).toFixed(2));
		calc()
	})
	// 2.数量减
	$('.jian').click(function(){
		// 获取当前点击对象的下一个内容
		var num = $(this).next().text();
		// 自减
		num--;
		if( num < 1) {
			return;
		}
		$(this).next().text(num);
		//获取当前商品的价格
		var price = $(this).parents('.num').prev().find('span').text();
		// 计算小计价格
		$(this).parents('.num').next().find('span').text((num*price).toFixed(2));
		calc()
	})
	// 3.删除
	 $('.dele').click(function() {
        $(this).parents('.asdf').remove();

        // 重新计算总价格和总刷另
        calc();
    })
	// 4.计算总价格和总数量
	function calc() {
		var price = 0;
		var sum = 0;
		$('.cart-list').each(function() {
			// 判断当前的商品是否被选中
			if($(this).find('.elect').prop('checked')){
				// 获取每个商品的价格和数量
				var p = Number($(this).find('.cost').text());
				var n = Number($(this).find('.num-v').text());
				
				price += p * n;
				sum += n;
				console.log(price);
			}
		
		})
        // 总数量
		$('.check').text(sum);
		// 总价格
		$('.yuan-m').text('¥'+price.toFixed(2));
	}
	calc();
	// 5.点击全选和全不选
	$('.check-all').click(function(){
		// 获取按钮是否选中
		var isCheck = $(this).prop('checked');
		/*console.log($(this).prop('checked'))*/
		// 设置购物车中每件商品的checkbox多选按钮是否选中
		$('.cart-list .elect').prop('checked',isCheck);

		calc();
	})
	$('.elect').click(function(){
		calc();
	})

	// 侧边栏顶部图标 - 页面滚动
	$(window).scroll(function(){
		// 获取滚动距离
		var scrollTop = $(this).scrollTop();
		//console.log(scrollTop);
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
