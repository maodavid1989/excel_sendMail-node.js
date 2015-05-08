var nodemailer = require('nodemailer');  

var credential=require('./credential.js');
var excelParser = require('./excelParser.js'); 

	var transporter = nodemailer.createTransport({  
		service: 'Hotmail',  
		auth: {  
			user: credential.account,  
			pass: credential.password 
		}  
	});  
  
    console.log(excelParser);
	emailText='';
	for( var len=0 ; len <= excelParser.length ; len++ ){
		emailText+=excelParser[len]+',';
	}

		emailText=emailText.substring(0,emailText.length-1);
		console.log(emailText);
		
	var options = {  
		from: '"maodavid" <test@hotmail.com>',  
		to: '\''+emailText+'\'',   
		subject: 'node.js測試信件',
		html: 'Testing success',   
	};  
	  
	transporter.sendMail(options, function(error, info){  
		if(error){  
			console.log(error);  
		}else{  
			console.log('訊息發送: ' + info.response);  
		}  
	}); 