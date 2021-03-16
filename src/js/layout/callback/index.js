import {$_, $$_, snack} from '../../libs';

export function Callback(){

	home()
	evac()
	aside_signup()
	footer_modal()
	header_modal()
	get_consult()
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

function evac(){
	if(!$_('.widget.evac')) return
		$_('.widget.evac form').addEventListener('submit', event => {
			event.preventDefault()

			let obj = {
				title: 'Заказать эвакуатор',
				phone: $_('.widget.evac form input').value
			}

			send($_('.widget.evac'), obj, '#333')
		})
}

function aside_signup(){
	if(!$_('aside .signup') ) return
		$_('aside .signup form').addEventListener('submit', event => {
			event.preventDefault();
			let obj = {
				title: 'Записаться на сервис',
				name: $$_('aside .signup form input')[0].value,
				phone: $$_('aside .signup form input')[1].value,
			}
			send($_('aside .signup'),obj, '#333')
		})
}
function footer_modal(){
	$_('footer li.callback').addEventListener('click', event => {
		$_('#myModal').style.display = 'block'
		$_('#myModal h3').innerText = 'Оставьте свой номер телефона и менеджер вам перезвонит'
	})

	$_('#myModal .close').addEventListener('click', event => {
		$_('#myModal').style.display = 'none'
	})

	document.addEventListener('keydown', event => {
		$_('#myModal').style.display = 'none'
	})

	$_('#myModal form').addEventListener('submit', event => {
		event.preventDefault()
		let obj = {
			title: 'Перезвонить',
			name: $$_('#myModal form input')[0].value,
			phone: $$_('#myModal form input')[1].value
		}

		send($_('#myModal .modal-content'), obj, '#333')
	})
}

function get_consult(){
	if(!$_('#spec')) return
	$_('#spec .reject').addEventListener('click', event => {
		$_('#myModal').style.display = 'block'
		$_('#myModal h3').innerText = 'Чтобы получить консультацию, оставьте номер телефона'
	})
}

function header_modal(){
	if(!$_('.row.one li.call')) return;
	$_('.row.one li.call').addEventListener('click', event => {
		$_('#myModal').style.display = "block"
		$_('#myModal h3').innerText = 'Оставьте свой номер телефона и менеджер вам перезвонит'
	})
	$_('.row.one li.signup').addEventListener('click', event => {
		$_('#myModal').style.display = "block"
		$_('#myModal h3').innerText = 'Чтобы записаться на сервис, оставьте номер телефона'
	})
}

function send(el, obj, color){
	let url = ``
	//process.env.NODE_ENV == 'development' ? url = "http://atc.modx/assets/php/callback.php" : "/assets/php/callback.php"
	fetch("/assets/php/callback.php", {
		method: "POST",
		mode: 'cors',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify(obj)
	})
		.then(r => r.text())
		.then(t => draw(el, t, color))
		.catch(e => console.log(e))
}

function draw(el, t, color){
	if(t !== 'success') {
		console.log('smth!')
		snack('Ошибка отправки')
		return;
	}

	el.innerHTML = ` <h3 style="color: ${color}">Успешно отправлено</h3> `

	if($_('#myModal .modal-content h3')){
		$_('#myModal .modal-content h3').insertAdjacentHTML('beforebegin', '<span class="close">&times;</span>')
		$_('#myModal .modal-content .close').addEventListener('click', () => $_('#myModal').style.display = "none")
	}
}