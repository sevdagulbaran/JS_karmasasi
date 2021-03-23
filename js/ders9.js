//ARROW FUNCTION
//  Tricks: Function Expressionda fonksiyonu tanımlamamadan çağıramayız (HOİSTED)
// Dec.de çağırabiliriz... 


//Func Dec.
/* function square( num){
	return (num*num);
}

console.log(square(5));

 
//Fun Exp

const square2 = function(num){
	return (num*num);
}
console.log(square2(6));


//Arrow Fun. 
const square3 = (num) => {return (num*num);}

console.log(square3(4));

const square4 = num =>  (num*num);

console.log(square4(7));
 */

//Arrow Func. - This 
/* 
window.name = 'arin';

function tellName(){
	console.log(this);
	console.log(this.name);
}

tellName();

const human ={
	name:'Elis',
	tellName: function(){
		console.log(this);
		console.log(this.name);
	}
}
human.tellName(); */

/* window.name = 'arin';

const tellName = () => {
	console.log(this);
	console.log(this.name);
}

tellName();


const human ={
	name:'Elis',
	tellName:()  => {
		console.log(this);
		console.log(this.name);//Arin gösteriyor
	}
}
human.tellName(); */

//Normal fonksiyonlarda this ilgili olduğu bloga gösterir
//Arrow func kendine ait dizini olmadığı için globale göre alıyor 
/* 
window.name = 'Arin';
const human ={
	name:'Elis',
	tellName: function(){
		console.log(this);
		console.log(this.name);//Elis

		setTimeout(function () {
		 console.log(this);
		 console.log(this.name);//Arin yeni bambaşka fonk. olduğu için thisi window alıyor			
		},2000)
	}
}
human.tellName(); */

/* 
window.name = 'Arin';
const human ={
	name:'Elis',
	tellName: () => {
		console.log(this);
		console.log(this.name);//Arin

		setTimeout( () => {
		 console.log(this);
		 console.log(this.name);//Arin kendine ait this yok her iki arrow için			
		},2000)
	}
}
human.tellName(); */
//Arrow func. constructor func kullanılmaz
//Bir nesnenin öethodu sıkıntılı olabilir

/* window.year=2022;

const myObj = {
	year:2021,
	showYear: function(){
		console.log(this.year,this);
	},
	showYear2: () => console.log(this.year,this)//undefined --- dışardan bir yatih tanımlarsak onu bağlar. --2022
}

myObj.showYear();
myObj.showYear2(); */

//CALL --- Bir fonksiyonu veya methodu ilgili olduğu nesneden farklı bir nesne de kullanmamızı sağlar

/* window.name= 'Gurcan';
window.grade= 100;
const student={
	examResult:  () =>{// function kaldırıp arrow yaptığımızda dışardan gurcan 100 outputu alıyoruz
		return this.name + " "+ this.grade;
	}
}
const student1={
	name :'Arin',
	grade:60
}
const student2={
	name : 'Elis',
	grade:70
}
 
console.log(student.examResult.call(student1));// Arin 60
console.log(student.examResult.call(student2));// Elis 70 */