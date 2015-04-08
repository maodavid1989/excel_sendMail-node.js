var credential = require('./credential.js'); //id and pw
var sendgrid  = require('sendgrid')(credential.account, credential.password);
var fs = require('fs'); 	//filestream
var attachment ='./attachment/context.xlsx'; //寄送檔案位置

exports.sendMail=function sendMail(mailaddress){
	fs.readFile(attachment, function read(err, data) {
		sendgrid.send({
			to:       mailaddress,
			from:     'noreply@example.com',
			subject:  'made by maodavid1989@hotmail.com',
			text:     ' automatic deliver email program, send from maodavid ! ',
			files:    [{filename: attachment, content: data}]
		},function(err, json) {
			if (err) { 
				return console.error(err); 
			}
			console.log('send email to '+ mailaddress + ' success.');
		});
	});
}

exports.sendTime=function sendTime(){
	var date = new Date();
	var yyyy = date.getFullYear().toString();
	var mm = (date.getMonth()+1).toString();
	var dd  = date.getDate().toString();
	var datetext = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	
	return yyyy + " "+ mm + dd + " " + datetext;
}


