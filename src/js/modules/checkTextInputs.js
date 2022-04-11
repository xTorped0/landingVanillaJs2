const checkTextInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector)

	txtInputs.forEach(input => {
		input.onkeypress = (e) => { if(e.key.match(/[^а-яё 0-9]/ig)) e.preventDefault() }
		input.onchange = (e) => { if(e.target.value.match(/[^а-яё 0-9]/ig)) e.target.value = '' }
	})
}

export default checkTextInputs