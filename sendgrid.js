var xlsx = require('node-xlsx');
var credential = require('./credential.js');
var sendgrid  = require('sendgrid')(credential.account, credential.password);//id and pw

var obj = xlsx.parse('file.xlsx'); //xlsx path

for (var i=0 ; i<obj[0].data.length ; i++){

	var eachMail=obj[0].data[i][0];
	if (eachMail.indexOf("@") > -1){
		console.log(eachMail);
		sendMail(eachMail);
	}
}

function sendMail(mail){
	sendgrid.send({
		to:       mail,
		from:     'noreply@example.com',
		subject:  'made by maodavid1989@hotmail.com',
	    text:     ' automatic deliver email program, send from maodavid ! '
	},function(err, json) {
	    if (err) { 
		    return console.error(err); 
	    }
		console.log('send email to '+ mail + ' success.');
	});
}

function sendTime(){
	var date = new Date();
	var yyyy = date.getFullYear().toString();
	var mm = (date.getMonth()+1).toString();
	var dd  = date.getDate().toString();
	var datetext = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	
	return yyyy + " "+ mm + dd + " " + datetext;
}

console.log("send time : " + sendTime());

