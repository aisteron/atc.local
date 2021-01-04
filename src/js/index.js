import {Header} from './layout/header/';
import {Footer} from './layout/footer/';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init)

function init(){
	Header();
	Footer();
}