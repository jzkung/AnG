if ($.browser.msie) {
	var version = $.browser.msie && parseInt($.browser.version, 10);
	if (version <= 8) {
		$('.register-textField').css('font-family', '"Microsoft YaHei", "微软雅黑", Candara, Tahoma, SimSun !important');
		$('.register-textField').css('padding-top','8px');
		$('.register-textField').css('height','36px');
		$('.register-arrow').css('left','0px');
		$('.register-arrow').css('top','0px');
	}
	if (version == 7) {
		$('.register-textField').css('font-family', '"Microsoft YaHei", "微软雅黑", Candara, Tahoma, SimSun !important');
		$('#index-submit').css('filter','chroma(color=#000000)');
		$('#register-text-description').css('overflow','hidden');
		$('#register-text-description').css('width','100%');
		$('.register-textField').css('height','34px');
	}
}
$(document).ready(function() {
	if ($.browser.msie) {
		var version = $.browser.msie && parseInt($.browser.version, 10);
		if (version == 8) {
			$('#index-submit').hover(
				function() {
					$('#index-text').stop(true, true).fadeOut();
					$('.register-arrow').stop(true, true).fadeIn(function() {
						$('.register-arrow').css('top','-50%');
					});
				},
				function() {
					$('.register-arrow').stop(true, true).fadeOut();
					$('.register-arrow').css('top','0px');
					$('#index-text').stop(true, true).fadeIn();
				}
			);
		} else if (version == 7) {
			$('#index-submit').hover(
				function() {
					$('#index-submit').css('background-color','#008acb');
				},
				function() {
					$('#index-submit').css('background-color','#00adef');
				}
			);
		} else {
			$('#index-submit').hover(
				function() {
					$('#index-text').stop(true, true).fadeOut();
					$('.register-arrow').stop(true, true).fadeIn();
				},
				function() {
					$('.register-arrow').stop(true, true).fadeOut();
					$('#index-text').stop(true, true).fadeIn();
				}
			);
		}
		$.fn.fade_in= function(speed,callback){
			return this.each(function(e){
				$(this).fadeIn(speed,function(e){
					$.browser.msie? $(this).get(0).style.removeAttribute('filter') : '';
					(typeof(eval(callback)) == 'function')? eval(callback)() : '';
				});
			});
		}
		$.fn.fade_in= function(speed,callback){
			return this.each(function(e){
				$(this).fadeOut(speed,function(e){
					$.browser.msie? $(this).get(0).style.removeAttribute('filter') : '';
					(typeof(eval(callback)) == 'function')? eval(callback)() : '';
				});
			});
		}
	} else {
		$('.register-arrow').css('display','inline');
	}
});