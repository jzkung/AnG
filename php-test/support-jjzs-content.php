<script type="text/javascript">
    videojs("video-player", {}, function() {});

    function selectVideo(path, link)
    {
        var mplayer = videojs("video-player", {} );
        mplayer.src({ type:"video/mp4", src: path});
        mplayer.load();
        mplayer.play();
        $('.active-video').removeClass('active-video');
        $(link).addClass('active-video');
    }
</script>

<div class="downloads">
	<div class="downloads-text-container">
		<div class="header2" id="title-text"><img src="images/support/jjzs-icon-blue.png"/>AG竞价助手</div>
		<div class="header3">请选择适合您的版本</div>
		<a href="#"><button class="gray-button">Windows32位版本下载</button></a>
		<a href="#"><button class="blue-button right-button">Windows64位版本下载</button></a>
	</div>
</div>

<div class="videos">
	<div class="header2">操作演示视频</div>
	<div class="player-wrapper">
		<video id="video-player" class="video-js vjs-default-skin" controls preload="none" width="658" height="370"
	      poster="images/experience.png"
	      data-setup="{}">
	    <source src="files/videos/jjzs-1.mp4" type='video/mp4' />
	  </video>
	  <div class="playlist">
	  	<ul>
		  	<li id="video1" onclick="selectVideo('files/videos/jjzs-1.mp4', '#video1');" class="active-video">
		  		<span>Link one</span>
		  	</li>
		  	<li id="video2" onclick="selectVideo('files/videos/jjzs-1.mp4', '#video2');">
		  		<span>Link one</span>
		  	</li>
		  	<li id="video3" onclick="selectVideo('files/videos/jjzs-1.mp4', '#video3');">
		  		<span>Link one</span>
		  	</li>
		  	<li id="video4" onclick="selectVideo('files/videos/jjzs-1.mp4', '#video4');">
		  		<span>Link one</span>
		  	</li>
		  	<li id="video5" onclick="selectVideo('files/videos/jjzs-1.mp4', '#video5');">
		  		<span>Link one</span>
		  	</li>
	  	<ul>
	  </div>
	</div>
</div>
<div class="questions">
	<div class="header2">常见问题</div>
</div>
<div class="docs">
	<div class="header2">帮助文档</div>
	<div class="description-text">需要了解详细的产品功能和操作指南，请查阅<a href="#">AG竞价助手产品手册</a></div>
</div>
<div class="back">
	<div class="header2">想解决其他产品遇到的问题吗？</div>
	<a href="support.php"><button class="gray-button">返回帮助中心</button></a>
</div>