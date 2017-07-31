module.exports = function getHTML (options, callback) {
	var https = require('https'); 

  var hostPath = {
    host: options.host,
    path: options.path
  };
  https.get(hostPath, function(response) {
  	response.setEncoding('utf8');
  	response.on('data', function(data){
      var dataAppend = "";
  		dataAppend += data;
      callback(dataAppend);
  	});
  });
};

function printHTML (html) {
  console.log(html);
}
//module.exports = getHTML
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };

// getHTML(requestOptions, printHTML);