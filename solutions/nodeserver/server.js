// BEGIN CONFIG
c2url = "http://cloudium-kensaku.khalin.com"; //URL to your C2 machine (remember to NOT include the *arguments* [username, type])
c2user = "afm";
c2pwd = "natoar23ae";
c2plan = "paas";
c2full = c2url + " " + c2user + " " + c2plan;
// Welcome message
console.log("Welcome to NodeServer v0.1a-c2.");

// Khalin C2 block
console.log("This NodeServer is compiled to use the Khalin Cloudium2 server with the following data:");
console.log("URL: 		" + c2url);
console.log("User: 		" + c2user);
console.log("Password: 	" + c2pwd);
console.log("Plan: 		" + c2plan);
console.log("Full URL 	" + c2full)
console.log("Setting server up...");
var http = require('http');

var server = http.createServer(function(req,res) {
	console.log("NodeServer Request				[200 ]");
    res.writeHead(200, {"Content-Type": "text/html"});
    startHTML(res, "It works!", "Verdana");
	res.write("<h1>It works!</h1>\n");
	res.write("<p>Hi!</p>\n");
	res.write("<p>This text is being sent from a NodeJS server.</p>\n");
	res.write("<p>We're using the NodeServer Framework. It's available to enterprise users who");
	res.write("want to easily have an unique server for their bussiness. It allows you to easily");
	res.write("write a server with Node.js; using custom functions like \"startHTML\", so you won't");
	res.write("have to rewrite code never!</p>\n");
	res.write("<div style='font-size:small;text-align:right;'>@NodeServer v0.1a <br />\n");
	
	res.write("Hosted by Kensaku.</div>\n");
	endHTML(res);
});
server.listen(8080);
console.log("NodeServer   Start				[OK  ]");
console.log("NodeServer  Listen 				[8080]");
console.log("NodeServer   Visit       " + c2url + ":8080");

// These functions write the main HTML structure.

function startHTML (o, title, font) {
	if (!font) {
		font = "sans";
	}
	o.write("<html>\n");
	o.write("<head>\n");
	o.write("<title>" + title + "</title>\n");
	o.write("</head>\n");
	o.write("<body style='font-family: " + font + ";'>");
}
function endHTML (o) {
	o.end("</body>\n</html>");
}

