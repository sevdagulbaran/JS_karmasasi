//PROMİSE
//Bir yer tutucu işlevi görüyor
//asenkron işlemin nihai sonucunu temsil eden bir js nesneyişmiş

/* const books= [
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
	callback();// localde yaptığımız için hızlı fakat  rest apı den istesek sıkıntılı bir durum olurdu
}
//önce ekleme sonra listeleme
addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks); */

/* const promise1 = new Promise(function (resolve,reject){// ya başarılı oluyor ya da başarısız
	resolve('DATA');
	reject('ERROR');
	resolve('DATA');
	reject('ERROR2');
	//DATA DEĞERİ DÖNÜYOR
	//ilk başta ki dönüyor
	// state de promise oluşturulurken değiştirilemez
	
});

console.log(promise1); */
//pending(bekliyor) (undefined) - fulfilled - rejected => PROMİSE STATE

/* const promise1 = new Promise(function (resolve,reject){
	//resolve('DATA');
	reject('ERROR');//Direk hata dönderiyor..
 
	
}); */
/* 
console.log(promise1);
promise1.then(function(value){
	console.log(value);//DATA
}); */

/* promise1.then((value) =>{
	console.log(value);//DATA
}); */
//promise1.then(value => console.log(value));// BAŞARILI OLDUĞU DURUMDA THEN İLE ULAŞIYORUZ
//promise1.catch(reason=> console.log(reason));// ERROR BAŞARISIZ OLDUĞU DURUMLARDA


//const promise1 = new Promise( (resolve,reject) => reject());

/* promise1.then()=>{
	console.log('VERİLER ALINDI....');
}); //CALLBACK GİBİDİR */

// genel yazımı

/* promise1
   .then( ()=>{
	console.log('VERİLER ALINDI....');
})
  .catch(() =>{
	console.log('VERİLER ALINMADI....');
})
.finally(() =>{
	console.log('ÇALIŞ KÖLEE....');//HER DURUMDA SONUÇ DÖNSÜN DİYE
}); */

/* const promise1 = new Promise( (resolve,reject) => reject());// burada ki fonka göre çağrışım cevaplıyor

// iki tane callback then 2 tane func alabilir
promise1.then( ()=>{
	console.log('VERİLER ALINDI....');
},()=>{
	console.log('VERİLER ALINMADIIIII....');
}) */

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
/* 
const addNewBook = (newBook , callback) =>{
	books.push(newBook);
	callback();
} */

const addNewBook = (newBook) =>{
	const promise1 = new Promise((resolve , reject) => {
		books.push(newBook);
		resolve(books);
		reject('EROR');
	});
	return promise1;//bunu unutma hata alırsın
}

//addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks);

addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'})
.then(() => {
	console.log('yeni liste');
	listBooks();
})
.catch((reason)=>{
	console.log(reason);
});

