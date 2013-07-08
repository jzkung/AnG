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
	var citySelector = $('input.city-selector');
	var district = $('[name="districts"]');
	var districtSelector = $('input.district-selector');
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
		errorInput.css({'background': '#fff'});
		errorContainer.css({'display': 'inline'});
		errorContainer.text(errorMessage);
		errorContainer.css({'color': color});
		errorInput.css({'border-color': color});
	}

	function hideError(errorInput, errorContainer, color) {
		errorInput.css({'transition': 'none'});
		errorInput.css({'background': "url('images/register/valid-form.png') 98% center no-repeat #fff"});
		errorContainer.hide();
		errorContainer.text("");
		errorInput.css({'border-color': color});
	}

	function validateCompanyName() {
		if (companyName.val().length == 0) {
			displayError(companyName, companyNameError, "请输入公司名称", '#cc3300');
		} else {
			hideError(companyName, companyNameError, '#cfcfcf');
		}
	}

	function validateCompanyDomain() {
		var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (companyDomain.val().length == 0) {
			displayError(companyDomain, companyDomainError, "格式：agrant.cn", '#cc3300');
		} else if (!regex.test(companyDomain.val())) {
			displayError(companyDomain, companyDomainError, "公司主域格式不对，应如：agrant.cn", '#cc3300');
		} else {
			hideError(companyDomain, companyDomainError, '#cfcfcf');
		}
	}

	function validateProvince() {
		if (province.find("option:selected").text() == "") {
			displayError(provinceSelector, companyAddressSelectError, "以上的信息不能空着，请填写！", '#cc3300');
		} else {
			hideError(provinceSelector, companyAddressSelectError, '#cfcfcf');
		}
	}

	function validateCity() {
		if (city.find("option:selected").text() == "") {
			displayError(citySelector, companyAddressSelectError, "以上的信息不能空着，请填写！", '#cc3300');
		} else {
			hideError(citySelector, companyAddressSelectError, '#cfcfcf');
		}
	}

	function validateDistrict() {
		if (district.find("option:selected").text() == "") {
			displayError(districtSelector, companyAddressSelectError, "以上的信息不能空着，请填写！", '#cc3300');
		} else {
			hideError(districtSelector, companyAddressSelectError, '#cfcfcf');
		}
	}

	function validateCompanyAddress() {
		var regex = /^[a-zA-Z\u4e00-\u9fa50-9_\-\(\)\#\（\）]+$/;
		if (companyAddress.val().length == 0) {
			displayError(companyAddress, companyAddressError, "请填写详细公司地址", '#cc3300');
		} if (!regex.test(companyAddress.val())) {
			displayError(companyAddress, companyAddressError, "公司地址格式错误，请重新输入", '#cc3300');
		} else {
			hideError(companyAddress, companyAddressError, '#cfcfcf');
		}
	}

	function validateContactPerson(color) {
		var regex = /^[\w\u4E00-\u9FA5-.]+$/;
		if (contactPerson.val().length == 0) {
			displayError(contactPerson, contactPersonError, "请填写联系人名称", '#cc3300');
		} else if (!regex.test(contactPerson.val())) {
			displayError(contactPerson, contactPersonError, "联系人名称含有非法字符", '#cc3300');
		} else {
			hideError(contactPerson, contactPersonError, color);
		}
	}

	function validateContactNumber(color) {
		var regex = /[0-9-()+]{3,20}/;
		if (contactNumber.length == 0) {
			displayError(contactNumber, contactNumberError, "Too short put in number", '#cc3300');
		} else if (!regex.test(contactNumber.val())) {
			displayError(contactNumber, contactNumberError, "Yo number weird", '#cc3300');
		} else {
			hideError(contactNumber, contactNumberError, color);
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
			hideError(username, usernameError, '#cfcfcf');
		}
	}

	function validatePassword(color) {
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
			hideError(password, passwordError, color);
		}
	}

	function validateConfirmPassword(color) {
		if (password.val() != confirmPassword.val()) {
			displayError(confirmPassword, confirmPasswordError, "两次密码输入不一致", '#cc3300');
		} else {
			hideError(confirmPassword, confirmPasswordError, color);
		}
	}

	function validateEmail() {
		var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!regex.test(email.val())) {
			displayError(email, emailError, "邮箱格式错误", '#cc3300');
		} else {
			hideError(email, emailError, '#cfcfcf');
		}
	}

	companyName.focus(function(event) {
		displayError.call(this, companyName, companyNameError, "请输入公司名称", '#1a1a1a');
	});
	companyName.trigger('focus');
	companyName.blur(validateCompanyName);

	companyDomain.focus(function(event) {
		displayError.call(this, companyDomain, companyDomainError, "请输入公司主域，格式如：agrant.cn", '#1a1a1a');
	});
	companyDomain.blur(validateCompanyDomain);

	provinceSelector.focus(function(event) {
		displayError.call(this, provinceSelector, companyAddressSelectError, "请输入公司所在的省份", '#1a1a1a');
	});
	provinceSelector.blur(validateProvince);

	citySelector.focus(function(event) {
		displayError.call(this, citySelector, companyAddressSelectError, "请输入公司所在的city", '#1a1a1a');
	});
	citySelector.blur(validateCity);

	districtSelector.focus(function(event) {
		displayError.call(this, districtSelector, companyAddressSelectError, "请输入公司所在的district", '#1a1a1a');
	});
	districtSelector.blur(validateDistrict);

	companyAddress.focus(function(event) {
		displayError.call(this, companyAddress, companyAddressError, "请填写详细公司地址", '#1a1a1a');
	});
	companyAddress.blur(validateCompanyAddress);

	contactPerson.focus(function(event) {
		displayError.call(this, contactPerson, contactPersonError, "请输入公司联系人", '#1a1a1a');
	});
	contactPerson.blur(function(event) {
		validateContactPerson.call(this, '#cfcfcf');
	});
	contactPerson.keyup(function(event) {
		validateContactPerson.call(this, '#1a1a1a');
	});

	contactNumber.focus(function(event) {
		displayError.call(this, contactNumber, contactNumberError, "Put in yo number", '#1a1a1a');
	});
	contactNumber.blur(function(event) {
		validateContactNumber.call(this, '#cfcfcf');
	});
	contactNumber.keyup(function(event) {
		validateContactNumber.call(this, '#1a1a1a');
	});

	username.blur(validateUsername);
	password.blur(function(event) {
		validatePassword.call(this, '#cfcfcf');
	});
	password.keyup(function(event) {
		validatePassword.call(this, '#1a1a1a');
	});
	confirmPassword.blur(function(event) {
		validateConfirmPassword.call(this, '#cfcfcf');
	});
	confirmPassword.keyup(function(event) {
		validateConfirmPassword.call(this, '#1a1a1a');
	});	
	email.blur(validateEmail);
});



