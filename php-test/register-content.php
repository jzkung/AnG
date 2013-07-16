<script type="text/javascript" src="js/jquery-ui-autocomplete.js"></script>
<script type="text/javascript" src="js/jquery.select-to-autocomplete.min.js"></script>
<script type="text/javascript" src="js/register.js" charset="utf-8"></script>

<div id="top-content-wrapper">
	<h2>注册一个AG帐户</h2>
	<div id="sign-in-register">已有一个AG帐户？请直接<a href="login.php">登录</a></div>
</div>
<div style="clear:both"></div>
<div id="left-content-wrapper">
	<div id="group-1" class="group">
		<div class="left-image-wrapper">
			<img src="images/register/picture-1.png">
		</div>
		<div class="right-text-wrapper">
			<h3>AG广告管理平台</h3>
		</div>
	</div>
	<div id="group-2" class="group">
		<div class="left-image-wrapper">
			<img src="images/register/picture-2.png">
		</div>
		<div class="right-text-wrapper">
			<h3>AG竞价助手</h3>
		</div>
	</div>
	<div id="group-3" class="group">
		<div class="left-image-wrapper">
			<img src="images/register/picture-3.png">
		</div>
		<div class="right-text-wrapper">
			<h3>AG广告系统旗舰版</h3>
		</div>
	</div>
	<div id="group-4" class="group">
		<div class="left-image-wrapper">
			<img src="images/register/picture-4.png">
		</div>
		<div class="right-text-wrapper">
			<h3>AG淘宝营销服务</h3>
		</div>
	</div>
	<div style="clear:both"></div>
</div>
<div id="right-content-wrapper">
	<div id="forms-wrapper">
		<form name="register-form" method="post" action="">
			<div class="form-group">
				<div class="input-group first">
					<input name="company-name" type="text" placeholder="公司名称" autofocus required/>
				</div>
				<div id="company-name-error" class="error"></div>
				<div class="input-group last"><input name="company-domain" type="url" placeholder="公司主域" required/></div>
				<div id="company-domain-error" class="error"></div>
				<div class="input-group"><input name="username" type="text" placeholder="用户名" required/></div>
				<div id="username-error" class="error"></div>
				<div class="input-group"><input name="password" type="password" placeholder="登录密码" required/></div>
				<div id="password-error" class="error"></div>
				<div class="input-group"><input name="confirm-password" type="password" placeholder="确认密码" required/></div>
				<div id="confirm-password-error" class="error"></div>
				<div class="input-group"><input name="email" type="email" placeholder="邮箱" required/></div>
				<div id="email-error" class="error"></div>
			</div>
			<div id="terms" class="form-group">
				<div id="terms-text">点击注册，表示您已阅读并同意<a href="files/terms.pdf">AnG服务条款</a>。</div>
				<button class="big" id="register-button" type="submit">注册帐户</button>
			</div>
		</form>
	</div>
</div>
<div style="clear:both"></div>
<script>
if ($.browser.msie) {
	var version = $.browser.msie && parseInt($.browser.version, 10);
	if (version <= 8) {
		$('input').css('font-family', '"Microsoft YaHei", "微软雅黑", Candara, Tahoma, SimSun !important');
		$('input').css('padding-top','8px');
		$('input').css('height','30px');
	}
}
</script>