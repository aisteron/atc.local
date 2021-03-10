import {$_, $$_, snack} from '../../libs';

export function openMap(){
	
		if(!$_('header li.addr')) return;
		$_('header li.addr').addEventListener('click', event => {
			$_('#map_popup .black').classList.add('open')
		})

		$_('#map_popup iframe').addEventListener('lazyloaded', function(e){
		$_('#map_popup span.notice').remove()
		});

		$_('#map_popup span.close').addEventListener('click', _ => {
			
			$_('#map_popup .black').classList.remove('open')
		})
}