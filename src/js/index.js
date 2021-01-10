
import {Footer} from './layout/footer/';
import {Aside} from './layout/aside/';
import {Ui} from './layout/ui/';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init)

function init(){
	
	Footer();
	Aside();
	Ui();
}