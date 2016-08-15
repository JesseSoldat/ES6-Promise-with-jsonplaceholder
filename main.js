//https://jsonplaceholder.typicode.com/todos

function getData(method, url) {
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = function(){
			if(this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function(){
			reject({
					status: this.status,
					statusText: xhr.statusText
				});
		};
		xhr.send();
	});
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
	// console.log(data);
	let todos = JSON.parse(data);
	let output = '';
	for(let todo of todos){
		output += `
		<li>
			<h3>${todo.title}</h3>
			<p>Completed: ${todo.completed}</p>
		</li>

		`
	}
	document.getElementById('template').innerHTML = output;
}).catch(function(err){
	console.log(err);
});


// $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });

// $.ajax('http://jsonplaceholder.typicode.com/posts', {
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });


// POST adds a random id to the object sent
// $.ajax('http://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   data: {
//     title: 'My Ajax Adventure',
//     body: 'Playing around with AJAX',
//     userId: 1,
//     author: 'Jesse Soldat'
//   }
// }).then(function(data) {
//   console.log(data);
// });

// $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   data: {
//     id: 1,
//     title: 'JLAB Adventures',
//     body: 'Updating with Ajax',
//     userId: 1
//   }
// }).then(function(data) {
//   console.log(data);
// });

