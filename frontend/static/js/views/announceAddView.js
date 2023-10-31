import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("登入");
    }

    async getHtml() {
        return `
    <div class="content">
    {/* <!------------ 公告查詢  ------------> */}

    <div>
        <div class="title page">公告新增</div>

        <div class="inputTitle">公告標題：</div>

        <input type="text" placeholder="請輸入標題文字" class="noIconBefore" id="announceTitle" />

        <div class="inputMessgaeWrapper">
            <span>image long long long long long long long long long.doc</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.707 8L12 4.707L11.293 4L8 7.293L4.707 4L4 4.707L7.293 8L4 11.293L4.707 12L8 8.707L11.293 12L12 11.293L8.707 8Z"
                    fill="#111111"
                />
            </svg>
        </div>

        <div class="buttonWrapper flexCenter">
            <div class="button flexCenter">上傳圖片</div>
        </div>

        <div class="inputTitle">公告內容：</div>

        <textarea type="text" cols="40" placeholder="請輸入文字" class="noIconBefore" id="announceContent" ></textarea>

        <div class="buttonWrapper flexCenter">
            <div class="button flexCenter solid">取消</div>
            <div class="button flexCenter" id="newAnnounce">送出</div>
        </div>

        <div class="space32"></div>
    </div>
</div>;
        `;
    }
}
