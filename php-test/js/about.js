var map;
var beijingOffice = new google.maps.LatLng(39.948456, 116.450368);
var shanghaiOffice = new google.maps.LatLng(31.227188, 121.460935);
var beijingZoom = new google.maps.LatLng(beijingOffice.lat() - 0.001, beijingOffice.lng() - 0.005);
var shanghaiZoom = new google.maps.LatLng(shanghaiOffice.lat() - 0.001, shanghaiOffice.lng() - 0.005);
var beijingMarker;
var shanghaiMarker;
var beijingib;
var shanghaiib;
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
	"北京无双科技有——公司<br>" +
	"next line" +
	"</div>"
	beijingib = getib(beijingBoxText);
	
	var shanghaiBoxText = 
	"<div id='map-box'>" + 
	"北京无双科技有——公司<br>" +
	"next line" +
	"</div>"
	shanghaiib = getib(shanghaiBoxText);
	
	beijingib.open(map, beijingMarker);
}

function getib(boxText) {
	var options = {
		content: boxText,
		disableAutoPan: true,
		maxWidth: 0,
		pixelOffset: new google.maps.Size(-172, 0),
		zIndex: null,
		boxStyle: { 
			background: "url('images/box-arrow.png') no-repeat",
			width: "344px"
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
		beijingib.open(map, beijingMarker);
		shanghaiib.close(map, shanghaiMarker);
	});
	$('#shanghai-button').click(function() {
		map.panTo(shanghaiZoom);
		$('#beijing-button').css('background-color','#B1B1B1');
		$('#shanghai-button').css('background-color','#FFA83F');
		shanghaiib.open(map, shanghaiMarker);
		beijingib.close(map, beijingMarker);
	});
});