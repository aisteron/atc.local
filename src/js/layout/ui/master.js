import {$_, $$_} from '../../libs';
export function master(){
	
	desktop()
	mobile()

}

function desktop(){


	if(!$_('.master')) return
		$$_('.master').forEach(el => {
			el.querySelector('.write').addEventListener('click', event => {
				$_('#myModal').style.display = 'block'
			})
		})

}

function mobile(){

	if(!$_('.mobile-master')) return
		$$_('.mobile-master').forEach(el => {
			el.querySelector('.signup').addEventListener('click', event => {
				$_('#myModal').style.display = 'block'
			})
		})

}