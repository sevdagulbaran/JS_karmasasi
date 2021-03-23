//JS Single Thread
//Thread: process sırasında yapılan iş parçaçığı (o an çalışan kod parçaçığı)
//JS Synchronous
//1-Program bloklanma yavaş çalışma
//2- Eksik veri 
//JS Senkron olarak single thread şeklinde çalışır,Asekron çalışmadan bahsettiğimiz JS Runtime içerisinde tek işlem yapıyor zaten sıralı bir şekilde çalıştırıyor.. Web Apı falan ile asenkron



/* const func1 = () =>{
	console.log('Func 1 Console log 1');

	console.log('Func 1 Console log 2');

	alert ('Alert Message');
}

const func2 = () => {
  console.log('Func 2 Console log 1');

  console.log('Func 2 Console log 2');


}

func1();
func2(); */

/* let x = 10;
console.log('1.gelen veri...',x);

setTimeout(()=>{
   
	x = x + 5;
},1000);// işlem gerçekleşmemiş output:10 datasını alıyoruz

console.log('2.gelen veri...',x);


x = x + 5;
console.log('3.gelen veri...',x);


 */

//Call Stack
//Fonksiyonların Çalışma Sırasını gösterir.
/*
function func1(){
	console.log('Ben birinciyim...');
	func2();
	console.log('Ben tekrar birinciyim...');
}
function func2(){
	console.log('Ben ikinciyim...');
	func3();
	console.log('Ben tekrar ikinciyim...');
}
function func3() {
	console.log('Ben üçüncüyüm...');
	
}

func1(); */

//cdn.javascripttuturiol.net
/* function add(x,y){
	return x + y; 
}

function ave(x ,y){
	return add(x , y)/2;
}

let x = ave (6,8);
console.log(x);
 */
/* function task (message){
	let n = 1000000000;
	while(n > 0){
		n--;
	}
	console.log(message);
}
console.log('1');

setTimeout(() =>{
	console.log('2');
},1000)// bu process tamamlanmış oluyor task biter bitmez yazdırıyor

console.log('3');
console.log('4');//1342

task('İşlem tamamlandı..');// call stackta ki işlemler bittikten sonra call backa bakıyo Bununla ilgilenen komut 'Event Loop'

setTimeout(() =>{
	console.log('5');
},1000);


task('İşlem tamamlandı 2 ..');//önce fonk gelir callback queuesine alır after write console logs 
//OUTPUT: 1 3 4 işlem tamamlandı İşlem tamamlandı2  2 5 */


//CALLBACK : geri çağırma bir bildirim fonksiyonudur
//js nin asyc çalışma için bulduğu yöntem

/* const myName = ()=> {
	console.log('Benim Adım SEVDA...');
}
setTimeout(myName,3000); 
//Anonim fonk ve callback func.
setTimeout(()=> {
	console.log('Benim Adım SEVDA...');
},3000);*/
/* 
const books= [
	{name: 'Pinbal 1973', author:'Haruki Maruki'},
	{name: 'Özgürlük', author:'Haruki Maruki'},
	{name: 'Türkiye de çağdaşlaşama', author:'Niyazi Berkay'}
]

const listBooks = () => {
	books.map ((book,index) => {
		console.log(book, index);

	})
}

const addNewBook = (newBook , callback) =>{
	books.push(newBook);
	callback();
}
//önce ekleme sonra listeleme
addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks);// fonksiyonu çağırmadan ekler eklemesz yazıuor
// callback kullanmadığımızda ekledikten sonra fonksiyonu çağırmmaız gerekiyordu

 */