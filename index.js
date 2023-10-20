// 讀取並插入header.html
fetch("/page/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    });

// 讀取並插入navigation.html
fetch("/page/navigation.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("navigation").innerHTML = data;
    });

// 讀取並插入footer.html
fetch("/page/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    });

// 讀取並插入home.html
fetch("/page/home.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("content").innerHTML = data;
    });

// 路由將特定的路徑對應到不同的內容頁面
const routes = {
    "/": "/page/login.html",
    "/page/announcements.html": "announcements.html", // 連結路徑匹配
};

// 路由觸發事件
const onRouteChange = () => {
    const path = window.location.pathname;
    const contentDiv = document.querySelector(".content");

    // 根據當前路徑載入並顯示相應的內容
    if (routes[path]) {
        fetch(routes[path])
            .then((response) => response.text())
            .then((data) => {
                contentDiv.innerHTML = data;
            })
            .catch((error) => console.error("Error fetching", routes[path], ":", error));
    } else {
        contentDiv.innerHTML = "Page not found";
    }
};

// 初始化頁面並重新讀取固定的元件
window.onload = () => {
    fetch("/page/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header").innerHTML = data;
        })
        .catch((error) => console.error("Error fetching header.html:", error));

    fetch("/page/navigation.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navigation").innerHTML = data;
        })
        .catch((error) => console.error("Error fetching navigation.html:", error));

    fetch("/page/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch((error) => console.error("Error fetching footer.html:", error));

    onRouteChange();
};

// 監聽路由
window.onpopstate = onRouteChange;

// 連結點擊事件
const navigate = (event, path) => {
    event.preventDefault(); // 防止點擊連結時頁面重新載入
    history.pushState(null, "", path); // 將新的路徑推入瀏覽器歷史堆疊中
    onRouteChange(); // 觸發路由變化事件
};
