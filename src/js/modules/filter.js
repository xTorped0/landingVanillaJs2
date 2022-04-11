const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
				items = menu.querySelectorAll('li'),
				wrapper = document.querySelector('.portfolio-wrapper'),
				markAll = wrapper.querySelectorAll('.all'),
				no = document.querySelector('.portfolio-no')

	const typeFilter = (type) => () => {
		const markType = wrapper.querySelectorAll('.' + type)

		markAll.forEach(mark => {
			mark.style.display = 'none'
			mark.classList.remove('animated', 'fadeIn')
		})

		no.style.display = 'none'
		no.classList.remove('animated', 'fadeIn')

		if(markType.length > 0) {
			markType.forEach(mark => {
				mark.style.display = 'block'
				mark.classList.add('animated', 'fadeIn')
			})
		} else {
			no.style.display = 'block'
			no.classList.add('animated', 'fadeIn')
		}
	}

	items.forEach(item => {
		const className = item.className.split(' ').find(classN => classN !== 'active')
		const btn = menu.querySelector('.' + className)
		btn.onclick = typeFilter(className)
	})

	menu.onclick = (e) => {
		const { target } = e

		if(target && target.tagName === 'LI') {
			items.forEach(btn => { btn.classList.remove('active') })
			target.classList.add('active')
		}
	}
}

export default filter