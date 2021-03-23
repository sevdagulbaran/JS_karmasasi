// NEW OBJECT SYNTAX

/* //1 - Shorthand Properties
let name = 'arin' , age = 5;

/* const myObj = {
  name: name,
  age : age
} 
// yukarıda ki tanımlama ile aynı mantık
const myObj = {
	name ,
	age 
  }

console.log(myObj.age);
console.log(myObj.name);
 */
/* //2 - Computed Property Names

// es5
// Önce nesneyi oluşturmamız lazım
  let prop1 = 'name';
 let myObj = {}

 myObj[prop1]= 'Arin';
 console.log(myObj);


 // bir değişkeni, nesneyi oluştururken atayabiliriz 
 // bu özellik kütüphanlerde çok kullanılır
let prop1 = 'name';

let myObj = {
	[prop1]:'Arin2'
}
console.log(myObj);
 */
//3 - Short Method Syntax

/* const person = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName : function(){
		return this.name + " " + this.surname;
	}
} */
// : ve function kalıdırırız
//es6
/* const person = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName (){
		return this.name + " " + this.surname;
	}
}
console.log(person.fullName()); */

//4 - Object Destructuring

const person = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName (){
		return this.name + " " + this.surname;
	}
}

// Daha fazla property olsa ne yapardık?
/* let myVar1 = person.name;
console.log(myVar1);
let myVar2 = person.age;
console.log(myVar2); */

// ayrı ayrı oluşturmak yerine tek satırda yazabiliriz 
/* let{name: myVar1, age: myVar2} = person;
console.log(myVar1);
console.log(myVar2); */

/* let{name: name, age: age} = person;
console.log(name);
console.log(age); */

 // yukarıdaki olay kendini tekrarladığı için bu şekilde kullanırız
/* let{name ,age} = person;
console.log(name);
console.log(age); */


//5 - Spread Operator in Object Literals(...)

// yukarıdan objemizi alıyoruz (tanımladığımız person)
/* 
let person2 = {...person};// tüm özellikleri kopyaladık
console.log(person2);

//Nesneleri birleştirmede kullanır

const person1 = {
	gender:'girl',
	job:'Computer Engineer',
}
 //const arin = {...person, ...person1}
 const arin = {...person,country:'Turkey', ...person1}
 console.log(arin); */

//6 - REST Operator in Object Literals

//rest yerine başka isimler de kullanabilriz
//Kalan özellikleri başka obj çekebiliriz
// yukarıdan objemizi alıyoruz (tanımladığımız person)
/* 
let{name, age} = person;
console.log(name); */
/* 
let{name,...rest } = person;
console.log(rest); */


/* //7 - Object Values - Object Entries

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); */