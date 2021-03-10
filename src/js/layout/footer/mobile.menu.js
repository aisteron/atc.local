import {$_, $$_} from '../../libs'

export function mobileMenu() {
	//console.log('mobile.menu')
	$_('#nav-icon1').addEventListener('click', event => {
		
		$_('#nav-icon1').classList.toggle('open')
		$_('#mobile-menu').classList.toggle('open')
	})

	// callback
	// как до нас доехать

	$_('#mobile-menu .header .map a').addEventListener('click', event => {
		event.preventDefault()
		$_('#map_popup .black').classList.add('open')
		$_('#nav-icon1').classList.toggle('open')
		$_('#mobile-menu').classList.toggle('open')
	})

	$_('#mobile-menu .header .callback span').addEventListener('click', _ => {
		
		$_('#myModal').style.display = 'block'
	})
	

}