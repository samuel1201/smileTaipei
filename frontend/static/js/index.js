import homeView from "./views/homeView.js";
import OrganizationView from "./views/OrganizationView.js";
import loginView from "./views/loginView.js";
import backstageView from "./views/backstageView.js";
import userPageView from "./views/userPageView.js";
import announcementsView from "./views/announcementsView.js";
import communicateView from "./views/communicateView.js";

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
      path: "/communicate",
      view: communicateView,
    },
    // {
    //     path: "/repair",
    //     view: () => console.log("view /repair"),
    // },
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
      navigateTo(e.target.href);
    }
  });
  router();
});
