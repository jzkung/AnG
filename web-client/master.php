<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery-2.0.1.min.js"></script>
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
</body>