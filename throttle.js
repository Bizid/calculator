// Code goes here

//testThrottle(createThrottle); //should put to console "123" and "4"
//testThrottle(checkChange);
testThrottle(AddChanges);
//testThrottle(myFunction);

function createThrottle(arr) {
  var currentValue = arr;
    var checkChanges = function() {
      currentValue += arr;
      
        if (arr != currentValue) {
            currentValue += arr;
            /*$object.trigger("change");*/
            console.log("new");
        }
    }
    setInterval(checkChanges, 1000);
    
}

function sec() {
  console.log("прошла секунда");
}



var t;  // объявляем глобальную переменную, которая будет доступна
var currentStack;
var tempStack;

function ch2(currentStack){  // некая функция, которая должна выполнятся по таймауту
  //checkChanges(currentStack, tempStack);
   console.log("ch2");
   console.log(currentStack);

}

function checkChanges(currentStackA, tempStackA){
  if(tempStackA === undefined ) {
    tempStackA = currentStackA;
  }
  
  console.log(currentStackA);
  console.log(tempStackA);
  if(currentStackA != tempStackA) {
   // arr.push(tempStackA);
   console.log("tempStack");
     tempStack = ""+ currentStackA + tempStackA;
    //console.log("different");
    console.log(tempStack);
    
    //console.log(tempStack);

  }
  //console.log(arr);
}

function sh1(){  // запускаем выполнение функции с интервалом в 3 секунды

   t = setInterval(AddChanges,1000);

 }
function sh2(){  // останов, отчистка переменной
   clearInterval(t);
 }



/*function myFunction() {
    myVar = setInterval(alertFunc, 1000);
    console.log(myVar);
    console.log("He!");
    clearInterval(myVar);
}*/
/*function clearFunction (){
   clearInterval(myVar);
}*/

/*function alertFunc() {
   // console.log("Hello!");
}*/
//checkChange($('#sector_e'));
var res;
var cur;
function AddChanges(tmp){
  if(cur === undefined ) {
    cur = tmp;
  }
  
  /*console.log(cur);
  console.log(tmp);*/
  if(cur != tmp) {
   // arr.push(tempStackA);
   //console.log("tempStack");
   if(res === undefined ) {
    res = ""+ cur + tmp;
    } else {
      res = "" + res + tmp;
    }
    console.log(res);
  }
 //console.log(arr);
 var myVar = setInterval(alertFunc, 1000);
}

function testThrottle(throttle) {
  setTimeout(function() {
    throttle(1);
  }, 0);
  
  setTimeout(function() {
    throttle(2);
  }, 200); 
  
  setTimeout(function() {
    throttle(3);
  }, 1100);
  
  setTimeout(function() {
    throttle(4);
  }, 2300);
}
