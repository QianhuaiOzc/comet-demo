var http = require('http');
var url = require('url');
var qs = require('querystring');
httpServer = http.createServer(function(request, response) {
    var callback = qs.parse(url.parse(request.url).query).callback;
    setTimeout(function() {
        var text = callback + "({'result':'Server said " + parseInt(new Date().getTime(), 10) + "'});";
        response.write(text);
        response.end();
    }, 1000);
    response.writeHead(200, {"Content-Type": "text/javascript"});
}).listen(1387);
