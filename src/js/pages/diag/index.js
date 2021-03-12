import {$_, $$_, snack} from '../../libs';

export function Diag(){
	//console.log('DIAG')
	intro_callback()

	price_table_order()

	table_def_order()
}




function intro_callback(){

	if(!$_('#intro .item.order')) return;

	$_('#intro .item.order').addEventListener('click', event => {
		$_('#myModal').style.display = 'block'
	})
}


function price_table_order(){
	if(!$_('article div.price table')) return
		$$_('article div.price table span.order').forEach(el => el.addEventListener('click', _ => $_('#myModal').style.display = 'block'))
}


function table_def_order(){
	if(!$_('article table.def')) return
		$$_('article table.def td.order').forEach(el => el.addEventListener('click', _ => $_('#myModal').style.display = 'block'))
}