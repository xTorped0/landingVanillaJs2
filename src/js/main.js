import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc'
import filter from './modules/filter'
import showPictures from './modules/showPictures'
import collapse from './modules/collapse'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modals()

	sliders('.main-slider-item', 'vertical')
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')

	forms()

	mask('[name="phone"]')

	checkTextInputs('[name="name"]')
	checkTextInputs('[name="message"]')

	showMoreStyles('.button-styles', '.styles .row>div')

	calc('#size', '#material', '#options', '.promocode', '.calc-price')

	filter()

	showPictures('.sizes-block')

	collapse('.accordion-heading')
})