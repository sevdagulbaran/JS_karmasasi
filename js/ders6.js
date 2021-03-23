//CLASS 

//constructor
/* 
function Person(name, surname, age){

	this.name= name;
	this.surname= surname;
	this.age= age;
//    this.fullName=fullName;
}; */

/* function fullName(){
	return this.name + " "+ this.surname;
} */
// nesneler için birden fazla fonksiyon olduğunda nasıl oluşturabilirim
/* Person.prototype.fullName = function() {
	return this.name + " "+ this.surname;
}
 */

/* const arin = new Person ('Arin', 'Cekic' ,5);
const elis = new Person ('Elis', 'Cekic' ,3);

Person.prototype.friends = ['Ela','Rüzgar'];



console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

console.log(arin.friends);
console.log(elis.friends);

arin.friends.push('Cinar');
console.log(arin.friends);

console.log(elis.friends);//Prototypedan gelen özellikten kaynaklı elisin arkadaşları içine de çınar eklendi buna engel olmak için;
//Prototype dan çıkartıp constructora ekleyebeilirz ama karmaşıklaşır BURADA DEVREYE CLASS GİRİYOR...........
 */


/* function Person(name, surname, age){

	this.name= name;
	this.surname= surname;
	this.age= age;
   this.fullName=fullName;
};
 */

// classtan çıktıktan sonra çağırıyoruz
//Java main gibi düşün
/* const arin = new Person ('Arin', 'Cekic' ,5);
const elis = new Person ('Elis', 'Cekic' ,3);




console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

// Elisin arkadası olmuyor
arin.friends.push('Cinar');
console.log(arin.friends);
console.log(elis.friends);

console.log(Person);
console.log(typeof Person); */