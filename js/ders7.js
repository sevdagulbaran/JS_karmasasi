/*  class Person{
constructor (name, surname, age){

	this.name = name;
	this.surname = surname;
	this.age = age;
	this.friends = ['Ela','Rüzgar'];

}
fullName () {
	return this.name + " "+ this.surname;
};
static showName = "Person";
static showMethod(){
	console.log("Static Method Çalışıyor..");
}
} */
//console.log(typeof Person);
// arin person'un instancesi
//const arin = new Person ('Arin' , 'Cekic' , 5);//instanşeyd i(İng bulamdık)
//const elis = new Person ('Elis' , 'Cekic' , 7);
/* console.log(arin);
console.log(arin instanceof Person);//true değeri döndü
console.log(arin.fullName());
console.log(elis.fullName());
console.log(Person.fullName()); */

//console.log(arin.showName);//Undefined çünkü arin için öyle bir özellik tanımlı değil showname static
//console.log(arin.showMethod());//hata veriyor
//Static kavramı class tan okunur
//console.log(Person.showMethod());
//console.log(Person.showName);

/* class Person{
	constructor (name, surname, age){
	
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	fullName () {
		return this.name + " "+ this.surname;
	};

} 
//inheritance
class Engineer extends Person{//Subclass
	constructor(name, surname,age,job){
		super(name, surname,age);//javada parametre almaya gerek yok js de var
		this.job= job;
	}
	getMoney(){
		console.log('para kazan');
	}
};
const sevda =new Engineer('Sevda' ,' Baran',20,'Engineer');
const elis = new Person ('Elis' , 'Cekic' , 7);

console.log(sevda);
console.log(elis);
console.log(sevda.getMoney()); */
//console.log(elis.getMoney());// hata alınıyor elis engineer classın bi üyesi değil

//OBJE + (name, surname) => Person
//Person => Engineer
//Engineer --> Subclass(Child) 
//Person --> Superclass(Parent)
/* 
class ExtendedArr extends Array{
	shuffle(){
		this.sort(() => Math.random()- 0.5);

	}
}
let myArr = new ExtendedArr(1,2,3,4,5);

//console.log(myArr instanceof ExtendedArr);//true
//console.log(myArr instanceof Array);//true

console.log(myArr);
myArr.shuffle();
console.log(myArr); */