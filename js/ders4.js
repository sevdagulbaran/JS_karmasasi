
// Ders 4 
//OBJECTS PART 2
/* const person = {
	name:'Sherlock',
	surname:'Holmes',
	age:40,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}
console.log(person);
console.log(person.name);
console.log(person.fullName());

console.log(person.job);//undefined
console.log(person.toString());


function Person(name, surname, age){

	this.name= name;
	this.surname= surname;
	this.age= age;
    this.fullName= function(){
	 return this.name + " "+ this.surname;
}
};
// object personun prototypeı person da arinin prototypeı
// OBJECT+ name, surname, age, fullName() ---> Person ---> arin
const arin =  new Person('arin','admin',21);
console.log(arin);
console.log(person.hasOwnProperty('name'));
 

// OBJECT+ name, surname, age, fullName() ---> Person +job ---> arin
const toprak =  new Person('toprak','su',11);
console.log(toprak);
 toprak.job= 'student';
console.log(toprak);

console.log(toprak.toString());

toprak.toString = function () {
	return 'toString metodunu değiştirdim'
	
}
console.log(toprak.toString());
 */
/* function Person(name, age){

	this.name= name;
	this.age= age;

};
// sonıç ortak olduğu için Constructordan siliyoruz
Person.prototype.fullName =function(){
	return this.name + " "+ this.surname;
}
Person.prototype.surname ='Çekiç';
// sadeece iki parametre alıyor ama menüyü açınca ortak protype olarak kullanılır
const arin =  new Person('arin',21);
console.log(arin);

const toprak =  new Person('toprak',11);
console.log(toprak); */

/* 
//INHERITANCE
const person = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}
const arin = Object.create(person);
console.log(arin);// boş direk prototype gösteriyor ve tüm değeeler atanmıştır
console.log(arin.name);

// böyle kullanırsak direk nesnnenin içerisinde kullandı çünkü biz artık protypte dan almıyo kendimiz atadığımız için alıyor
arin.name = 'Arin';

console.log(arin);

arin.age = 5;
 console.log(arin);
console.log(arin.hasOwnProperty('age'));//true çünkü kendimiz atadık
console.log(arin.hasOwnProperty('surname'));// false çünkü prototypedan alıyor
console.log('surname' in arin); //  true  döner  */