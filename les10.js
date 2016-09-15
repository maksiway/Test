f();
f(1);
f(1, 2); 

 /* DATE */
 var now = new Date();
 console.log(now);
 
 var Jan02_1970 = new Date(3600*24*1000);
 console.log(Jan02_1970);
 console.log(Jan02_1970.getFullYear());
 console.log(Jan02_1970.getMonth());
 console.log(Jan02_1970.getDate());
 console.log(Jan02_1970.getHours(), Jan02_1970.getMinutes(), Jan02_1970.getSeconds());
 console.log(Jan02_1970.toString());
 
 var anyDate = new Date(2012, 01, 31, 6, 12); //автоматическая корректировка
 console.log(anyDate);
 console.log(new Date());
 console.log(getWeekDay(anyDate));
 
 console.log( new Date().getTimezoneOffset() ); //разница в минутах между местным и UTC-временем
 
 console.log(getDateAgo(new Date(), 13));
 console.log(getLastDayOfMonth(2013, 01));
 console.log(getMlsecAgoFromToday());
 console.log(formateDate(Jan02_1970));
 
 /*Измерение времени*/
 var start = new Date;
 for (var i = 0; i < 100000; i++) {
   var doSomething = i*i*i;
 }
 var end = new Date;
 console.log("Цикл занял: " + (end - start) + "ms"); // преобразуется к числу
 
 console.log("File exsit in version control!");
 
 function f(x, y) {
 console.log(arguments.length); 
 console.log(arguments.length ? 1 : 0);
  
 if (arguments[0] === undefined) 
   console.log('NO Arguments');
 else console.log(x);
 
 if (arguments[0] == x)
   console.log(arguments[0]);
 else console.log('false');
 
 if (arguments[1] != undefined)
   arguments[1] = 3;
 console.log(y);
}

 function getWeekDay(date){
 //  var dayWeek = "";
   var days = ['Sun','Mon','Tue','Wen','The','Fri','Sat'];
   
  /* switch(date.getDay()){
     case 1:  dayWeek = "Mon"; break;
     case 2:  dayWeek = "Tue"; break;
     case 3:  dayWeek = "Wen"; break;
     case 4:  dayWeek = "The"; break;
     case 5:  dayWeek = "Fri"; break;
     case 6:  dayWeek = "Sat"; break;
     case 7:  dayWeek = "Sun"; break;
     
  }*/
 // return dayWeek;
 return days[date.getDay()];
 }
 
 function getDateAgo(date, days){
 /* var nowMs = Date.parse(date);
  var daysInMs = days*24*60*60*1000;
  return new Date(nowMs - daysInMs);*/
  var copyDate = new Date(date);
  copyDate.setDate(date.getDate() - days);
  return copyDate;
 }
 
 function getLastDayOfMonth(year, month){
  var resultDate = new Date(year, month+1, 0); // в силу автоматической корректировки создать нужный месяц с последней датой 
  return resultDate.getDate();
 }
 
 function getMlsecAgoFromToday(){
  var now = new Date();
  var nowNight = new Date().setHours(0, 0, 0, 0);
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  //console.log(tomorrow);
  return Math.floor((now - nowNight)/1000);
 }
 
 
 function formateDate(date){
   var year = String(date.getFullYear()).slice(-2);
   var month = date.getMonth();
   var day = date.getDate();
  // console.log(month);
   var temp = ['01','02','03','04','05','06','07','08','09','10','11'];
   return temp[month] + "." + temp[month] + "." + year;
 }
