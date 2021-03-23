// THİS 
//obj.func() ==> this obj
//this ==> global object ==> window(global) 

//console.log(this);
//console.log(this.location);
//console.log(this.location.href);
//console.log(window.location.href);

//console.log( this === window);
/* const name = 'Arin';

console.log(name);//arin
console.log(this.name);// sevda dönderdi çünkü func içinde ki this name globali hedef alıyor //window nesnesi içerisinde yer alıyor */

//func expression
/* const func2 = function(){
	this.age=20;
	 console.log(this);
	console.log(this.location);
	console.log(this.location.href);
	console.log(window.location.href); 
	console.log(this.name);	

}  */

//func declaration 
/* function func1() {
	this.name="Sevda";
	 console.log(this);
	console.log(this.location);
	console.log(this.location.href);
	console.log(window.location.href); 
	console.log(this.age);//func2 expres. için undefined döndü HOİSTED kavramı ortaya  çıkıyor
} */

// Func dec. hoisted yapabiliyor
//func2();// bunu da yukarı alıyoruz
//func1();


/* console.log(name);
console.log(age);
console.log(this.name);
console.log(this.age); */

/* 
function Person (name , surname, age){

	this.name= name;
	this.age= age;
	this.surname= surname;
	this.fullName = function(){
     return this.name+ " "+ this.surname
	}

}
const toprak =  new Person('Toprak','Baran',10);
console.log(toprak);
console.log(toprak.fullName()); */
/* class Person  {
   constructor (name , surname, age){
	this.name= name;
	this.age= age;
	this.surname= surname;
   }
  fullName = function(){//this yazmaya gerek yoktur
	    return this.name+ " "+ this.surname
   }
}
const toprak =  new Person('Toprak','Baran',10);
console.log(toprak);
console.log(toprak.fullName()); */

/* const arin ={ 
	name: 'arin',
	surname: 'cekic',
	age: 5,
	fullName: function(){ 
	    return this.name+ " "+ this.surname
   }
}
console.log(arin); */