import {$_, $$_, snack} from '../../libs';


export function Duty(){
	if(!$_('body').classList.contains('duty-page')) return
	
	order()
}

function order(){
	if(!$_('article .cta')) return
		$_('article .cta').addEventListener('click', event => {
			$_('#myModal').style.display = 'block'
		})
}