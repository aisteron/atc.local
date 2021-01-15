//разворачивание коммента / отзыва
import {$_, $$_, snack} from '../../libs';

export function review() {

	if(!$_('#reviews')) return;

	expand() // развернуть комментарий
	show_form()
	load_reviews()

}

function expand() {	

	$_('#reviews .expand').addEventListener('click', event => {

		$_('#reviews .body .item').classList.toggle('open')

		if($_('#reviews .body .item').classList.contains('open')){
			event.target.innerText = 'Свернуть'
		} else {
			event.target.innerText = 'Развернуть'
		}

	})
}

function show_form() {


	$_('#reviews .left p span').addEventListener('click', event => {
		$_('#reviews .left p').classList.remove('open')
		$_('#reviews form').classList.toggle('open')
	})

	$_('#reviews form span.close').addEventListener('click', event => {
		$_('#reviews .left p').classList.add('open')
		$_('#reviews form').classList.toggle('open')
	})


	$_('#reviews form button.reject').addEventListener('click', event => {
		$_('#reviews .left p').classList.add('open')
		$_('#reviews form').classList.toggle('open')
	})

	// отправка
	$_('#reviews form').addEventListener('submit', event => {
		event.preventDefault();
		let host = ''
		window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'

		let data = {
			name: $_('#reviews form input').value,
			text: $_('#reviews form textarea').value,
			subject: 'Новый отзыв на сайте autoceh.by',
			form_name: 'Форма отзыва' ,
			body: `
				<p>Имя: name</p>
				<p>Текст отзыва:</p>
				<div>text</div>
			`
		}
		
		fetch(host + '/assets/php/send.php', {
			method: 'POST',
			mode: 'cors',
			headers: {'Content-type': 'Application/json'},
			body: JSON.stringify(data)
		})
			.then(r => r.text())
			.then(t => draw(t))
			.catch(error => {
				console.error(error)
				snack('Произошла ошибка отправки')
			})
	})
}

function draw(text){
	let string = '<div class="response">'
	
	if(text == 'error'){
		snack('Произошла ошибка отправки на сервере')
		string += `

			<img src="/assets/img/layout/forms/warning.svg">
			<p>Ошибка отправки 😐</p>
		` 
	} else {
		string += `
			<img src="/assets/img/layout/forms/check.svg">
			<p>Успешно отправлено 😇</p>
		`
	} 

	string += '</div>';
	$_('#reviews form').innerHTML = string
}

/*

{
   "1":{
      "date":"05.02.2021",
      "name":"Алена",
      "text":"Подскажите где есть все-все возможные значения полей migx inputTV, на migx документации не нашел такого поля как например:"
   },
   "2":{
      "date":"06.02.2021",
      "name":"Zena",
      "text":"Заготовка для конфигурации MIGX находится в директории /core/components/MIGX/examples/. В нижеследующем примере мы будем использовать заготовку "
   }
}

*/

function load_reviews(){

	let host = ''
	window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'
	
	fetch(host+'/php/reviews')
	 .then(r => r.json())
	 .then(j => console.log(j))
		
	 
}