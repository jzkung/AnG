<script type="text/javascript">
    videojs("video-player", {}, function() {});

    function SelectVideo(path)
    {
        var mplayer = videojs("video-player", {} );
        mplayer.src({ type:"video/mp4", src: path});
        mplayer.load();
        mplayer.play();
    }
</script>

<div class="downloads">
	<div class="downloads-text-container">
		<div class="header2">AG竞价助手</div>
		<div class="header2">请选择适合您的版本</div>
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
	  	<a onclick="SelectVideo('files/videos/jjzs-1.mp4');" class="active-video">Link one</a><br/>
	  	<a href="#">Link one</a><br/>
	  	<a href="#">Link one</a><br/>
	  	<a href="#">Link one</a><br/>
	  	<a href="#">Link one</a><br/>
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