function sliders(slidesSel, dir, prev, next, isAuto = true, interval = 3000) {
	let sliderInd = 1,
			paused = false
	const items = document.querySelectorAll(slidesSel),
				prevBtn = prev && document.querySelector(prev),
				nextBtn = next && document.querySelector(next)

	function showSlides(n) {
		sliderInd = n > items.length ? 1 : n < 1	? items.length : n
			
		items.forEach((item, ind) => {
			item.classList.add('animated')
			item.style.display = ind + 1 == sliderInd ? 'block' : 'none'
		})
	}

	showSlides(sliderInd)

	function changeSlides(n) {
		showSlides(sliderInd += n)
	}

	function currentItem() {
		return items[sliderInd - 1]
	}

	if(prevBtn) prevBtn.onclick = () => {
		changeSlides(-1)
		currentItem().classList.remove('slideInRight')
		currentItem().classList.add('slideInLeft')
	}

	if(nextBtn) nextBtn.onclick = () => {
		changeSlides(1)
		currentItem().classList.remove('slideInLeft')
		currentItem().classList.add('slideInRight')
	}

	function activateAnimation() {
		if(isAuto) {
			paused = setInterval(() => {
				changeSlides(1)
				if(dir === 'vertical') {
					currentItem().classList.remove('slideInTop')
					currentItem().classList.add('slideInDown')
				} else {
					currentItem().classList.remove('slideInLeft')
					currentItem().classList.add('slideInRight')
				}
			}, interval)
		}
	}

	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused)
	})

	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation()
	})

	activateAnimation()
}

export default sliders