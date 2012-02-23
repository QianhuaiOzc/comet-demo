/*
 * 使用long polling来进行comet
 * 这里使用了静态资源与动态服务器分离，因此要使用jsonp做js的跨域请求
 */
function poll() {
    var $msg = $('#msg');
    var error_sleep_time = 500;
    var $callee = arguments.callee;
    $.ajax({
        url: 'http://localhost:1387/',
        type: 'GET',
        dataType: 'jsonp', 
        jsonp: "callback",
        success: function(data) {
            $msg.append('<p>' + data.result + '</p>');
            error_sleep_time = 500;
            poll();
        },
        error: function(data) {
            error_sleep_time *= 2;
            setTimeout(poll, error_sleep_time);
        }
    });
}
poll();
