import {$_, $$_} from '../../libs';

export function nav(){
	
	//left(); // высчитывает отступ вложенного меню "Модели"

}

function left(){
	let arr = [];

	$$_('header ul.two').forEach(el =>{

			let left = window.getComputedStyle(el.querySelector('a')).getPropertyValue("width");
			el.style.left = '-'+left;
			console.log(left)
	})

}