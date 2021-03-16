import {$_, $$_, snack} from '../../libs';

export function serviceList(){
	
	if(!$_('body').classList.contains('service-list-page')) return;
	desktop()
	mobile()
}

function desktop(){
	if(!$_('.desktop.items')) return
		$$_('.desktop.items .item .order').forEach(el => el.addEventListener('click', _ => $_('#myModal').style.display = 'block'))
}

function mobile(){

	if(!$_('.mobile.items')) return
		$$_('.mobile.items .item .order').forEach(el => el.addEventListener('click', _ => $_('#myModal').style.display = 'block'))
}