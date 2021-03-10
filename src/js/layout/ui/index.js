import {msearch} from './msearch';
import {mobileSearch} from './mobile.search';
import {expand} from './expand';
import {openMap} from './openmap';

export function Ui() {
	msearch() // поиск по модели
	mobileSearch() // поиск по модели в мобильном https://prnt.sc/wnk9dg
	expand() // разворачивание списка родительских услуг  https://prnt.sc/wnk4m8
	openMap() // открытие карты в хидере
}


