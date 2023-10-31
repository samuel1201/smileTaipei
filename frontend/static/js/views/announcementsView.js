import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("首頁");
    }

    async getHtml() {
        return `
				<div>
					<div class="searchWrapper">
						<div class="saerchButtons">
							<div class="title">公告查詢</div>
							<div class="flexRow gap8">
								<div class="button flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.87 15L8 14.5L10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H7.5V12H3C2.46957 12 1.96086 11.7893 1.58579 11.4142C1.21071 11.0391 1 10.5304 1 10V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V10C15 10.5304 14.7893 11.0391 14.4142 11.4142C14.0391 11.7893 13.5304 12 13 12H10.58L8.87 15Z"
											fill="#E51D88" />
										<path d="M8.5 4.5H7.5V6.5H5.5V7.5H7.5V9.5H8.5V7.5H10.5V6.5H8.5V4.5Z" fill="#E51D88" />
									</svg>
									<span addAnnounce>新增公告</span>
								</div>

								<!-- 分隔線 -->
								<div class="verticalLine"></div>

								<div class="button solid flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z"
											fill="#E51D88" />
									</svg>
									<span>編輯</span>
								</div>

								<div class="button solid flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 6H7V12H6V6ZM9 6H10V12H9V6Z" fill="#E51D88" />
										<path
											d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4ZM6 1H10V2H6V1Z"
											fill="#E51D88" />
									</svg>
									<span>刪除</span>
								</div>

								<!-- 分隔線 -->
								<div class="verticalLine"></div>

								<!-- 開關圖示 180轉向掛avtive -->
								<div class="switchIcon avtive flexCenter cursor">
									<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
											fill="#E51D88" />
									</svg>
								</div>

							</div>
						</div>
						<div class="searchTools">
							<!-- input -->
							<div class="relative">
								<input type="text" placeholder="請輸入文字查詢">
								<div class="inputIcon flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.724 10C11.5489 9.02039 12.0009 7.78067 12 6.5C12 5.41221 11.6774 4.34884 11.0731 3.44437C10.4687 2.5399 9.60976 1.83495 8.60476 1.41867C7.59977 1.00238 6.4939 0.893465 5.42701 1.10568C4.36011 1.3179 3.3801 1.84173 2.61092 2.61092C1.84173 3.3801 1.3179 4.36011 1.10568 5.42701C0.893465 6.4939 1.00238 7.59977 1.41867 8.60476C1.83495 9.60976 2.5399 10.4687 3.44437 11.0731C4.34884 11.6774 5.41221 12 6.5 12C7.78067 12.0009 9.02039 11.5489 10 10.724L13.793 14.5L14.5 13.793L10.724 10ZM6.5 11C5.60999 11 4.73996 10.7361 3.99994 10.2416C3.25992 9.74715 2.68314 9.04434 2.34254 8.22208C2.00195 7.39981 1.91284 6.49501 2.08647 5.6221C2.2601 4.74918 2.68869 3.94736 3.31802 3.31802C3.94736 2.68869 4.74918 2.2601 5.6221 2.08647C6.49501 1.91284 7.39981 2.00195 8.22208 2.34254C9.04434 2.68314 9.74715 3.25992 10.2416 3.99994C10.7361 4.73996 11 5.60999 11 6.5C10.9987 7.69307 10.5241 8.83689 9.68052 9.68052C8.83689 10.5241 7.69307 10.9987 6.5 11Z"
											fill="#E51D88" />
									</svg>
								</div>
							</div>

							<!-- input -->
							<div class="relative">
								<input type="text" placeholder="選擇年份" readonly class="cursor">
								<div class="inputIcon flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.724 10C11.5489 9.02039 12.0009 7.78067 12 6.5C12 5.41221 11.6774 4.34884 11.0731 3.44437C10.4687 2.5399 9.60976 1.83495 8.60476 1.41867C7.59977 1.00238 6.4939 0.893465 5.42701 1.10568C4.36011 1.3179 3.3801 1.84173 2.61092 2.61092C1.84173 3.3801 1.3179 4.36011 1.10568 5.42701C0.893465 6.4939 1.00238 7.59977 1.41867 8.60476C1.83495 9.60976 2.5399 10.4687 3.44437 11.0731C4.34884 11.6774 5.41221 12 6.5 12C7.78067 12.0009 9.02039 11.5489 10 10.724L13.793 14.5L14.5 13.793L10.724 10ZM6.5 11C5.60999 11 4.73996 10.7361 3.99994 10.2416C3.25992 9.74715 2.68314 9.04434 2.34254 8.22208C2.00195 7.39981 1.91284 6.49501 2.08647 5.6221C2.2601 4.74918 2.68869 3.94736 3.31802 3.31802C3.94736 2.68869 4.74918 2.2601 5.6221 2.08647C6.49501 1.91284 7.39981 2.00195 8.22208 2.34254C9.04434 2.68314 9.74715 3.25992 10.2416 3.99994C10.7361 4.73996 11 5.60999 11 6.5C10.9987 7.69307 10.5241 8.83689 9.68052 9.68052C8.83689 10.5241 7.69307 10.9987 6.5 11Z"
											fill="#E51D88" />
									</svg>
								</div>
								<!-- 開關圖示 180轉向掛avtive -->
								<div class="switchIcon avtive flexCenter cursor">
									<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z" fill="#E51D88" />
									</svg>
								</div>
							</div>

							<!-- input -->
							<div class="relative">
								<input type="text" placeholder="選擇月份" readonly class="cursor">
								<div class="inputIcon flexCenter">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.724 10C11.5489 9.02039 12.0009 7.78067 12 6.5C12 5.41221 11.6774 4.34884 11.0731 3.44437C10.4687 2.5399 9.60976 1.83495 8.60476 1.41867C7.59977 1.00238 6.4939 0.893465 5.42701 1.10568C4.36011 1.3179 3.3801 1.84173 2.61092 2.61092C1.84173 3.3801 1.3179 4.36011 1.10568 5.42701C0.893465 6.4939 1.00238 7.59977 1.41867 8.60476C1.83495 9.60976 2.5399 10.4687 3.44437 11.0731C4.34884 11.6774 5.41221 12 6.5 12C7.78067 12.0009 9.02039 11.5489 10 10.724L13.793 14.5L14.5 13.793L10.724 10ZM6.5 11C5.60999 11 4.73996 10.7361 3.99994 10.2416C3.25992 9.74715 2.68314 9.04434 2.34254 8.22208C2.00195 7.39981 1.91284 6.49501 2.08647 5.6221C2.2601 4.74918 2.68869 3.94736 3.31802 3.31802C3.94736 2.68869 4.74918 2.2601 5.6221 2.08647C6.49501 1.91284 7.39981 2.00195 8.22208 2.34254C9.04434 2.68314 9.74715 3.25992 10.2416 3.99994C10.7361 4.73996 11 5.60999 11 6.5C10.9987 7.69307 10.5241 8.83689 9.68052 9.68052C8.83689 10.5241 7.69307 10.9987 6.5 11Z"
											fill="#E51D88" />
									</svg>
								</div>
								<!-- 開關圖示 180轉向掛avtive -->
								<div class="switchIcon avtive flexCenter cursor">
									<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z" fill="#E51D88" />
									</svg>
								</div>
							</div>

							<!-- button -->
							<div class="button flexCenter">
								<span>篩選</span>
							</div>

						</div>
					</div>

					<div class="title page">公告列表</div>

					<div class="tableHeader homeAnnouncement checkbox">
						<span></span>
						<span>公告日期</span>
						<span>發佈者</span>
						<span>標題</span>
					</div>

					<div>
						<div class="tableList homeAnnouncement checkbox">
							<!-- checkbox -->
							<label class="custom-checkbox">
								<input type="checkbox">
								<div class="checkmark"></div>
							</label>
							<span>2023-09-30 15:32</span>
							<span>管理委員會</span>
							<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
						</div>
						<div class="tableList homeAnnouncement checkbox">
							<!-- checkbox -->
							<label class="custom-checkbox">
								<input type="checkbox">
								<div class="checkmark"></div>
							</label>
							<span>2023-09-30 15:32</span>
							<span>管理委員會</span>
							<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
						</div>
						<div class="tableList homeAnnouncement checkbox">
							<!-- checkbox -->
							<label class="custom-checkbox">
								<input type="checkbox">
								<div class="checkmark"></div>
							</label>
							<span>2023-09-30 15:32</span>
							<span>管理委員會</span>
							<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
						</div>
						<div class="tableList homeAnnouncement checkbox">
							<!-- checkbox -->
							<label class="custom-checkbox">
								<input type="checkbox">
								<div class="checkmark"></div>
							</label>
							<span>2023-09-30 15:32</span>
							<span>管理委員會</span>
							<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
						</div>
						<div class="tableList homeAnnouncement checkbox">
							<!-- checkbox -->
							<label class="custom-checkbox">
								<input type="checkbox">
								<div class="checkmark"></div>
							</label>
							<span>2023-09-30 15:32</span>
							<span>管理委員會</span>
							<span>1120930 第一屆管理委員會第一次例會會議通知字字字字字字字字字字字字</span>
						</div>
					</div>
				</div>

				<!------------ pagination ------------>
				<div class="paginationWrapper">
					<div class="arrow flexCenter">
						<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z" fill="#E51D88" />
						</svg>
					</div>
					<div class="paginationItem flexCenter">1</div>
					<div class="paginationItem flexCenter solid">2</div>
					<div class="paginationItem flexCenter solid">3</div>
					<div class="paginationItem flexCenter solid">4</div>
					<div class="paginationItem flexCenter solid">5</div>
					<div class="arrow right flexCenter">
						<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z" fill="#E51D88" />
						</svg>
					</div>
				</div>
				`;
    }
}
