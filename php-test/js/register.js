$(document).ready(function() {
	var form = $('[name="register-form"]');
	var companyName = $('[name="company-name"]');
	var companyDomain = $('[name="company-domain"]');
	var companyNameError = $('#company-name-error');
	var companyDomainError = $('#company-domain-error');

	var province = $('[name="provinces"]');
	var city = $('[name="cities"]');
	var district = $('[name="districts"]');
	var companyAddressSelectError = $('#company-address-select-error');
	var companyAddress = $('[name="company-address"]');
	var companyAddressError = $('#company-address-error');

	var contactPerson = $('[name="contact-person"]');
	var contactPersonError = $('#contact-person-error');
	var contactNumber = $('[name="contact-number"]');
	var contactNumberError = $('#contact-number-error');

	var username = $('[name="username"]');
	var usernameError = $('#username-error');
	var password = $('[name="password"]');
	var passwordError = $('#password-error');
	var confirmPassword = $('[name="confirm-password"]');
	var confirmPasswordError = $('#confirm-password-error');
	var email = $('[name="email"]');
	var emailError = $('#email-error');

	function displayError(errorContainer, errorMessage) {
		errorContainer.show();
		errorContainer.text(errorMessage);
	}

	function hideError(errorContainer) {
		errorContainer.hide();
		errorContainer.text("");
	}

	function validateCompanyName() {
		if (companyName.val().length == 0) {
			displayError(companyNameError, "请输入公司名称");
		} else {
			hideError(companyNameError);
		}
	}

	function validateCompanyDomain() {
		var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (!regex.test(companyDomain.val())) {
			displayError(companyDomainError, "公司主域格式不对，应如：agrant.cn");
		} else {
			hideError(companyDomainError);
		}
	}

	function validateCompanyAddressSelect() {
		if (province.find("option:selected").text() == "") {
			displayError(companyAddressSelectError, "请选择省份");
		} else if (city.find("option:selected").text() == "") {
			displayError(companyAddressSelectError, "请选择城市");
		} else if (district.find("option:selected").text() == "") {
			displayError(companyAddressSelectError, "请选择地区");
		}
	}

	function validateCompanyAddress() {
		var regex = /^[a-zA-Z\u4e00-\u9fa50-9_\-\(\)\#\（\）]+$/;
		if (!regex.test(companyAddress.val())) {
			displayError(companyAddressError, "公司地址格式错误，请重新输入");
		} else {
			hideError(companyAddressError);
		}
	}

	function validateUsername() {
		var regex1 = /^[a-zA-Z]+$/;
		var regex2 = /^[\w-.]+$/;
		if (username.val().length < 4) {
			displayError(usernameError, "用户名至少需要包括4个字母");
		} else if (!regex1.test(username.val().charAt(0))) {
			displayError(usernameError, "请输入以字母开头的用户名");
		} else if (!regex2.test(username.val())) {
			displayError(usernameError, "用户名含有非法字符");
		} else {
			hideError(usernameError);
		}
	}

	function validatePassword() {
		var regex1 = /\s/;
		var regex2 = /^[\w\,\\.\/\;\[\]\\\=\-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\<\>\?]+$/;
		var regex3 = /(?=.*[0-9])/;
		var regex4 = /(?=.*[\,\\.\/\;\[\]\\\=\-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\<\>\?])/;
		if (regex1.test(password.val())) {
			displayError(passwordError, "密码含有非法字符");
		} else if (password.val().length < 8) {
			displayError(passwordError, "密码长度不足8个字符");
		} else if (!password.val().match(regex2)) {
			displayError(passwordError, "密码含有非法字符")
		} else if (password == username.val()) {
			displayError(passwordError, "密码不能和用户名一样");
		} else if (!regex3.test(password.val()) && !regex4.test(password.val())) {
			displayError(passwordError, "请使用字母、数字或标点符号的任意组合");
		} else {
			hideError(passwordError);
		}
	}

	function validateConfirmPassword() {
		if (password.val() != confirmPassword.val()) {
			displayError(confirmPasswordError, "两次密码输入不一致");
		} else {
			hideError(confirmPasswordError);
		}
	}

	function validateEmail() {
		var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!regex.test(email.val())) {
			displayError(emailError, "邮箱格式错误");
		} else {
			hideError(emailError);
		}
	}

	companyName.blur(validateCompanyName);
	companyName.keyup(validateCompanyName);
	companyDomain.blur(validateCompanyDomain);
	companyDomain.keyup(validateCompanyDomain);
	companyAddress.focus(validateCompanyAddressSelect);
	companyAddress.blur(validateCompanyAddress);
	companyAddress.keyup(validateCompanyAddress);
	username.blur(validateUsername);
	username.keyup(validateUsername);
	password.blur(validatePassword);
	password.keyup(validatePassword);
	confirmPassword.blur(validateConfirmPassword);
	confirmPassword.keyup(validateConfirmPassword);	
	email.blur(validateEmail);
	email.keyup(validateEmail);

	(function($){
		$(function(){
		  	$('select').selectToAutocomplete();
		  	$('form').submit(function(){
			    alert( $(this).serialize() );
			    return false;
		  	});
		});
	})(jQuery);
});