const path = require('path');
var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true,
    pollInterval: 50
});

nightmare
    .goto('http://news.163.com/domestic/')
    .inject('js', 'jquery-2.1.1.min.js')
    .wait(function() {
        if (document.querySelector('.post_addmore').style["visibility"] == "visible") {
            document.querySelector('.load_more_btn').click();
            return false;
		}
        if (document.querySelector(".post_adding").style["display"] == "block") return false;
        if (document.querySelector(".load_more_tip").style["display"] == "block") return true;
    })
    .evaluate(function() {
        var newsList = [];
        $('.data_row').each(function() {
            var $me = $(this);
            var title = $me.find('.news_title').find('h3').find('a').text();
            var url = $me.find('.news_title').find('h3').find('a').attr('href');
            var item = {
                title: title,
                url: url
            }
            newsList.push(item);
        })
        return newsList
    })
    .end()
    .then(function(result) {
        console.log(result);
        console.log(result.length);
    }).catch(function(err) {
        console.log(err);
    })