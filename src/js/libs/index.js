import "regenerator-runtime/runtime.js";

export function $_(element) {return document.querySelector(element)}
export function $$_(elements) {return document.querySelectorAll(elements)}

export function loadCSS(n,e,o,d){"use strict";var t=window.document.createElement("link"),i=e||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return t.rel="stylesheet",t.href=n,t.media="only x",d&&(t.onload=d),i.parentNode.insertBefore(t,i),t.onloadcssdefined=function(n){for(var e,o=0;o<l.length;o++)l[o].href&&l[o].href===t.href&&(e=!0);e?n():setTimeout(function(){t.onloadcssdefined(n)})},t.onloadcssdefined(function(){t.media=o||"all"}),t}

export function onloadCSS(n,e){
	n.onload=function(){
		n.onload=null,e&&e.call(n)},
		"isApplicationInstalled"in navigator&&"onloadcssdefined"in n&&n.onloadcssdefined(e);}

export async function loadAssets(js,css) {

		/*
			['path/to/js'], ['path/to/css']
		*/

		load_js(js)

		function load_js(js){

			if(js.length > 0) {
				let next = js.shift()
				let script = document.createElement('script')
				script.src = next
				$_('.scripts-area').appendChild(script)

				script.onload = () => load_js(js)
			} else 
			{
				load_css(css)
			}

		}

		function load_css(css) {

			if(css.length > 0){
				let next = css.shift()
				let style = loadCSS(next)
				onloadCSS(style, () => load_css(css))
			} else {
				//callback
			}
		}

		return 'assets loaded'
}

export function snack(text){
	if(!$_('#snackbar')){
		let div = document.createElement('div')
			div.setAttribute('id', 'snackbar')
			$_('.scripts-area').appendChild(div)
	}

	$_('#snackbar').innerText = text
	$_('#snackbar').classList.add('show')

	setTimeout(()=>{$_('#snackbar').classList.remove('show')}, 2000)


}
