function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    MODEL.getPageContent(pageID);

    if (pageID === "") {
        navToPage("home");
    } else {
        navToPage(pageID);
    }

}

function navToPage(pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, function (data) {
        console.log(data);
        $("#app").html(data);
    });
}

function initListener() {
    $(window).on("hashchange", route);

};

$(document).ready(function () {
    initListener();
    navToPage("home")
});
