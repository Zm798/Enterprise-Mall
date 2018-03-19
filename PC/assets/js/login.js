/* 侧边栏顶部图标 */
$(function(){
	var userBool = false;
	var pwdBool = false;
	// 表单验证
	$('input').focus(function(){
		$('.tip').html('');
	})
	$('.user').blur(function(){
		userBool = true;
		// 获取用户输入的值
		var value = $(this).val().trim();

		// 用户没有输入内容
		if( value.length == 0) {
			$('.wait').hide();
			return false;
			userBool = false;
		}
		// 获取li里的第一个值,写入input
		var text = $('.wait li:eq(0)').text();
		$('.user').val(text);
		$('.wait').delay(150).hide(0);

		// 中文验证
		var reg1 = /[\u4E00-\u9FA5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]+/
		if(reg1.test(value)){
			$('.tip').html('账号格式错误');
			return false;
			userBool = false;
		}

	}).keyup(function(){
		// 当按键抬起的时候，候选框展示
		$('.wait').show();
		// 获取输入的内容
		var text = $(this).val();
		// 将获取的内容输入到每个li的span里
		$('.wait li').find('span').text($(this).val());

	})
	$('.wait li').click(function(){
		// 点击li,获取li的内容
		var text = $(this).text();
		// 写入到input中
		$('.user').val(text);
	})

	// 密码验证
	$('.pwd').blur(function(){
		pwdBool = true;
		// 获取用户输入的密码值
		var value = $(this).val().trim();

		// 用户没有输入内容
		if( value.length == 0) {
			pwdBool = false;
			return false;
		}
	})
	// 表单验证
	$('form').submit(function(){
		if(userBool && pwdBool) {

		} else if(!userBool){
			$('.tip').text('请输入帐号');
			return false;
		} else if(!pwdBool){
			$('.tip').text('请输入密码');
			return false;
		} 
	})


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

})

