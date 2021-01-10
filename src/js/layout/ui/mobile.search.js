
import {$_, $$_, snack} from '../../libs';

export function mobileSearch() {
	search()
}

function search(){
	if(!$_('.msearch.mobile span.button')) return;
	
	$_('.msearch.mobile span.button').addEventListener('click', event => {

		if($_('.msearch.mobile input').value.length == ''){
			snack('Запрос не может быть пустым')
			return;
		}

		if($_('.msearch.mobile input').value.length <= 2){
			snack('Не менее 3 знаков')
			return;
		}

		$_('.msearch.mobile .button.search').innerHTML = `
		<img class="spin" src="/assets/img/pages/services/loading.svg">
		`

		let q = $_('.msearch.mobile input').value
		let host = ''
		window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'
		fetch(host+'/php/mobile.search?query='+q)
		.then(r => r.json())
		.then(j => draw(j))


	})
}

function draw(json){
	let string = ''
	Object.keys(json).forEach(i=> {
		string += `
		<li data-id="${json[i].id}">${json[i].pagetitle}</li>
		`
	})
	$_('.msearch.mobile .res ul').innerHTML = string
	$_('.msearch.mobile .button.search').innerHTML = `
	<img src="/assets/img/pages/services/loupe.svg">
	<span>Найти</span>
	`

	$$_('.msearch.mobile .res ul li').forEach(el => {
		el.addEventListener('click', req)
	})
	

}

function req() {
	let id = event.target.dataset.id;
	let host = ''

	window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'
	fetch(host+'/php/msearch?id='+id)
	.then(r => r.json())
	.then(j => {
		let str = ``
		Object.keys(j).forEach(i => {
			str += `<li data-id="${j[i].id}">${j[i].pagetitle}</li>`
		})
		$_('.msearch.mobile .res ul').innerHTML = str

		$$_('.msearch.mobile .res ul li').forEach(el => {
			el.addEventListener('click', res)
	
		})
	})
}

function res() {
	let id = event.target.dataset.id;
	let host = ''

	window.location.host == 'autoceh.by' ? '' : host = 'http://atc.modx'
	fetch(host+'/php/msearch?id='+id)
	.then(r => r.json())
	.then(j => {
		let str = ``
		Object.keys(j).forEach(i => {
			str += `<li data-id="${j[i].id}" class="model">
					<a href="${j[i].uri}">
					<span class="pagetitle">${j[i].pagetitle}</span>
					<span class="year">${j[i].introtext}</span>
					</a>
			</li>`
		})
		$_('.msearch.mobile .res ul').innerHTML = str

	})
}