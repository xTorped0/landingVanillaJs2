const burger = (menuSelector, burgerSelector) => {
	const menuElem = document.querySelector(menuSelector),
				burgerElem = document.querySelector(burgerSelector)

	menuElem.style.display = 'none'

	burgerElem.onclick = function() {
		if(window.screen.availWidth < 993) {
			if(menuElem.style.display == 'none') {
				menuElem.style.display = 'block'
			} else {
				menuElem.style.display = 'none'
			}
		}
	}

	window.onresize = () => {
		if(window.screen.availWidth > 992) {
			menuElem.style.display = 'none'
		}
	}
}

export default burger