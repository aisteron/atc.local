// мобильная версия страницы списка услуг ремонта
import {$_, $$_} from '../../libs';
export function expand(){
	if(!$_('.subcat')) return;

	$_('.subcat .expand').addEventListener('click', event => {

		let exp = event.target.closest('.expand')
		exp.classList.toggle('open')
		$_('.subcat .list').classList.toggle('open')

		if(exp.classList.contains('open')){
			exp.querySelector('span').innerText = 'развернуть'

		} else {
			exp.querySelector('span').innerText = 'свернуть'
		}


	})
}