import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("首頁");
  }

  async getHtml() {
    return `
    <!------------ 公告查詢  ------------>

    <div>
      <div class="searchWrapper">
        <div class="saerchButtons">
          <div class="title">報修查詢</div>
          <div class="flexRow gap8">
            <div class="button flexCenter">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.87 15L8 14.5L10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H7.5V12H3C2.46957 12 1.96086 11.7893 1.58579 11.4142C1.21071 11.0391 1 10.5304 1 10V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V10C15 10.5304 14.7893 11.0391 14.4142 11.4142C14.0391 11.7893 13.5304 12 13 12H10.58L8.87 15Z"
                  fill="#E51D88"
                />
                <path
                  d="M8.5 4.5H7.5V6.5H5.5V7.5H7.5V9.5H8.5V7.5H10.5V6.5H8.5V4.5Z"
                  fill="#E51D88"
                />
              </svg>
              <span>新增報修</span>
            </div>

            <!-- 分隔線 -->
            <div class="verticalLine"></div>

            <div class="button solid flexCenter">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6H7V12H6V6ZM9 6H10V12H9V6Z" fill="#E51D88" />
                <path
                  d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4ZM6 1H10V2H6V1Z"
                  fill="#E51D88"
                />
              </svg>
              <span>刪除</span>
            </div>

            <!-- 分隔線 -->
            <div class="verticalLine"></div>

            <!-- 開關圖示 180轉向掛active -->
            <div class="switchIcon active flexCenter cursor">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="searchTools repair">
          <!-- input -->
          <div class="relative">
            <input type="text" placeholder="請輸入文字查詢" />
            <div class="inputIcon flexCenter">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.724 10C11.5489 9.02039 12.0009 7.78067 12 6.5C12 5.41221 11.6774 4.34884 11.0731 3.44437C10.4687 2.5399 9.60976 1.83495 8.60476 1.41867C7.59977 1.00238 6.4939 0.893465 5.42701 1.10568C4.36011 1.3179 3.3801 1.84173 2.61092 2.61092C1.84173 3.3801 1.3179 4.36011 1.10568 5.42701C0.893465 6.4939 1.00238 7.59977 1.41867 8.60476C1.83495 9.60976 2.5399 10.4687 3.44437 11.0731C4.34884 11.6774 5.41221 12 6.5 12C7.78067 12.0009 9.02039 11.5489 10 10.724L13.793 14.5L14.5 13.793L10.724 10ZM6.5 11C5.60999 11 4.73996 10.7361 3.99994 10.2416C3.25992 9.74715 2.68314 9.04434 2.34254 8.22208C2.00195 7.39981 1.91284 6.49501 2.08647 5.6221C2.2601 4.74918 2.68869 3.94736 3.31802 3.31802C3.94736 2.68869 4.74918 2.2601 5.6221 2.08647C6.49501 1.91284 7.39981 2.00195 8.22208 2.34254C9.04434 2.68314 9.74715 3.25992 10.2416 3.99994C10.7361 4.73996 11 5.60999 11 6.5C10.9987 7.69307 10.5241 8.83689 9.68052 9.68052C8.83689 10.5241 7.69307 10.9987 6.5 11Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
          </div>

          <!-- input -->
          <div class="relative">
            <input
              type="text"
              placeholder="選擇年份"
              readonly
              class="cursor"
            />
            <div class="inputIcon flexCenter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 2.5H13.75V1.25H12.5V2.5H7.5V1.25H6.25V2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V16.25C2.5 16.9375 3.0625 17.5 3.75 17.5H16.25C16.9375 17.5 17.5 16.9375 17.5 16.25V3.75C17.5 3.0625 16.9375 2.5 16.25 2.5ZM16.25 16.25H3.75V7.5H16.25V16.25ZM16.25 6.25H3.75V3.75H6.25V5H7.5V3.75H12.5V5H13.75V3.75H16.25V6.25Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
            <!-- 開關圖示 180轉向掛active -->
            <div class="switchIcon active flexCenter cursor">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
          </div>

          <!-- input -->
          <div class="relative">
            <input
              type="text"
              placeholder="選擇月份"
              readonly
              class="cursor"
            />
            <div class="inputIcon flexCenter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 2.5H13.75V1.25H12.5V2.5H7.5V1.25H6.25V2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V16.25C2.5 16.9375 3.0625 17.5 3.75 17.5H16.25C16.9375 17.5 17.5 16.9375 17.5 16.25V3.75C17.5 3.0625 16.9375 2.5 16.25 2.5ZM16.25 16.25H3.75V7.5H16.25V16.25ZM16.25 6.25H3.75V3.75H6.25V5H7.5V3.75H12.5V5H13.75V3.75H16.25V6.25Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
            <!-- 開關圖示 180轉向掛active -->
            <div class="switchIcon active flexCenter cursor">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
          </div>

          <!-- input -->
          <div class="relative">
            <input
              type="text"
              placeholder="選擇報修區域"
              readonly
              class="cursor"
            />
            <div class="inputIcon flexCenter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 6.25H16.25C16.5814 6.24967 16.8992 6.11787 17.1335 5.88352C17.3679 5.64917 17.4997 5.33142 17.5 5V2.5C17.4997 2.16858 17.3679 1.85083 17.1335 1.61648C16.8992 1.38213 16.5814 1.25033 16.25 1.25H7.5C7.16858 1.25033 6.85083 1.38213 6.61648 1.61648C6.38213 1.85083 6.25033 2.16858 6.25 2.5V3.125H3.75V1.25H2.5V15.625C2.50033 15.9564 2.63213 16.2742 2.86648 16.5085C3.10083 16.7429 3.41858 16.8747 3.75 16.875H6.25V17.5C6.25033 17.8314 6.38213 18.1492 6.61648 18.3835C6.85083 18.6179 7.16858 18.7497 7.5 18.75H16.25C16.5814 18.7497 16.8992 18.6179 17.1335 18.3835C17.3679 18.1492 17.4997 17.8314 17.5 17.5V15C17.4997 14.6686 17.3679 14.3508 17.1335 14.1165C16.8992 13.8821 16.5814 13.7503 16.25 13.75H7.5C7.16858 13.7503 6.85083 13.8821 6.61648 14.1165C6.38213 14.3508 6.25033 14.6686 6.25 15V15.625H3.75V10.625H6.25V11.25C6.25033 11.5814 6.38213 11.8992 6.61648 12.1335C6.85083 12.3679 7.16858 12.4997 7.5 12.5H16.25C16.5814 12.4997 16.8992 12.3679 17.1335 12.1335C17.3679 11.8992 17.4997 11.5814 17.5 11.25V8.75C17.4997 8.41858 17.3679 8.10083 17.1335 7.86648C16.8992 7.63213 16.5814 7.50033 16.25 7.5H7.5C7.16858 7.50033 6.85083 7.63213 6.61648 7.86648C6.38213 8.10083 6.25033 8.41858 6.25 8.75V9.375H3.75V4.375H6.25V5C6.25033 5.33142 6.38213 5.64917 6.61648 5.88352C6.85083 6.11787 7.16858 6.24967 7.5 6.25ZM7.5 2.5H16.25L16.2506 5H7.5V2.5ZM7.5 15H16.25L16.2506 17.5H7.5V15ZM7.5 8.75H16.25L16.2506 11.25H7.5V8.75Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
            <!-- 開關圖示 180轉向掛active -->
            <div class="switchIcon active flexCenter cursor">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
                  fill="#E51D88"
                />
              </svg>
            </div>
          </div>

          <!-- button -->
          <div class="button flexCenter">
            <span>篩選</span>
          </div>
        </div>
      </div>

      <div class="title page">報修列表</div>

      <div class="tableHeader repair checkbox">
        <span></span>
        <span>分類</span>
        <span>標題</span>
        <span>發佈者</span>
        <span>發佈時間</span>
        <span>更新時間</span>
        <span>處理單位</span>
        <span>處理狀態</span>
      </div>

      <div class="noDataWrapper flexCenter flexColumn">
        <svg
          width="64"
          height="80"
          viewBox="0 0 64 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 4C26.4621 4 21.0486 5.64217 16.444 8.71885C11.8395 11.7955 8.25064 16.1685 6.13139 21.2849C4.01213 26.4012 3.45764 32.0311 4.53802 37.4625C5.61841 42.894 8.28515 47.8831 12.201 51.799C16.1169 55.7149 21.106 58.3816 26.5375 59.462C31.969 60.5424 37.5988 59.9879 42.7151 57.8686C47.8315 55.7494 52.2045 52.1605 55.2812 47.556C58.3578 42.9514 60 37.5379 60 32C60 24.5739 57.05 17.452 51.799 12.201C46.548 6.94999 39.4261 4 32 4ZM32 56C27.2533 56 22.6131 54.5924 18.6663 51.9553C14.7195 49.3181 11.6434 45.5698 9.8269 41.1844C8.0104 36.799 7.53512 31.9734 8.46117 27.3178C9.38721 22.6623 11.673 18.3859 15.0294 15.0294C18.3859 11.673 22.6623 9.3872 27.3178 8.46115C31.9734 7.53511 36.799 8.01039 41.1844 9.82689C45.5698 11.6434 49.3181 14.7195 51.9553 18.6663C54.5924 22.6131 56 27.2532 56 32C56 38.3652 53.4714 44.4697 48.9706 48.9706C44.4697 53.4714 38.3652 56 32 56Z"
            fill="#ADADAD"
          />
          <path
            d="M30 16H34V38H30V16ZM32 44C31.4067 44 30.8266 44.1759 30.3333 44.5056C29.8399 44.8352 29.4554 45.3038 29.2284 45.852C29.0013 46.4001 28.9419 47.0033 29.0576 47.5853C29.1734 48.1672 29.4591 48.7018 29.8787 49.1213C30.2982 49.5409 30.8328 49.8266 31.4147 49.9424C31.9967 50.0581 32.5999 49.9987 33.1481 49.7716C33.6962 49.5446 34.1648 49.1601 34.4944 48.6667C34.8241 48.1734 35 47.5933 35 47C35 46.2044 34.6839 45.4413 34.1213 44.8787C33.5587 44.3161 32.7957 44 32 44Z"
            fill="#ADADAD"
          />
        </svg>
        <span>目前尚無資料</span>
      </div>

      <div>
        <div class="tableList repair checkbox">
          <!-- checkbox -->
          <label class="custom-checkbox">
            <input type="checkbox" />
            <div class="checkmark"></div>
          </label>

          <span>公共設施</span>
          <span>社區大廳冷氣故障</span>
          <span>隔壁老王</span>
          <span>2023-09-30 15:32</span>
          <span>2023-09-30 15:32</span>
          <span>等待處理</span>
          <span>總幹事</span>
        </div>
        <div class="tableList repair checkbox">
          <!-- checkbox -->
          <label class="custom-checkbox">
            <input type="checkbox" />
            <div class="checkmark"></div>
          </label>

          <span>公共設施</span>
          <span>社區大廳冷氣故障</span>
          <span>隔壁老王</span>
          <span>2023-09-30 15:32</span>
          <span>2023-09-30 15:32</span>
          <span>
            <!-- input -->
            <div class="relative">
              <input
                type="text"
                placeholder="切換狀態"
                readonly
                class="cursor noIconBefore"
              />
              <!-- 開關圖示 180轉向掛active -->
              <div class="switchIcon active flexCenter cursor">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
                    fill="#E51D88"
                  />
                </svg>
              </div>
            </div>
          </span>
          <span>總幹事</span>
        </div>
      </div>
    </div>

    <!------------ pagination ------------>
    <div class="paginationWrapper">
      <div class="arrow flexCenter">
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
            fill="#E51D88"
          />
        </svg>
      </div>
      <div class="paginationItem flexCenter">1</div>
      <div class="paginationItem flexCenter solid">2</div>
      <div class="paginationItem flexCenter solid">3</div>
      <div class="paginationItem flexCenter solid">4</div>
      <div class="paginationItem flexCenter solid">5</div>
      <div class="arrow right flexCenter">
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.499805L0.5 7.99981L1.55 9.0498L8 2.5998L14.45 9.0498L15.5 7.99981L8 0.499805Z"
            fill="#E51D88"
          />
        </svg>
      </div>
    </div>
  </div>
				`;
  }
}
