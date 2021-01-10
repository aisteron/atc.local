import {$_, $$_, snack} from '../../libs';

export function msearch() {

	search()
	close()

}

function search() {

	if(!$_('.msearch.desktop')) return;

	$_('.msearch.desktop input').addEventListener('change', event => {

		let parentid, host;

		parentid = Number($_(`.msearch datalist option[value = "${event.target.value}"]`).dataset.id);

		
		(window.location.host == 'autoceh.by' || window.location.host == 'atc.modx') ? host = '' : host = 'http://atc.modx';


		fetch(host + '/php/msearch?id='+parentid)
		.then(r => r.json())
		.then(json => draw(json))
		.catch(error => {
			console.log(error)
			snack('Ошибка обработки данных')
		})

	})
}

function draw(json){
	if(json.status === 0){
		snack('Пустой ответ сервера');
		return;
	}

	let string = ''
	Object.keys(json).forEach(i => {
		string += `
		<li data-id="${json[i].id}"><a href="${json[i].uri}">${json[i].pagetitle}</a></li>
		`
	})

	$_('ul.res').innerHTML = string;
	$_('ul.res').classList.add('open')

	$$_('ul.res li').forEach(el => el.addEventListener('mouseover', fetch_models) )
	//$$_('ul.res li').forEach(el => el.addEventListener('mouseout', event => { $_('ul.ares').classList.remove('open')}) )
}

function fetch_models(){
	// получаем все поколения модели

	let id = event.target.closest('li').dataset.id;

	let host;
	(window.location.host == 'autoceh.by' || window.location.host == 'atc.modx') ? host = '' : host = 'http://atc.modx';

	fetch(host + '/php/msearch?id='+id)
		.then(r => r.json())
		.then(json => draw_m(json))
		.catch(error => {
			console.log(error)
			snack('Ошибка обработки данных')
		})

		function draw_m(json){

			if(json.status === 0){
				snack('Пустой ответ сервера');
				return;
			}
			
			let string = ''
			Object.keys(json).forEach(i => {
				string += `
					<li>
						<a href="${json[i].uri}">
							<span class="gen">${json[i].pagetitle}</span>
							<span class="year">${json[i].introtext}</span>
						</a>
					</li>
				`
			})

			$_('ul.ares').innerHTML = string
			$_('ul.ares').classList.add('open')
			$_('.wrapper.ares span.close').classList.add('show')

		}
}

function close() {
	
	if(!$_('.wrapper.ares span.close')) return false;

	$_('.wrapper.ares span.close').addEventListener('click', () => {
		$_('.wrapper.ares ul.ares').classList.remove('open')
		event.target.classList.remove("show")
	})
}