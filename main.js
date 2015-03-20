var xlsx = require('node-xlsx');
var send = require('./sendfunction.js');

var obj = xlsx.parse('file.xlsx'); //xlsx path

for (var i=0 ; i<obj[0].data.length ; i++){

	var eachMail=obj[0].data[i][0];
	if (eachMail.indexOf("@") > -1){
		console.log(eachMail);
		send.sendMail(eachMail);
	}
}
console.log("send time : " + send.sendTime());