var xlsx = require('node-xlsx');
var obj = xlsx.parse('file.xlsx'); //xlsx path

	function today(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		
		if (month.toString().length != 2){
			month="0"+month;
		}
		if (day.toString().length != 2){
			day="0"+day;
		}
		
		var day = year.toString() + 
					month.toString() +  
					  day.toString();

		return day;
	}

	//[0] Name
	//[1] Email
	//[3] Project
	//[4] Date 20150316

	console.log(today());
	console.log('excel 內容 : '+ obj[0].data[2][4]);	
	
	var email=new Array(count);
	var email_text=new Array(count);
	
	var max=5;
	var count=0;
	for(var i=2; i<max ; i++){
		var containDate = obj[0].data[i].length>=5;
		
		
		if (containDate && today().toString() === obj[0].data[i][4].toString()){
			console.log('日期符合 : ' +obj[0].data[i][0]);
			email[count]=obj[0].data[i][1]; //email 陣列
			count+=1;
		}else{
			console.log('日期不符合 : ' +obj[0].data[i][0]);
		}
		
	}


	module.exports = email; //email 回傳

