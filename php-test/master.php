<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery-2.0.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="layout.css" />
<link rel="stylesheet" type="text/css" href=<?php echo $page_css; ?> />
<link rel="stylesheet" type="text/css" media="only screen and (max-width: 768px), only screen and (max-device-width: 768px)" href="small.css" />
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#header').waypoint('sticky');
        $(<?php echo $main_navbar_active; ?>).addClass('navbar-active');
        $(<?php echo $secondary_navbar_active; ?>).addClass('navbar-active');
    });
</script>
<title><?php echo $page_title; ?></title>
</head>
<body>
<div><?php include('header.php');?></div>
<div><?php include($page_content);?></div>
<div><?php include('footer.php');?></div>
</body>