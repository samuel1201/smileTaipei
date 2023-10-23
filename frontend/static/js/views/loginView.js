import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("登入");
    }

    async getHtml() {
        return `
                    <div class="login relative">
                        <h3 class="h3type">用戶登入</h3>
                        <div class="relative">
                            <img src="./static/icon/user.svg" alt="帳號icon" class="icon" />
                            <input type="text" placeholder="請輸入使用者名稱" /><br />
                            <p class="accountAlert">查無此帳號，請洽詢管理員。</p>
                        </div>
                        <div class="relative">
                            <img src="./static/icon/password.svg" alt="帳號icon" class="icon" />
                            <input type="password" name="pwd" id="pwd" placeholder="請輸入密碼" />
                            <p class="pwdAlert">密碼輸入錯誤，請洽詢管理員</p>
                        </div>
                        <button type="submit">登入</button>
                    </div>
        `;
    }
}
