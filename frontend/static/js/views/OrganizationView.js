import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("組織架構");
    }

    async getHtml() {
        return `
                    <div class="Organization">
                        <div class="top">
                            <h2>現任社區管理委員會列表</h2>
                            <div class="selection relative">
                                <img src="./static/icon/star.png" alt="123" />
                                <select>
                                    <option value="" disabled selected>歷屆管理委員會</option>
                                    <option>第一屆</option>
                                    <option>第二屆</option>
                                    <option>第三屆</option>
                                    <option>第四屆</option>
                                    <option>第五屆</option>
                                    <option>第六屆</option>
                                </select>
                            </div>
                        </div>
                        <div class="boxes">
                            <div id="1">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="2">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="3">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="4">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="5">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="6">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="7">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="8">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                            <div id="9">
                                <img src="./static/icon/Ellipse3.png" alt="13" />
                                <h3>王曉明</h3>
                                <h4>總理事</h4>
                            </div>
                        </div>
                    </div>
        `;
    }
}
