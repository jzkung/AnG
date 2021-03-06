<script type="text/javascript" src="js/jquery-ui-autocomplete.js"></script>
<script type="text/javascript" src="js/jquery.select-to-autocomplete.min.js"></script>
<script type="text/javascript" src="js/register.js" charset="utf-8"></script>

<div id="content-wrapper">
	<div id="top-content-wrapper">
		<h2>注册一个AG帐户</h2>
		<div id="sign-in-register">已有一个AG帐户？请直接<a href="login.php">登录</a></div>
	</div>
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
	</div>
	<div id="right-content-wrapper">
		<div id="forms-wrapper">
			<form name="register-form" method="post" action="">
				<div id="company-info" class="form-group">
					<h3 class="first">公司帐户</h3>
					<div class="input-group first">
						<input name="company-name" type="text" placeholder="公司名称" autofocus required/>
					</div>
					<div id="company-name-error" class="error"></div>
					<div class="input-group last"><input name="company-domain" type="url" placeholder="公司主域" required/></div>
					<div id="company-domain-error" class="error"></div>
				</div>
				<div id="company-address" class="form-group">
					<h4>公司地址</h4>
					<div class="input-group first"><select name="provinces" class="province-selector" id="province-selector" autocorrect="off" autocomplete="off" placeholder="请输入省份">
						<option value="" selected="selected"></option>
						<option value="北京市" data-alternative-spellings="BJ Beijing Beijingshi">北京市</option>
						<option value="天津市" data-alternative-spellings="TJ Tianjin Tianjinshi">天津市</option>
						<option value="河北省" data-alternative-spellings="Hebei">河北省</option>
						<option value="山西省" data-alternative-spellings="Shandong">山西省</option>
						<option value="内蒙古自治区" data-alternative-spellings="Inner Mongolia Neimonggu">内蒙古自治区</option>
						<option value="辽宁省" data-alternative-spellings="Liaoning">辽宁省</option>
						<option value="吉林省" data-alternative-spellings="Jilin">吉林省</option>
						<option value="黑龙江省" data-alternative-spellings="Heilongjiang">黑龙江省</option>
						<option value="上海市" data-alternative-spellings="Shanghai Shanghaishi">上海市</option>
						<option value="江苏省" data-alternative-spellings="Jiangsu">江苏省</option>
						<option value="浙江省" data-alternative-spellings="Zhejiang">浙江省</option>
						<option value="安徽省" data-alternative-spellings="Anhui">安徽省</option>
						<option value="福建省" data-alternative-spellings="Fujian">福建省</option>
						<option value="江西省" data-alternative-spellings="Jiangxi">江西省</option>
						<option value="山东省" data-alternative-spellings="Shandong">山东省</option>
						<option value="河南省" data-alternative-spellings="Henan">河南省</option>
						<option value="湖北省" data-alternative-spellings="Hubei">湖北省</option>
						<option value="湖南省" data-alternative-spellings="Hunan">湖南省</option>
						<option value="广东省" data-alternative-spellings="Guangdong">广东省</option>
						<option value="广西壮族自治区" data-alternative-spellings="Guangxi">广西壮族自治区</option>
						<option value="海南省" data-alternative-spellings="Hainan">海南省</option>
						<option value="重庆市" data-alternative-spellings="Chongqing Chongqingshi">重庆市</option>
						<option value="四川省" data-alternative-spellings="Sichuan">四川省</option>
						<option value="贵州省" data-alternative-spellings="Guizhou">贵州省</option>
						<option value="云南省" data-alternative-spellings="Yunnan">云南省</option>
						<option value="西藏自治区" data-alternative-spellings="Xizang">西藏自治区</option>
						<option value="陕西省" data-alternative-spellings="Shanxi Shaanxi">陕西省</option>
						<option value="甘肃省" data-alternative-spellings="Gansu">甘肃省</option>
						<option value="青海省" data-alternative-spellings="Qinghai">青海省</option>
						<option value="宁夏回族自治区" data-alternative-spellings="Ningxia">宁夏回族自治区</option>
						<option value="新疆维吾尔自治区" data-alternative-spellings="Xinjiang">新疆维吾尔自治区</option>
						<option value="香港特别行政区" data-alternative-spellings="Xianggang Hongkong">香港特别行政区</option>
						<option value="澳门特别行政区" data-alternative-spellings="Aomen Macau">澳门特别行政区</option>
						<option value="台湾省" data-alternative-spellings="Taiwan">台湾省</option>
						<option value="其它" data-alternative-spellings="Other">其它</option>
					</select>
					<select name="cities" class="city-selector" autocorrect="off" autocomplete="off" placeholder="请输入城市">
						<option value="" selected="selected"></option>
						<option value="beijing" data-alternative-spellings="BJ Beijing">北京</option>
						<option value="shanghai" data-alternative-spellings="SH Shanghai">上海</option>
					</select>
					<select name="districts" class="district-selector" autocorrect="off" autocomplete="off" placeholder="请输入地区">
						<option value="" selected="selected"></option>
						<option value="beijing" data-alternative-spellings="BJ Beijing">北京</option>
						<option value="shanghai" data-alternative-spellings="SH Shanghai">上海</option>
					</select>
					</div>
					<div id="company-address-select-error" class="error"></div>
					<div class="input-group last"><input name="company-address" type="text" placeholder="公司地址" required/></div>
					<div id="company-address-error" class="error"></div>
				</div>
				<div id="company-contact" class="form-group">
					<h4>联系人信息</h4>
					<div class="input-group first last">
						<input name="contact-person" type="text" placeholder="联系人" required/>
						<input name="contact-number" type="tel" placeholder="联系电话" required/>
						<div id="contact-person-error" class="contact-person-error"></div>
						<div id="contact-number-error" class="contact-number-error"></div>
					</div>
				</div>
				<div id="user-info" class="form-group">
					<h3>帐户所有者信息</h3>
					<div class="input-group first"><input name="username" type="text" placeholder="用户名" required/></div>
					<div id="username-error" class="error"></div>
					<div class="input-group"><input name="password" type="password" placeholder="登录密码" required/></div>
					<div id="password-error" class="error"></div>
					<div class="input-group"><input name="confirm-password" type="password" placeholder="确认密码" required/></div>
					<div id="confirm-password-error" class="error"></div>
					<div class="input-group">
						<input name="email" type="email" placeholder="邮箱" required/>
						<button class="small" id="send-verification-button" disabled>发送验证码</button>
					</div>
					<div id="email-error" class="error"></div>
					<div class="input-group last"><input name="verification-code" type="text" placeholder="验证码" required/></div>
				</div>
				<div id="terms" class="form-group">
					<div id="terms-text">点击注册，表示您已阅读并同意<a href="files/terms.pdf">AnG服务条款</a>。</div>
					<button class="big" id="register-button" type="submit">注册帐户</button>
				</div>
			</form>
		</div>
	</div>
</div>