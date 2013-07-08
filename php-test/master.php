<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<link rel="stylesheet" type="text/css" href=<?php echo $page_css; ?> />
<link rel="stylesheet" type="text/css" media="only screen and (max-width: 768px), only screen and (max-device-width: 768px)" href=<?php echo $small_css; ?> />
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script src="js/jquery.placeholder.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $(<?php echo $main_navbar_active; ?>).addClass('navbar-active');
        $(<?php echo $secondary_navbar_active; ?>).addClass('navbar-active');
        $('input, textarea').placeholder();
    });
</script>
<title><?php echo $page_title; ?></title>
</head>
<body>
<?php include('header.php');?>
<?php include($page_content);?>
<?php include('footer.php');?>
</body>