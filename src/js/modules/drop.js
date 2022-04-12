function drop() {
	const fileInputs = document.querySelectorAll('[name="upload"]'),
				eListeners = ['dragenter', 'dragleave', 'dragover', 'drop'],
				onListeners = ['dragenter', 'dragover'],
				outListeners = ['dragleave', 'drop']
	
	eListeners.forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, preventDefaults, false)
		})
	})

	function preventDefaults(e) {
		e.preventDefault()
		e.stopPropagation()
	}

	function hightlight(item) {
		item.closest('.file_upload').style.border = '1px solid yellow'
		item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .5)'
	}

	function unhightlight(item) {
		item.closest('.file_upload').style.border = ''
		item.closest('.file_upload').style.backgroundColor = 'transparent'
	}

	onListeners.forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => hightlight(input), false)
		})
	})

	outListeners.forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unhightlight(input), false)
		})
	})

	fileInputs.forEach(input => {
		input.ondrop = (e) => {
			input.files = e.dataTransfer.files

			const name = input.files[0].name.split('.')
			const dots = name[0].length > 6 ? '...' : '.'
			const dispName = name[0].substring(0, 6) + dots + name[1]
			input.previousElementSibling.textContent = dispName
		}
	})
}

export default drop