<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#sticky-navbars-wrapper').waypoint(('sticky'));
        $(<?php echo $main_navbar_active; ?>).addClass('navbar-active');
        $(<?php echo $secondary_navbar_active; ?>).addClass('navbar-active');
    });
</script>
<title><?php echo $page_title; ?></title>
</head>
<body>
<?php include('header.php');?>
<?php include($page_content);?>
<?php include('footer.php');?>
<script>
if ($.browser.msie) {
	$('.ie-holder').css('text-align','center');
}
</script>
</body>
</html>