import {$_, $$_} from '../../libs'

export function mobileMenu() {
	//console.log('mobile.menu')
	$_('#nav-icon1').addEventListener('click', event => {
		
		$_('#nav-icon1').classList.toggle('open')
		$_('#mobile-menu').classList.toggle('open')
	})
}