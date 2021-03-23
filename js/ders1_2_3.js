
/*
//ders3
 //OBJECT
// içerisine yazdığımız her şey property fakat fonksiyona ise method deniyor
//This 
const person ={
	name:'Sevda',
	surname:'Baran',
	age:20,

	langagues:['Turkish','English','Spanish'],
	fullName: function(){
		return this.name + " "+ this.surname	},
	adress:{
		city:'Balıkesir',
		discrit:'Hekimhan'
	}
}

console.log(person.age);
console.log(person.fullName());
console.log(person.langagues[2]);
console.log(person.adress.city);

//Neden Objecete ihtiyaç duyarız?
//Birbiri ile ilişkili verilerin bir arada olsun istediğimizden dolayı */



/* 
//Object literal
// Bir nesneyi oluştururken aynı zamanda o nensye ait değerleri de veriyoruz

const person ={
	name:'Sevda',
	surname:'Baran',
	age:20,

	langagues:['Turkish','English','Spanish'],
	fullName: function(){
		return this.name + " "+ this.surname;	
	}
}
// dat notaion
console.log(person.age);
// add property
person.job = 'bilmüh';
console.log(person);
console.log(person.job);

//bracket notation
console.log(person["name"]);
console.log(person["fullName"]());
 */
/* 
//Objcete attribute olarak object ekleme
const person ={
	name:'Sevda',
	surname:'Baran',
	age:20,

	langagues:['Turkish','English','Spanish'],
	fullName: function(){
		return this.name + " "+ this.surname;	
	}
}
person.adress = {
}

person.adress.city ='Malatya';
console.log(person); */

// CONSTRUCTOR KULLANARAK JS NESNESİ OLUŞTURMAK
// Aynı türden birden fazla nesne oluşturuken karmaşayı önlemek için şablon oluşturuyoruz
// Constructorlar genelde büyük harfle başlar
// uuzun yol
/* function Person(name, surname, age){
	const obj={};
	obj.name= name;
	obj.surname= surname;
	obj.age= age;
    obj.fullName= function(){
	 return this.name + " "+ this.surname;
}
return obj;
}; */

//içerisne obj oluşturmaya gerek yok , obj ye döneceğimizi bildiği için returna da gerek yok
// return silince hata alıyoruz bu yüzden return kulllnaıyoz belli bi nense ismi kullanmak yerine 
/* function Person(name, surname, age){

	this.name= name;
	this.surname= surname;
	this.age= age;
    this.fullName= function(){
	 return this.name + " "+ this.surname;
	}
};


const person1 = new Person('Sevda', 'Baran',20);
console.log(person1); */

/* //Object Constructor

const person1 = new Object();
person1.name= "Sevda";
person1.surname= "Baran";
person1.age= 20;
person1.fullName= function(){
	console.log(this);
	return this.name + " "+ this.surname;
   }

console.log(person1);
console.log(person1.age);
console.log(person1.fullName());//mutlak parantez kullan
 */

/* 
// Object.create() ile nense oluşturma : yeni bir nesne kullanırken eski nesneyi kullanacağız
const person ={
	name:'Sevda',
	surname:'Baran',
	age:20,

	langagues:['Turkish','English','Spanish'],
	fullName: function(){
		return this.name + " "+ this.surname;	
	}
}
console.log(person);
const arin = Object.create(person);
arin.name= "arin";
arin.surname= "brn";
arin.age=5;
console.log(arin);
console.log(arin.fullName());// atammama rağmen oluşuyor inheritance kalıtım oluyo
 */






/*
//ders2
// Function Declaration
 function square(num) {// parametre
		return num * num;
	}

	console.log(square);
	console.log(square(5));//argüman
 */

 // Function Expression
// func name is optinal
 /*  const square = function (num) {
		return num * num;
	}


	console.log(square);
	console.log(square(5));
 */

 
// first class
/*
const addFive= function( num , func){
	 console.log(num + func());
 }
 addFive(10 , function(){ return 5;});
 */
/* const myFunc = function (num){
	return function doubleFun(){
		console.log(num * 2);
	}
}
myFunc(8)(); 
 */
/* //IIFE
//Immediately-invoked Function Expressions
// Oluşturduğumuz anda çalıştırmak için kullanırız 

// bu şekilde console log şeklinde çağırınca undefined hatası alıyoruz
const sum = function(){
	console.log(5 + 10);
}();
 // sıkıntısz ve genel kullanışı bu
( function(){
	console.log(5 + 10);
})();

 */

