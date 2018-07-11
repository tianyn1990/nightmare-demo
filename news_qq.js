var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true //显示electron窗口
        // waitTimeout : 5000
});
nightmare
    .goto('http://roll.news.qq.com/')
    .wait(function() {
        return !document.querySelector(".loading");
    })
    .wait(function() {
        window._$qqNews = [];
        return true;
    })
    .wait(function() {

        //如果显示正在加载中……
        if (document.querySelector(".loading")) return false;

        var newslist = document.querySelectorAll("#artContainer li a");
        for (var i = 0; i < newslist.length; i++) {
            _$qqNews.push({
                title: newslist[i].childNodes[0].data,
                href: newslist[i].href
            });
        }
		//下一页button
        var next_page_button = document.querySelector("#pageArea .f12:last-child");
        if (next_page_button) {
            next_page_button.click();
            return false;
        }
        return true;

    })
    .evaluate(function() {
        return _$qqNews;
    })
    .end()
    .then(function(res) {
        console.log(res[res.length-1], res.length);
        console.log(res);
    })
    .catch(function(error) {
        console.error('failed:', error);
    });