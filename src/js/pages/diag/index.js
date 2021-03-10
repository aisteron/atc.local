import {$_, $$_, snack} from '../../libs';

export function Diag(){
	console.log('DIAG')
}


function home(){

	if(!$_('body').classList.contains('index-page')) return
	$_('form.left').addEventListener('submit', event => {
		event.preventDefault();

		let obj = {
			title: 'Записаться на сервис',
			name: $_('form.left input[name="name"]').value,
			phone: $_('form.left input[name="phone"]').value,
		}

		send($_('form.left .body'), obj, '#fff')
	})
}