import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("後臺管理");
    }

    async getHtml() {
        return `
        <div class="backstage padLR-32px">
                        <div class="bottom_border">
                            <h3 class="h3type">帳號管理</h3>
                        </div>
                        <div class="buildings flex bottom_border">
                            <a href="#" class="building_button">A棟</a>
                            <a href="#" class="building_button">B棟</a>
                            <a href="#" class="building_button">C棟</a>
                            <a href="#" class="building_button">D棟</a>

                            <select id="building_select" class="building_select">
                                <option value="A棟">A棟</option>
                                <option value="B棟">B棟</option>
                                <option value="C棟">C棟</option>
                                <option value="D棟">D棟</option>
                            </select>
                        </div>
                        <div class="permissionControl">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>戶號</th>
                                    <th>管理權限開啟</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" class="check" id="" /></td>
                                    <td>A01-01</td>
                                    <td class="relative">
                                        <div class="center">
                                            <input type="checkbox" name="permissionControl" class="switch" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" class="check" id="" /></td>
                                    <td>A01-02</td>
                                    <td class="relative">
                                        <div class="center">
                                            <input type="checkbox" name="permissionControl" class="switch" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" class="check" id="" /></td>
                                    <td>A01-03</td>
                                    <td class="relative">
                                        <div class="center">
                                            <input type="checkbox" name="permissionControl" class="switch" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <br />
                    </div>
        `;
    }
}
