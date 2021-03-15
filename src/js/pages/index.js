import {review} from './service/review.js'
import {Diag} from './diag/index.js'
import {serviceList} from './service-list/index.js'
import {modelPage} from './model-page/index.js'
import {systemPage} from './system-page/index.js'
import {modelList} from './model-list/index.js'

export function Pages(){
	review()
	Diag()
	modelPage()
	systemPage()
	modelList()
}