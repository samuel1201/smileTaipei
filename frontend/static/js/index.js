import homeView from "./views/homeView.js";
import OrganizationView from "./views/OrganizationView.js";
import loginView from "./views/loginView.js";
import backstageView from "./views/backstageView.js";
import userPageView from "./views/userPageView.js";
import announcementsView from "./views/announcementsView.js";
import communicateView from "./views/communicateView.js";
import repairView from "./views/repairView.js";
import announceAddView from "./views/announceAddView.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {
            path: "/login",
            view: loginView,
        },
        {
            path: "/home",
            view: homeView,
        },
        {
            path: "/announcements",
            view: announcementsView,
        },
        {
            path: "/announceAdd",
            view: announceAddView,
        },
        {
            path: "/communicate",
            view: communicateView,
        },
        {
            path: "/repair",
            view: repairView,
        },
        {
            path: "/group",
            view: OrganizationView,
        },
        {
            path: "/userPage",
            view: userPageView,
        },
        // {
        //     path: "/vote",
        //     view: () => console.log("view /vote"),
        // },
        {
            path: "/backStage",
            view: backstageView,
        },
    ];

    //TEST EACH Route for potential match
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    console.log(match);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    const view = new match.route.view();

    document.querySelector("#content").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            // console.log(e.target.href.toString().split("/")[3]);
            // document.getElementById(`${e.target.href.toString().split("/")[3]}`).style.color = "#E51D88";
            navigateTo(e.target.href);
        }
    });

    router();
});

document.body.addEventListener("click", async (e) => {
    //當滑鼠點擊的是 id為"addAnnounce"的新增公告按鈕
    if (e.target.matches("[addAnnounce]")) {
        navigateTo("http://localhost:3000/announceAdd"); //spa頁面轉移至新增公告頁面
    }
    if (e.target.id == "newAnnounce") {
        //如果按下的是id為 newAnnounce的送出按鈕
        let title = document.querySelector("#announceTitle").value; //取title值
        let content = document.querySelector("#announceContent").value; //取content值

        let data = JSON.stringify({
            title: title, //req放入title
            content: content, //req放入content
            owner: "65267ff2f32232bfe0273848", //目前還沒有登入功能 不會有這個 先用一個假的
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://127.0.0.1:5050/announcement", //route for 新增公告
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        await axios
            .request(config) //丟資料
            .then((response) => {
                console.log(JSON.stringify(response.data)); //回來的response
            })
            .catch((error) => {
                console.log(error);
            });

        await navigateTo("http://localhost:3000/announcements");
    }
});
