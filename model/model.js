var MODEL = (function () {
    var _getPageContent = function (pageID) {
        let pageInfo = `../pages/${pageID}/${pageID}.html`;
        $.get(pageInfo, function (data) {
            $("#app").html(data);
        });
    };
    return {
        getPageContent: _getPageContent,
    };
})();