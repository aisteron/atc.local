import {$_, $$_} from '../../libs';

export function Aside() {
	tabs()
}


function tabs(){
	if(!$_('aside')) return;

	$$_('aside .tabs ul.header li').forEach(el => {
		el.addEventListener('click', event=> {

				let nodes = Array.prototype.slice.call( $_('aside .tabs ul.header').children ) 
				let index =  nodes.indexOf( event.target )


				$$_('aside .repair, aside .diag, aside .models').forEach(div => div.classList.remove('open'))
				$$_('aside .tabs ul.header li').forEach(li => li.classList.remove('active'))

				event.target.classList.add('active')
				$_(`aside [data-index='${index}']`).classList.add('open')
		})
	})
}