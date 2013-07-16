<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<link rel="stylesheet" type="text/css" href=<?php echo $page_css; ?> />
<link rel="stylesheet" type="text/css" media="only screen and (max-width: 768px), only screen and (max-device-width: 768px)" href=<?php echo $small_css; ?> />
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script src="js/jquery.placeholder.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
		if (<?php echo $main_navbar_active; ?> != "") {
			$(<?php echo $main_navbar_active; ?>).addClass('navbar-active');
		}
		if (<?php echo $secondary_navbar_active; ?> != "") {
			$(<?php echo $secondary_navbar_active; ?>).addClass('navbar-active');
		}
        $('input, textarea').placeholder();
    });
</script>
<title><?php echo $page_title; ?></title>
<!--[if IE]>
   <style type="text/css">
	    #secondary-navbar-wrapper { 
		   background:transparent;
		   filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#A6000000,endColorstr=#A6000000); 
		   zoom: 1;
		}
    </style>
<![endif]-->
</head>
<body>
<div id="header-wrapper"><?php include('header.php');?></div>
<div id="content-wrapper"><?php include($page_content);?></div>
<div id="footer-wrapper"><?php include('footer.php');?></div>
<script>
	if ($.browser.msie) {
		var version = $.browser.msie && parseInt($.browser.version, 10);
		if (version == 7) {
			$('#main-navbar-wrapper').css('height','0px');
			$('#header').css('background-color','#000000');
			$('#header').css('height','85px');
		}
	}
</script>
<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/respond.src.js"></script>
</body>