import {$_, $$_} from '../../libs';

export function systemPage(){
	if(!$_('body').classList.contains('system-page')) return
	intro()
}

function intro(){
	$$_('#system-intro .dsc').addEventListener('click', event =>{
		$_('#myModal').style.display = 'block'
	})

	$_('#system-intro .signup').addEventListener('click', event =>{
		$_('#myModal').style.display = 'block'
	})
}