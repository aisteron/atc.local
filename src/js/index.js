import {Header} from './layout/header/';

document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init)

function init(){
	Header();
}