import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("用戶中心");
    }

    async getHtml() {
        return `
        <div id="content">
        <div class="userPage">
            <!--上層 頭像 及更新密碼區域-->
            <div class="section1 padLR-32px">
                <h3 class="h3type">用戶中心</h3>
                <div class="section1_main">
                    <div class="avatar">
                        <img src="./static/icon/Ellipse3.png" alt="" /><br />
                        <!--編輯圖片按鈕-->
                        <label class="prettier-input relative">
                            <input type="file" name="img-change" id="img-change" />
                            <img src="./static/icon/image.svg" alt="" />
                            <div>編輯圖片</div>
                        </label>
                    </div>
                    <!--更改密碼區域-->
                    <div class="pwd_change">
                        <label for="pwd_change">更新密碼:</label><br />
                        <input type="password" id="pwd_change" placeholder="請輸入新密碼" /><br />
                        <div class="btn">
                            <button type="submit" class="chang_pwd">更新</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--中層 區域2 報修列表-->
            <div class="section2 padLR-32px">
                <div class="section2_top">
                    <h3 class="h3type">專有報修列表</h3>
                    <div class="repairBtn">
                        <button type="button" id="new_repair" class="btn_new">
                            <img src="./static/icon/add_white.svg" class="btn_icon" />
                            新增報修
                        </button>
                        <button type="button" id="close_repair" class="btn_delete">
                            <img src="./static/icon/delete.svg" class="btn_icon" />
                            刪除報修
                        </button>
                        <button type="button" class="Collapse">
                            <img src="./static/icon/Collapse.svg" />
                        </button>
                    </div>
                </div>
                <div class="section2_main">
                    <table cellspacing="0">
                        <!-- <colgroup>
                            <col colspan="2" class="category" />
                            <col span="1" class="title" />
                            <col span="1" class="creator" />
                            <col span="1" class="createTime" />
                            <col span="1" class="updateTime" />
                            <col span="1" class="status" />
                            <col span="1" class="unit" />
                        </colgroup> -->
                        <tr>
                            <th width="32px"></th>
                            <th width="88px">分類</th>
                            <th width="356px">標題</th>
                            <th width="88px">發佈者</th>
                            <th width="88px">發佈時間</th>
                            <th width="88px">更新時間</th>
                            <th width="104px">處理狀態</th>
                            <th width="88px">處理單位</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>公共設施</td>
                            <td>社區大廳冷氣故障</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>15:32 2023-09-30</td>
                            <td>等待處理中</td>
                            <td>總幹事</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>公共設施</td>
                            <td>社區大廳冷氣故障</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>15:32 2023-09-30</td>
                            <td>等待處理中</td>
                            <td>總幹事</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>公共設施</td>
                            <td>社區大廳冷氣故障</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>15:32 2023-09-30</td>
                            <td>等待處理中</td>
                            <td>總幹事</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!--下層 區域3 貼文列表-->
            <div class="section3 padLR-32px">
                <div class="section3_top">
                    <h3 class="h3type">個人貼文列表</h3>
                    <div class="postBtn">
                        <button type="button" id="close_post" class="btn_delete">
                            <img src="./static/icon/delete.svg" class="btn_icon" />
                            刪除報修
                        </button>
                        <button type="button" class="Collapse">
                            <img src="./static/icon/Collapse.svg" />
                        </button>
                    </div>
                </div>
                <div class="section3_main">
                    <table>
                        <tr>
                            <th width="32px"></th>
                            <th width="88px">分類</th>
                            <th width="356px">標題</th>
                            <th width="88px">發佈者</th>
                            <th width="88px">發佈時間</th>
                            <th width="88px">回應</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>生活閒聊</td>
                            <td>請各位芳鄰推薦社區附近的美食</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>999</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>生活閒聊</td>
                            <td>請各位芳鄰推薦社區附近的美食</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>999</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="check" /></td>
                            <td>生活閒聊</td>
                            <td>請各位芳鄰推薦社區附近的美食</td>
                            <td>隔壁老王</td>
                            <td>15:32 2023-09-30</td>
                            <td>999</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
