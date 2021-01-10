import {msearch} from './msearch';
import {mobileSearch} from './mobile.search';
import {expand} from './expand';

export function Ui() {
	msearch() // поиск по модели
	mobileSearch() // поиск по модели в мобильном
	expand() // разворачивание списка родительских услуг 
}


