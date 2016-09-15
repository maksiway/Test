var obj = {
className: "open menu"
};
console.log(obj);
addClass(obj, "open new class black open");
console.log(obj);

removeClass(obj, "open");
console.log(obj);

console.log(sortClass(obj));

var str = "get-image-info";
console.log(str);
console.log(camelize(str));

var arr = [2, -5, 45, 12, 0, 3, -8, 17, 4, 25, 28, -3, -8];
/*первый способ*/
arr.sort(compareNumeric); /*передаем функцию-алгоритм сортировки, т.к. сама sort - делает это по правлу сравнения строк*/
console.log(arr);
console.log(arr.reverse());
/**/
console.log(arr.sort(compareReversed)); /*второй способ*/

console.log(arr.sort(compareRandom));

var vasya = { name: "Василий", age: 23 };
var masha = { name: "Мария", age: 18 };
var vova = { name: "Владимир", age: 6 };
var people = [vasya, masha, vova];

people.sort(compareObject);
for(var i = 0; i < people.length; i++)
  console.log(people[i].name, people[i].age);
/*односвязный список*/
var list = {
  value: 1, 
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
	value: 4,
	next: null
	}
      }
    }
  };

printList(list);
printReverseList(list);

/*поиск уникальных значений*/
var strings = ["тишина", "харе", "тишина", "бля", "бля", "вот", "жара", "харе", "жара", "жара", "вот", "конец"];

console.log( unique(strings) );

var stringsLengths = strings.map(function(str){
	return str.length;
});

console.log(stringsLengths);
var itemSumLengths = [];
var partSumLengths = stringsLengths.reduce(function(sum, current, ind){
	return itemSumLengths[ind] = sum + current;
});

console.log(partSumLengths);
console.log(itemSumLengths);

function unique(arr){
  var obj = {};
  for (var i = 0; i < arr.length; i++){
    var str = arr[i]; /*Запоминаем значение элемента массива*/
    obj[str] = true; /*сохраняем как свойство объекта - оно уникально*/
  }
  return Object.keys(obj); /*перебрать объект в виде массива*/
}

function printList(list) {
  var tmp = list /*в противном случаем теряем начало списка*/
  while(tmp){
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printReverseList(list){
  if (list.next){
    printReverseList(list.next);
  }
  console.log(list.value);
}

function compareObject(personA, personB){
  return   personA.age - personB.age;
}

function sortClass(obj){
  var classes = obj.className ? obj.className.split(' ').sort() : []; 
    return loneObj = classes.join(' ');
}

function addClass(obj, cls){
  var classes = obj.className ? obj.className.split(' ') : [];
  for (var i=0; i < classes.length; i++) {
     if(classes[i] == cls)
       return;   
  }
  classes.push(cls);
  obj.className = classes.join(' ');
}

function removeClass(obj, cls){
  var classes = obj.className ? obj.className.split(' ') : [];
  var pos = [];
  for (var i=0, j = 0; i < classes.length; i++) {
     if(classes[i] == cls){ 
	classes.splice(i--, 1);
	/*pos[j] = i; console.log(pos[j]); j++; */
     }
  }
 /* for (var j=0; j < pos.length; j++){
    delete classes[pos[j]]; удаляет, но оставляет позицию в массиве. которая потом join'ом превращается в пробел
   classes.splice(pos[j]-j, 1);
  }*/
  
  obj.className = classes.join(' ');
  return;
}

function camelize(str){
  var tmp = str ? str.split('-') : "";
  for(var i=0; i < tmp.length; i++) { 
    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1);
}
 if(tmp) return tmp.join('');
 return -1;
}

function compareNumeric(a, b){
  if (a > b) return 1;
  if (a < b) return -1;
}

function compareReversed(a, b){
  return b - a;
}

function compareRandom(a, b){
  return a + Math.floor(Math.random() * (b - a + 1));
}
