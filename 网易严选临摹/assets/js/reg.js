$(function(){
	/*
	  表单验证
		当用户名失焦的时候,验证用户名是否正确
			1. 用户不输入内容，不验证
            2. 请用字母数字下划线命名
            3. 账号必须由字母开头
            4. 账号必须是6-18个字符
            5. 该账户已注册
	*/	
	var userBool = false;
	var pwdBool = false;
	var pwdsBool = false;
	var telBool = false;
	var noteBool = false;
	$('.username').focus(function() {
		$('.username').addClass('tip-line');
		// 去除所有的class
		$('.username').removeClass('error');
         // 去除span标签内的文字
        $('.tip').html('').removeClass('error-tip success-tip shake');
	})

	$('.username').blur(function(){
		 userBool = true;
		// 获取用户输入的值
		var value = $(this).val().trim();
		/*console.log(value);*/
		 // 用户没有输入内容
		if( value.length == 0) {
			$('.wait').hide();
			return;
		}

		var text = $('.wait li:eq(0)').text();
		$('.username').val(text);

		$('.wait').delay(200).hide(0);
		// 2.请用字母数字下划线命名
		var reg1 = /^\w+$/
		if(!reg1.test(value)) {
			$('.tip').html('请用字母、数字或下划线命名').addClass('error-tip').addClass('shake');
			/*$('.tip').addClass('shake');*/
			$('.username').addClass('error');
			userBool = false;
			return;
		}

		// 3. 账号必须由字母开头
		var reg2 = /^[a-zA-Z]+/
		if(!reg2.test(value)) {
			$('.tip').html('帐号须由字母开头，尝试注册当前帐号？').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			userBool = false;
			return;	
		}

		// 4. 账号必须是6-18个字符
		var reg3 = /^\w{6,18}$/;
		if(!reg3.test(value)) {
			$('.tip').html('帐号须由6-18个字符组成，尝试注册当前帐号？').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			userBool = false;
			return;		
		}

		// 5.判断用户名是否被注册
		var that = $(this);
		$.post('./assets/php/reg.php', { username: value }, function(msg) {
            if (msg.success == 1) {
                $('.tip').html('该帐号已注册').addClass('error-tip').addClass('shake');;
                // 给当前内容增加错误的class
                that.addClass('error');
                userBool = false;
             	return false;
            } else {
                /*$('.tip').html('该帐号可用注册');*/
                // 给当前内容增加正确的class
                $('.tip').addClass('success-tip');
                /*that.addClass('tip-line');*/         
            }
        }, 'json');

	}).keyup(function(){
		// 当按键抬起的时候，候选框展示
		$('.wait').show();
		// 获取输入的内容
		var text = $(this).val();
		// 将获取的内容输入到每个li的span里
		$('.wait li').find('span').text($(this).val());
	}) 

	$('.wait li').click(function(){
		// 点击li，获取li的内容，将li的内容写入到input表单中
		var content = $(this).text();
		// 写入到input中
		$('.username').val(content);
	})

	/* 
		密码验证 

		当密码失去焦点的时候，验证密码是否正确
			1.密码须由6-16个字符组成，区分大小写
			2.密码过于简单
			   密码是纯数字且小于10位数字时过于简单
			   密码是z,x,c,v,b,n,m时,密码过于简单
	*/ 
	// 聚焦
	$('.password').focus(function() {

		$('.password').addClass('tip-line');
		// 去除所有的class
		$('.password').removeClass('error');
            // 去除span标签内的文字
        $('.hint').html('').removeClass('error-tip success-tip shake');
	})

	$('.password').blur(function(){
		pwdBool = true;
		// 获取用户输入的值
		var value = $(this).val().trim();
		// 用户没有输入内容
		if( value.length == 0) {
			pwdBool = false;
			return;
		}

		// 1.密码是纯数字且小于10位数字时过于简单
		var reg1 = /^[0-9]{6,10}$/
		var reg2 = /[z,x,c,v,b,n,m]/
		if(reg1.test(value) || reg2.test(value)) {
			$('.hint').text('密码过于简单，请重新设置').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			pwdBool = false;
			return;
		}
		// 2.密码须由6-16个字符组成，区分大小写
		var reg2 = /^.{6,16}$/;
		if(!reg2.test(value)) {
			$('.hint').text('密码须由6-16个字符组成，区分大小写').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			pwdBool = false;
			return;
			
		} else {
			 $('.hint').addClass('success-tip');
		}

	})

	/* 再次输入密码
	   1.密码须由6-16个字符组成，区分大小写
	   2.密码不一致
	*/
	// 聚焦
	$('.pdw-again').focus(function() {

		$('.pdw-again').addClass('tip-line');
		// 去除所有的class
		$('.pdw-again').removeClass('error');
            // 去除span标签内的文字
        $('.tip-p').html('').removeClass('error-tip success-tip shake');
	})

	// 失焦
	$('.pdw-again').blur(function(){
		pwdsBool = true;
		// 获取用户输入的值
		var value = $(this).val().trim();
		// 用户没有输入内容
		if( value.length == 0) {
			pwdsBool = false;
			return;
		}

		// 1.密码须由6-16个字符组成，区分大小写
		var reg1 = /^.{6,16}$/;
		if(!reg1.test(value)) {
			$('.tip-p').removeClass('success-tip')
			$('.tip-p').text('密码须由6-16个字符组成，区分大小写').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			pwdsBool = false;
			return;
			
		}
		// 2.密码不一致
		if($(this).val() != $('.password').val()){ 
			console.log(1);
			$('.tip-p').text('密码不一致').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			pwdsBool = false;
			return;
		} else {
			$('.tip-p').addClass('success-tip')
		}
	})
	/* 
	  手机号验证 
	   1. 请输入正确的手机号
	   2. 账号为空的时候,不能输入手机号  
	*/
	// 聚焦
	$('.number').focus(function() {

		$('.number').addClass('tip-line');
		// 去除所有的class
		$('.number').removeClass('error');
            // 去除span标签内的文字
        $('.tip-t').html('').removeClass('error-tip success-tip shake');
	})

	// 失焦
	$('.number').blur(function(){
		telBool = true;
		// 获取用户输入的值
		var value = $(this).val().trim();
		if(value.length == 0) {
			telBool = false;
			return;
		}
		// 1. 请输入正确的手机号
		var reg = /^(13[0-9]|14[57]|15[012356789]|17[35678]|18[0-9]|199)[0-9]{11}$/;
		if(!reg.test(value)) {
			$('.tip-t').text('请输入正确的手机号').addClass('error-tip').addClass('shake');
			$(this).addClass('error');
			telBool = false;
			return;
		} else {
			$('.tip-t').addClass('success-tip');
		}	
	})
	// 2. 账号为空的时候,不能输入手机号  
	$('.number').keypress(function(){
			telBool = true;
			var value = $('.username').val();
			if(value.length == 0) {
			
			$('.tip').text('请先输入帐号').addClass('error-tip').addClass('shake');
			telBool = false;
			return false;
			}
	})
	/* 
		短信验证 
		账号为空的时候,不能输入短信验证 
		手机号为空的时候,不能输入短信验证
	*/
	$('.note-box').keypress(function(){
		noteBool = true;

		// 获取账号
		var value = $('.username').val();
			// 账号为空的时候,不能输入短信验证 
			if(value.length == 0) {
			
			$('.tip').text('请先输入帐号').addClass('error-tip').addClass('shake');
			noteBool = false;
			return false;
			}
		// 获取手机号
		var telValue = $('.number').val();
		// 手机号为空的时候,不能输入短信验证
		if(telValue.length == 0 ) {
			$('.tip-t').text('请先输入手机号').addClass('error-tip').addClass('shake');
			noteBool = false;
			return false;
		} 
	})
// 	// 当点击获取验证码的时候,需先
	$('form').submit(function(){
		if(userBool && pwdBool && pwdsBool && telBool && noteBool) {

		}else if(!userBool){
			$('.tip').text('请先输入帐号').addClass('error-tip').addClass('shake');
			return false;
		}else if(!pwdBool){
			$('.hint').text('请输入密码').addClass('error-tip').addClass('shake');
			return false;
		}  else if(!pwdsBool){
			$('.tip-p').text('请再次输入密码').addClass('error-tip').addClass('shake');
			return false;
		}  else if(!telBool){
			$('.tip-t').text('请输入手机号').addClass('error-tip').addClass('shake');
			return false;
		}  else if(!noteBool){
			$('.tip-b').text('请输入验证码').addClass('error-tip').addClass('shake');
			return false;
		} 
	})
})





