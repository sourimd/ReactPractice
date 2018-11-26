import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello Sourim..!!</h1>;
ReactDOM.render( element, document.getElementById('root'));

for( let i=0; i<5; i++){
	console.log(i);
}

const square = (number)=>{
	return number*number;
}

console.log(square(4));