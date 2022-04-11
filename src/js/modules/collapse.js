const collapse = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector)

	btns.forEach(btn => {
		btn.onclick = function() {
			btns.forEach(btn => {
				if(btn === this) return

				btn.classList.remove('active-style')
				btn.nextElementSibling.classList.remove('active-content')
				btn.nextElementSibling.style.maxHeight = '0px'
			})

			this.classList.toggle('active-style')
			this.nextElementSibling.classList.toggle('active-content')

			if(this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
			} else {
				this.nextElementSibling.style.maxHeight = '0px'
			}
		}
	})
				// items = document.querySelectorAll(itemsSelector)

	// items.forEach(block => {
	// 	block.classList.add('animated', 'fadeInDown')
	// })


	// btns.forEach(btn => {
	// 	btn.onclick = function () {
	// 		if(!this.classList.contains('active')) {
	// 			btns.forEach(btn => {
	// 				btn.classList.remove('active', 'active-style')
	// 			})
	// 			this.classList.add('active', 'active-style')
	// 		} else {
	// 			btns.forEach(btn => {
	// 				btn.classList.remove('active', 'active-style')
	// 			})
	// 		}
	// 	}
	// })
}

export default collapse