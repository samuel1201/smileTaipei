import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("首頁");
  }

  async getHtml() {
    return `
		
		<div class="container">

			<div class="homepage grid2">

				<!------------ Content panel ------------>

				<div class="content">

					<!------------ 最新公告 Announcement  ------------>

					<div>
						<div class="title">
							<span>最新公告</span>
							<img src="./static/icon/fish.svg" />
						</div>

						<div class="tableHeader homeAnnouncement">
							<span>公告日期</span>
							<span>發佈者</span>
							<span>標題</span>
						</div>

						<div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930
									第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="buttonWrapper flexCenter">
								<a href="">查看更多</a>
							</div>
						</div>
					</div>

					<!------------ 最新發文 Forum ------------>

					<div>
						<div class="title">
							<span>最新發文</span>
							<img src="./static/icon/fish.svg" />
						</div>

						<div class="tableHeader homeForum">
							<span>公告日期</span>
							<span>分類</span>
							<span>標題</span>
							<span>發佈者</span>
						</div>

						<div>
							<div class="tableList homeForum">
								<span>2023-09-30 15:32</span>
								<span>生活閒聊</span>
								<span>請各位芳鄰推薦社區附近的美食字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字</span>
								<span>隔壁老王</span>
							</div>
							<div class="tableList homeForum">
								<span>2023-09-30 15:32</span>
								<span>生活閒聊</span>
								<span>請各位芳鄰推薦社區附近的美食字字字字字字字字字字字字</span>
								<span>隔壁老王</span>
							</div>
							<div class="tableList homeForum">
								<span>2023-09-30 15:32</span>
								<span>生活閒聊</span>
								<span>請各位芳鄰推薦社區附近的美食字字字字字字字字字字字字</span>
								<span>隔壁老王</span>
							</div>
							<div class="tableList homeForum">
								<span>2023-09-30 15:32</span>
								<span>生活閒聊</span>
								<span>請各位芳鄰推薦社區附近的美食字字字字字字字字字字字字</span>
								<span>隔壁老王</span>
							</div>
							<div class="tableList homeForum">
								<span>2023-09-30 15:32</span>
								<span>生活閒聊</span>
								<span>請各位芳鄰推薦社區附近的美食字字字字字字字字字字字字</span>
								<span>隔壁老王</span>
							</div>
							<div class="buttonWrapper flexCenter">
							<a href="">查看更多</a>
							</div>
						</div>
					</div>

					<!------------ 最新文件 Files ------------>

					<div>
						<div class="title">
							<span>最新文件</span>
							<img src="./static/icon/fish.svg" />
						</div>

						<div class="tableHeader homeAnnouncement">
							<span>公告日期</span>
							<span>發佈者</span>
							<span>標題</span>
						</div>

						<div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930
									第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="tableList homeAnnouncement">
								<span>2023-09-30 15:32</span>
								<span>管理委員會</span>
								<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
							</div>
							<div class="buttonWrapper flexCenter">
							<a href="">查看更多</a>
							</div>
						</div>
					</div>

				</div>

				<!------------ Right panel ------------>

				<div class="rightPanel">
					<div>
						<div class="rightPanel title">最新投票</div>

						<div class="flexColumn">
							<div class="bannerWrapper">
								<div class="banner img1"></div>
								<div class="bannerTextWrapper">
									<span>是否同意舉辦中秋節晚會活動</span>
									<span>2023-09-30</span>
								</div>
							</div>
							<div class="bannerWrapper">
								<div class="banner img2"></div>
								<div class="bannerTextWrapper">
									<span>是否同意舉辦中秋節晚會活動</span>
									<span>2023-09-30</span>
								</div>
							</div>
						</div>

					</div>

					<div>
						<div class="title rightPanel">社區廣告</div>
						<div class="flexColumn">
							<div class="bannerWrapper">
								<div class="banner img3"></div>
							</div>
							<div class="bannerWrapper">
								<div class="banner img4"></div>
							</div>
						</div>
						<div class="flexColumn">
							<div class="bannerWrapper">
								<div class="banner img5"></div>
							</div>
							<div class="bannerWrapper"></div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
        `;
  }
}
