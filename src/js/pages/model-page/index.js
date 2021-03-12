import {$_, $$_} from '../../libs';
export function modelPage(){

	if(!$_('body').classList.contains('model-page')) return;

	table_order()
	intro()
}

function table_order(){
	if(!$_('table.def')) return;

	$$_('article table.def td.order').forEach(el => el.addEventListener('click', _ => $_('#myModal').style.display = 'block'))
}

function intro(){
	if(!$_('#model-intro')) return
		$_('#model-intro .signup').addEventListener('click', _ => $_('#myModal').style.display = 'block')
}

// system page ?