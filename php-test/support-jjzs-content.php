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
		<a href="http://agrant.cn/download.aspx?doc=86"><button class="gray-button">Windows32位版本下载</button></a>
		<a href="http://agrant.cn/download.aspx?doc=64"><button class="blue-button right-button">Windows64位版本下载</button></a>
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
	<ul class="acc" id="acc">
		<li>
			<h4 class="header4">竞价结果窗格中，不同的行颜色分别代表什么？</h4>
			<div class="acc-section">
				<div class="acc-content">
					红色：未达到竞价目标的词或待竞价的词（不含设置优化CPC策略的词）；<br/>
					绿色：已达竞价目标的词（不含设置优化CPC策略的词）；<br/>
					黑色：未设置竞价目标或设置优化CPC策略的词；<br/>
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">什么是快速竞价和精准竞价？</h4>
			<div class="acc-section">
				<div class="acc-content">
					快速竞价：可快速达到指定目标，竞价时间较短（仅针对指定排名策略）；<br/>
					精准竞价：以较小的步长进行精准调价，达到指定目标，可以最大限度的减少费用，但耗时稍长；
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">为什么会出现未达目标？</h4>
			<div class="acc-section">
				<div class="acc-content">
					未达目标原因包含：1）调价已达最高出价仍未到达指定位置；
					2）调价次数超过30次，仍未到达指定位置；3）调价过程中，网络中断；
					4）调价过程中，您手动中止了调价操作；5）调价过程中，百度服务器无响应；
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">"百度搜索结果被封"是什么原因？</h4>
			<div class="acc-section">
				<div class="acc-content">
					为了防止恶意操作，百度使用了验证码进行验证，如果出现了验证码，
					需等待十分钟后再操作，验证码即可消除。若在批量调价中遇到百度搜索结果被封，
					AG竞价助手自动暂停操作，在解封后自动继续调价操作；
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">运行自动竞价后，为什么显示“未优化”？</h4>
			<div class="acc-section">
				<div class="acc-content">
					执行优化CPC策略时，如遇到以下情况，将不会执行竞价策略。将会在历史记录竞价状态一列显示未执行优化的原因：<br/>
					1) 当前出价已经不能保持当前排名；<br/>
					2) 连接百度服务器出错；<br/>
					3) 不在前三页，即准备竞价的关键词未显示在百度搜索结果的前三页；
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">如何查看方案中设置策略的词？</h4>
			<div class="acc-section">
				<div class="acc-content">
					在物料信息列表中，如需查看已设置策略的关键词，
					点击“仅显示有策略的词”按钮，即可查看当前账户节点下方案内所有已设置策略的词；<br/>
					若需要查看方案内全部词，再次点击“仅显示有策略的词”，即可显示方案内的全部关键词；
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">不知道如何设置步长</h4>
			<div class="acc-section">
				<div class="acc-content">
					在设置策略时，系统将根据您当前的出价提供一个推荐的竞价步长值，
					您也可以根据自己的经验修改推荐的步长。推荐步长仅在为单一的关键词设置策略时提供。
				</div>
			</div>
		</li>
		<li>
			<h4 class="header4">已经在网站添加了追踪代码，但是还无法看到收益</h4>
			<div class="acc-section">
				<div class="acc-content">
					在网站上添加了追踪代码后，您还需要给推广的关键词增加AG 追踪代码。
					您可以使用“AG 竞价助手”里面的“增加追踪代码”功能，一键即可为您账户里的所有关键词增加代码。
				</div>
			</div>
		</li>
	</ul>
</div>

<script>
	var accordion = new TINY.accordion.slider("accordion");
    accordion.init("acc", "h4", 0);

    $(document).ready(function() {
    	$('.header4').click(function() {
    		var questionClicked = $(this).closest('li');
    		if (questionClicked.hasClass('active-question')) {
    			questionClicked.removeClass('active-question');
    		} else {
	    		questionClicked.addClass('active-question');
	    	}
    	});
	});
</script>

<div class="docs">
	<div class="header2">帮助文档</div>
	<div class="description-text">需要了解详细的产品功能和操作指南，请查阅<a href="#">AG竞价助手产品手册</a></div>
</div>
<div class="back">
	<div class="header2">想解决其他产品遇到的问题吗？</div>
	<a href="support.php"><button class="gray-button">返回帮助中心</button></a>
</div>