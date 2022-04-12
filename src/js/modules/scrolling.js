const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector)
	window.onscroll = () => {
		if(document.documentElement.scrollTop > 1650) {
			upElem.classList.add('animated', 'fadeIn')
			upElem.classList.remove('fadeOut')
		} else {
			upElem.classList.add('fadeOut')
			upElem.classList.remove('fadeIn')
		}
	}

	// SCROLLING WITH RAF

	const links = document.querySelectorAll('[href^="#"'),
				speed = .3

	links.forEach(link => {
		link.onclick = function(e) {
			if(!this.hash) return
			e.preventDefault()

			let widthTop = document.documentElement.scrollTop,
					hash = this.hash,
					toBlock = document.querySelector(hash).getBoundingClientRect().top,
					start = null

			requestAnimationFrame(step)

			function step(timestamp) {
				if(start === null) {
					start = timestamp
				}

				let progress = timestamp - start,
						r = toBlock < 0 
							? Math.max(widthTop - progress / speed, widthTop + toBlock) 
							: Math.min(widthTop + progress / speed, widthTop + toBlock)

				document.documentElement.scrollTo(0, r)

				if(r != widthTop + toBlock) requestAnimationFrame(step)
				// else location.hash = hash
			}
		}
	})

	//// PURE JS SCROLLING
	// const elem = document.documentElement,
	// 			body = document.body

	// const calcScroll = () => {
	// 	upElem.onclick = function (e) {
	// 		const scrollTop = Math.round(body.scrollTop || elem.scrollTop)

	// 		if(this.hash !== '') {
	// 			e.preventDefault()
	// 			let hashElement = document.querySelector(this.hash),
	// 					hashElemTop = 0

	// 			while(hashElement.offsetParent) {
	// 				hashElemTop += hashElement.offsetTop
	// 				hashElement = hashElement.offsetParent
	// 			}

	// 			hashElemTop = Math.round(hashElemTop)
	// 			smoothScroll(scrollTop, hashElemTop, this.hash)
	// 		}
	// 	}
	// }

	// function smoothScroll(from, to, hash) {
	// 	let timeInterval = 1,
	// 			prevScrollTop,
	// 			speed = to > from ? 30 : -30

	// 	let move = setInterval(() => {
	// 		const scrollTop = Math.round(body.scrollTop || elem.scrollTop)

	// 		if(
	// 			prevScrollTop === scrollTop ||
	// 			(to > from && scrollTop >= to) ||
	// 			(to < from && scrollTop <= to)
	// 		) {
	// 			clearInterval(move)
	// 			history.replaceState(history.state, document.title, location.href.replace(/\#.*$/g, '' + hash))
	// 		} else {
	// 			body.scrollTop += speed
	// 			elem.scrollTop += speed
	// 			prevScrollTop = scrollTop
	// 		}
	// 	}, timeInterval)
	// }

	// calcScroll()
}

export default scrolling