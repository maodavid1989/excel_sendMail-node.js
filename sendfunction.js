var credential = require('./credential.js'); //id and pw
var sendgrid  = require('sendgrid')(credential.account, credential.password);
var fs = require('fs'); 	//filestream
var attachment ='./attachment/report.txt'; //檔案位置

exports.sendMail=function sendMail(mail){
	fs.readFile(attachment, function read(err, data) {
		sendgrid.send({
			to:       mail,
			from:     'noreply@example.com',
			subject:  'made by maodavid1989@hotmail.com',
			text:     ' automatic deliver email program, send from maodavid ! ',
			files:    [{filename: attachment, content: data}]
		},function(err, json) {
			if (err) { 
				return console.error(err); 
			}
			console.log('send email to '+ mail + ' success.');
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


