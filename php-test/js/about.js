var map;
var beijingOffice = new google.maps.LatLng(39.948456, 116.450368);
var shanghaiOffice = new google.maps.LatLng(31.227188, 121.460935);
var beijingZoom = new google.maps.LatLng(beijingOffice.lat() - 0.002, beijingOffice.lng() - 0.005);
var shanghaiZoom = new google.maps.LatLng(shanghaiOffice.lat() - 0.002, shanghaiOffice.lng() - 0.005);
var beijingMarker;
var shanghaiMarker;
var beijingIB;
var shanghaiIB;
function initMap() {
	var myOptions = {
		zoom: 16,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var styles = [
		{
			featureType: 'road',
			stylers: [
				{ hue: '#FF864B'},
			]
		}
	];
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	map.setOptions({styles: styles});
	map.setCenter(beijingZoom);
	
	var markerImage = new google.maps.MarkerImage("images/marker.png", null, null, null, new google.maps.Size(36, 48));
	beijingMarker = new google.maps.Marker({
		position: beijingOffice,
		map: map,
		icon: markerImage
	});
	
	shanghaiMarker = new google.maps.Marker({
		position: shanghaiOffice,
		map: map,
		icon: markerImage
	});
	
	var beijingBoxText = 
	"<div id='map-box'>" + 
	"<div id='box-name-header'>北京无双科技有限公司</div>" +
	"<div id='box-content'>北京市朝阳区新源里16号琨莎中心2号楼901室</div>" +
	"<div id='box-contact'>" + 
	"<div class='box-contact-line clearfix'><div class='box-info-left'>邮箱</div><div class='box-info-right'>contactus@agrant.cn</div></div>" +
	"<div class='box-contact-line clearfix'><div class='box-info-left'>电话</div><div class='box-info-right'>+86-10-84682706</div></div>" +
	"<div class='box-contact-line clearfix'><div class='box-info-left'>传真 </div><div class='box-info-right'>+86-10-84682706</div></div>" +
	"</div>"
	"</div>"
	beijingIB = getIB(beijingBoxText);
	
	var shanghaiBoxText = 
	"<div id='map-box'>" + 
	"<div id='box-name-header'>北京无双科技有限公司</div>" +
	"<div id='box-content'>上海市威海路567号晶采世纪大厦8楼J座</div>" +
	"<div id='box-contact'>" + 
	"<div class='box-contact-line clearfix'><div class='box-info-left'>邮箱</div><div class='box-info-right'>contactus@agrant.cn</div></div>" +
	"<div class='box-contact-line clearfix'><div class='box-info-left'>电话</div><div class='box-info-right'>+86-10-84682706</div></div>" +
	"<div class='box-contact-line clearfix'><div class='box-info-left'>传真 </div><div class='box-info-right'>+86-10-84682706</div></div>" +
	"<div class='box-contact-line clearfix'><div class='box-info-left'>邮编 </div><div class='box-info-right'>200040</div></div>" +
	"</div>"
	"</div>"
	shanghaiIB = getIB(shanghaiBoxText);
	
	beijingIB.open(map, beijingMarker);
}

function getIB(boxText) {
	var options = {
		content: boxText,
		disableAutoPan: true,
		maxWidth: 0,
		pixelOffset: new google.maps.Size(-176, 0),
		zIndex: null,
		boxStyle: { 
			background: "url('images/box-arrow.png') no-repeat",
			width: "355px"
		},
		closeBoxURL: "",
		infoBoxClearance: new google.maps.Size(1, 1),
		isHidden: false,
		pane: "floatPane",
		enableEventPropagation: false
	};
	return new InfoBox(options);
}

google.maps.event.addDomListener(window, 'load', initMap);

$(document).ready(function() {
	$('#beijing-button').click(function() {
		map.panTo(beijingZoom);
		$('#beijing-button').css('background-color','#FFA83F');
		$('#shanghai-button').css('background-color','#B1B1B1');
		beijingIB.open(map, beijingMarker);
		shanghaiIB.close(map, shanghaiMarker);
	});
	$('#shanghai-button').click(function() {
		map.panTo(shanghaiZoom);
		$('#beijing-button').css('background-color','#B1B1B1');
		$('#shanghai-button').css('background-color','#FFA83F');
		shanghaiIB.open(map, shanghaiMarker);
		beijingIB.close(map, beijingMarker);
	});
});