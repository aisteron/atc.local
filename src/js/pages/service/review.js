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
		(window.location.host == 'autoceh.by' || window.location.host == 'new.autoceh.by') ? '' : host = 'http://atc.modx'

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


function load_reviews(obj){

	let host = ''
	window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'
	
	fetch(host+'/php/reviews')
	 .then(r => r.json())
	 .then(j => slide(j))
		

}

function slide(obj){
	let index = 0


	$$_('#reviews .arrows svg').forEach(el => {
		el.addEventListener('click', event => {

			if(event.target.classList.contains('disabled')) return;

			if(event.target.classList.contains('prev')){
				drawC(-1)
			} else {
				drawC(1)
			}
		})
	})

	function drawC(index){
		
		let current = Number($_('#reviews .right').dataset.index)
		current = current + index
		
		if(current < 0) return;

		$_('#reviews .right').setAttribute('data-index', current)





		

		Object.keys(obj).forEach((el, i) => {
			if(i == current){
				$_('#reviews .date').innerText = obj[el].date
				$_('#reviews .author').innerText = obj[el].name
				$_('#reviews .body .item').innerText = obj[el].text
			}
		})


		// arrows
		if(current == 0){
			$_('svg.prev').classList.add('disabled')
		} else {
			$_('svg.prev').classList.remove('disabled')
		}

		if(Object.keys(obj).length <= (current +1) ){
			$_('svg.next').classList.add('disabled')
		} else {
			$_('svg.next').classList.remove('disabled')
		}

		
	}
}