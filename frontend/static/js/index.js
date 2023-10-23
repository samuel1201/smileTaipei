import homeView from "./views/homeView.js";
import OrganizationView from "./views/OrganizationView.js";
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {
            path: "/",
            view: () => console.log("view /LOGIN"),
        },
        {
            path: "/home",
            view: homeView,
        },
        {
            path: "/announcements",
            view: () => console.log("announcements"),
        },
        // {
        //     path: "/communicate",
        //     view: () => console.log("view /communicate"),
        // },
        // {
        //     path: "/repair",
        //     view: () => console.log("view /repair"),
        // },
        {
            path: "/group",
            view: OrganizationView,
        },
        // {
        //     path: "/userPage",
        //     view: () => console.log("view /userPage"),
        // },
        // {
        //     path: "/vote",
        //     view: () => console.log("view /vote"),
        // },
        // {
        //     path: "/backStage",
        //     view: () => console.log("view /backStage"),
        // },
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
            navigateTo(e.target.href);
        }
    });
    router();
});
