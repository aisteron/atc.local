import {Header} from './layout/header/';
import {Footer} from './layout/footer/';
import {Aside} from './layout/aside/';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init)

function init(){
	Header();
	Footer();
	Aside();
}