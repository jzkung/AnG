(function($){
	$(function(){
	  	$('select').selectToAutocomplete();
	  	$('form').submit(function(){
		    alert( $(this).serialize() );
		    return false;
	  	});
	});
})(jQuery);

$(document).ready(function() {
	var form = $('[name="register-form"]');
	var companyName = $('[name="company-name"]');
	var companyNameError = $('#company-name-error');
	var companyDomain = $('[name="company-domain"]');
	var companyDomainError = $('#company-domain-error');

	var province = $('[name="provinces"]');
	var provinceSelector = $('input.province-selector');
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

	function displayError(errorInput, errorContainer, errorMessage, color) {
		errorContainer.show();
		errorContainer.text(errorMessage);
		errorContainer.css({'color': color});
		errorInput.css({'border-color': color});
	}

	function hideError(errorInput, errorContainer) {
		errorContainer.hide();
		errorContainer.text("");
		errorInput.css({'border-color': '#cfcfcf'});
	}

	function hideErrorBlack(errorInput, errorContainer) {
		errorContainer.hide();
		errorContainer.text("");
		errorInput.css({'border-color': '#1a1a1a'});
	}

	function validateCompanyName() {
		if (companyName.val().length == 0) {
			displayError(companyName, companyNameError, "请输入公司名称", '#cc3300');
		} else {
			hideErrorBlack(companyName, companyNameError);
		}
	}

	function validateCompanyNameFinal() {
		if (companyName.val().length == 0) {
			displayError(companyName, companyNameError, "请输入公司名称", '#cc3300');
		} else {
			hideError(companyName, companyNameError);
		}
	}

	function validateCompanyDomain() {
		var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (companyDomain.val().length == 0) {
			displayError(companyDomain, companyDomainError, "格式：agrant.cn", '#cc3300');
		} else if (!regex.test(companyDomain.val())) {
			displayError(companyDomain, companyDomainError, "公司主域格式不对，应如：agrant.cn", '#cc3300');
		} else {
			hideError(companyDomain, companyDomainError);
		}
	}

	function validateCompanyAddressSelect() {
		if (province.find("option:selected").text() == "") {
			displayError(provinceSelector, companyAddressSelectError, "请选择省份", '#cc3300');
		} else if (city.find("option:selected").text() == "") {
			displayError(city, companyAddressSelectError, "请选择城市", '#cc3300');
		} else if (district.find("option:selected").text() == "") {
			displayError(district, companyAddressSelectError, "请选择地区", '#cc3300');
		} else {
			hideError(companyAddressSelect, companyAddressSelectError);
		}
	}

	function validateCompanyAddress() {
		var regex = /^[a-zA-Z\u4e00-\u9fa50-9_\-\(\)\#\（\）]+$/;
		if (companyAddress.val().length == 0) {
			displayError(companyAddress, companyAddressError, "请填写详细公司地址", '#cc3300');
		} if (!regex.test(companyAddress.val())) {
			displayError(companyAddress, companyAddressError, "公司地址格式错误，请重新输入", '#cc3300');
		} else {
			hideError(companyAddress, companyAddressError);
		}
	}

	function validateContactPerson() {
		var regex = /^[\w-.]+$/;
		if (contactPerson.length == 0) {
			displayError(contactPerson, contactPersonError, "请填写联系人名称", '#cc3300');
		} else if (!regex.test(contactPerson.val())) {
			displayError(contactPerson, contactPersonError, "联系人名称含有非法字符", '#cc3300');
		} else {
			hideError(contactPerson, contactPersonError);
		}
	}

	function validateContactNumber() {
		var regex = /[0-9-()+]{3,20}/;
		if (contactNumber.length == 0) {
			displayError(contactNumber, contactNumberError, "Too short put in number", '#cc3300');
		} else if (!regex.test(contactNumber.val())) {
			displayError(contactNumber, contactNumberError, "Yo number weird", '#cc3300');
		} else {
			hideError(contactNumber, contactNumberError);
		}
	}

	function validateUsername() {
		var regex1 = /^[a-zA-Z]+$/;
		var regex2 = /^[\w-.]+$/;
		if (username.val().length < 4) {
			displayError(username, usernameError, "用户名至少需要包括4个字母", '#cc3300');
		} else if (!regex1.test(username.val().charAt(0))) {
			displayError(username, usernameError, "请输入以字母开头的用户名", '#cc3300');
		} else if (!regex2.test(username.val())) {
			displayError(username, usernameError, "用户名含有非法字符", '#cc3300');
		} else {
			hideError(username, usernameError);
		}
	}

	function validatePassword() {
		var regex1 = /\s/;
		var regex2 = /^[\w\,\\.\/\;\[\]\\\=\-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\<\>\?]+$/;
		var regex3 = /(?=.*[0-9])/;
		var regex4 = /(?=.*[\,\\.\/\;\[\]\\\=\-\`\~\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\<\>\?])/;
		if (regex1.test(password.val())) {
			displayError(password, passwordError, "密码含有非法字符", '#cc3300');
		} else if (password.val().length < 8) {
			displayError(password, passwordError, "密码长度不足8个字符", '#cc3300');
		} else if (!password.val().match(regex2)) {
			displayError(password, passwordError, "密码含有非法字符", '#cc3300')
		} else if (password == username.val()) {
			displayError(password, passwordError, "密码不能和用户名一样", '#cc3300');
		} else if (!regex3.test(password.val()) && !regex4.test(password.val())) {
			displayError(password, passwordError, "请使用字母、数字或标点符号的任意组合", '#cc3300');
		} else {
			hideError(password, passwordError);
		}
	}

	function validateConfirmPassword() {
		if (password.val() != confirmPassword.val()) {
			displayError(confirmPassword, confirmPasswordError, "两次密码输入不一致", '#cc3300');
		} else {
			hideError(confirmPassword, confirmPasswordError);
		}
	}

	function validateEmail() {
		var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!regex.test(email.val())) {
			displayError(email, emailError, "邮箱格式错误", '#cc3300');
		} else {
			hideError(email, emailError);
		}
	}

	companyName.focus(function(event) {
		displayError.call(this, companyName, companyNameError, "请输入公司名称", '#1a1a1a');
	});
	companyName.blur(validateCompanyNameFinal);
	companyName.keyup(validateCompanyName);

	companyDomain.focus(function(event) {
		displayError.call(this, companyDomain, companyDomainError, "请输入公司主域，格式如：agrant.cn", '#1a1a1a');
	});
	companyDomain.blur(validateCompanyDomain);
	companyDomain.keyup(validateCompanyDomain);

	provinceSelector.focus(function(event) {
		displayError.call(this, provinceSelector, companyAddressSelectError, "请输入公司所在的省份", '#1a1a1a');
	});
	provinceSelector.blur(validateCompanyAddressSelect);
	provinceSelector.keyup(validateCompanyAddressSelect);

	companyAddress.focus(function(event) {
		displayError.call(this, companyAddress, companyAddressError, "请填写详细公司地址", '#1a1a1a');
	});
	companyAddress.blur(validateCompanyAddress);
	companyAddress.keyup(validateCompanyAddress);

	contactPerson.focus(function(event) {
		displayError.call(this, contactPerson, contactPersonError, "请输入公司联系人", '#1a1a1a');
	});
	contactPerson.blur(validateContactPerson);
	contactPerson.keyup(validateContactPerson);

	contactNumber.focus(function(event) {
		displayError.call(this, contactNumber, contactNumberError, "Put in yo number", '#1a1a1a');
	});
	contactNumber.blur(validateContactNumber);
	contactNumber.keyup(validateContactNumber);

	username.blur(validateUsername);
	username.keyup(validateUsername);
	password.blur(validatePassword);
	password.keyup(validatePassword);
	confirmPassword.blur(validateConfirmPassword);
	confirmPassword.keyup(validateConfirmPassword);	
	email.blur(validateEmail);
	email.keyup(validateEmail);

	
});



