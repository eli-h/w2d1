var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
	var reversed = "";
	for (var i = html.length - 1; i >= 0; i--){
		reversed += html[i];
	}
	console.log(reversed);
}

getHTML(requestOptions, printReverse);