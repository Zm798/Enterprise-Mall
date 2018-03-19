/* 轮播图 */
$(function(){

	var index = 0;
	var len = $('.swiper-img li').length;
	var timer;
	demo();

	// 自动轮播
	function demo() {
		timer = setInterval(function() {
			// 隐藏当前
			$('.swiper-img li').eq(index).fadeOut();
			$('.swiper-index li').eq(index).removeClass('active');

			//自增1
			index++;
			if(index >= len) {
				index = 0;
			} 

			// 显示下一张
			$('.swiper-img li').eq(index).fadeIn();
			$('.swiper-index li').eq(index).addClass('active');
		},3000)
	}

	// 鼠标移入
	$('.swiper').mouseenter(function(){
		// 显示按钮
		$('.swiper-left,.swiper-right').show();
		//停止轮播
		clearInterval(timer);
	}).mouseleave(function(){
		// 隐藏按钮
		$('.swiper-left,.swiper-right').hide();

		// 继续轮播
		demo();

	})
})		

/* 回顶部 */
$(function() {
	// 页面滚动
	$(window).scroll(function(){
		// 获取滚动高度
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 300) {
			$('.top').show()
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

	var data = {
		bed: {
			icon: "1 (3).png",
			menu: "床品件套",
			state: "MUJI等品牌制造商出品",
			list :[
				{ "id": 1, "title": "冬眠暖绒四件套", "desc":"纯棉拉舍尔，被窝享冬眠","subtitle":"加价购","subhead":"APP特惠","price": 499, "img": "3.jpg", "type": "bed" },
				{ "id": 2, "title": "全棉色织磨毛四件套", "desc":"温暖浅磨毛，入冬必备","subtitle":"加价购","subhead":"APP特惠","price": 599, "img": "4.jpg", "type": "bed" },
				{ "id": 3, "title": "全棉色织绗缝多用件套", "desc":"夏季凉被，冬季暖套，四季可用","subtitle":"","subhead":"","price": 499, "img": "6.jpg", "type": "bed" },
				{ "id": 4, "title": "加厚夹棉保暖四件套", "desc":"几何撞色，厚实升温","subtitle":"圣诞特卖","subhead":"","price": 379, "img": "5.jpg", "type": "bed" },
			]	
		},		
	
		furniture: {
			icon: "1 (1).png",
			menu: "家具",
			state: "大师级工艺",
			list:[
				{ "id": 5, "title": "韵白系列沙发单人位", "desc":"完美设计，舒适耐用","subtitle":"圣诞特卖","subhead":"","price": 1799, "img": "10.png", "type": "furniture" },
				{ "id": 6, "title": "YEATION HOMEY三人位沙发", "desc":"北欧风力作 选款师特别推荐","subtitle":"","subhead":"","price": 399, "img": "11.png", "type": "furniture" },
				{ "id": 7, "title": "面包椅", "desc":"面包椅面 神奇坐感","subtitle":"","subhead":"","price": 499, "img": "12.png", "type": "furniture" },
				{ "id": 8, "title": "多功能私享按摩椅", "desc":"选款师力荐 专属私人按摩师","subtitle":"爆品","subhead":"","price": 1999, "img": "13.png", "type": "furniture" },
			]
			
		},
		
		pet: {
			icon: "1 (5).png",
			menu: "宠物",
			state: "抑菌除味，打造宠物舒适空间",
			list:[
				{ "id": 9, "title": "六边形南瓜式宠物窝", "desc":"给萌宠柔软包裹的归家感","subtitle":"限时购","subhead":"","price": 89, "img": "6.png", "type": "pet" },
				{ "id": 10, "title": "黑凤梨 秋冬加厚条纹宠物窝", "desc":"时尚牛仔，加厚温暖","subtitle":"","subhead":"","price": 68, "img": "7.png", "type": "pet" },
				{ "id": 11, "title": "伸缩式趣味猫窝", "desc":"趣味毛球，伸缩两用","subtitle":"","subhead":"","price": 98, "img": "8.png", "type": "pet" },
				{ "id": 12, "title": "方形封闭式宠物窝", "desc":"封闭式设计猫咪独享","subtitle":"","subhead":"","price": 99, "img": "9.png", "type": "pet" },
			]
				
		},
		
		fabrics: {
			icon: "1 (2).png",
			menu: "布艺软装",
			state: "各种风格软装装点你的家",
			list: [
				{ "id": 13, "title": "甜心马卡龙拖鞋式暖脚垫", "desc":"可以暖脚的马卡龙大拖鞋","subtitle":"","subhead":"","price": 34.9, "img": "9.png", "type": "fabrics" },
				{ "id": 14, "title": "日式纯色水洗亚麻抱枕", "desc":"温暖浅磨毛，入冬必备","subtitle":"","subhead":"","price": 79, "img": "3.png", "type": "fabrics" },
				{ "id": 15, "title": "日式蓬软太鼓抱枕", "desc":"萌趣太鼓造型 软糯轻柔回弹","subtitle":"","subhead":"","price": 29, "img": "4.png", "type": "fabrics" },
				{ "id": 16, "title": "超柔弹力靠背懒人沙发", "desc":"回到家，只想瘫在沙发上","subtitle":"","subhead":"","price": 599, "img": "5.png", "type": "fabrics" },
			]
			
		}
		
	}

	var str = '';

    for(var i in data) {
		str += '<div class="product-title bed-title">';
		str += '<p class="menu-title">';
		str += '<img src="./assets/image/nav/'+data[i].icon+'" alt="">';
		str += '<span>'+data[i].menu+'</span>';
		str += '</p>';
		str += '<p class="menu-desc">'+data[i].state+'</p>';
		str += '</div>';
		str += '<ul class="product-img">';

				data[i].list.forEach(function(value,key){
				str += '<li class="product-list">';
				str += '<div class="product-image">';
				str += '<a href=""><img src="./assets/image/list/'+value.img+'" alt=""></a>';
				str += '</div>';
				str += '<div class="product-text"><p class="gap">';
				if(value.subtitle!='') {
					str += '<span class="additional">'+value.subtitle+'</span>';
				}
				if(value.subhead!='') {
					str += '<span class="APP">'+value.subhead+'</span></p>';
				}
				str += '<a style="color:#333" href="" title="'+value.title+'"><h4>'+value.title+'</h4></a>';
				str += '<p class="detail-price">'+value.price+'</p>';
				str += '<div class="product-desc">';
				str += '<div class="line"></div>';
				str += '<p class="referral">'+value.desc+'</p>';
				str += '</div>';
				str += '</div>';
				str += '</li>';
			})	
		str += '</ul>';
		str += '</div>';
	}
   document.querySelector('.product').innerHTML = str;
   var index = 0;
  // 点击搜素
  	
	var dd;
	$('.classify a').click(function(){
		var sub=$(this).index(),dd=sub-2;
		xi(dd);
		
		console.log(sub,index,dd);
	});
	function xi(index){
		$('.product-img').eq(index).show();
		$('.product-img').eq(index).siblings().hide();
	}

	$('.collate').click(function(){
		var index = $(this).index();
		if(index == 0) {
			data.list.sort(function(a,b){
				 return a.price - b.price;
			})
		}
	})
})