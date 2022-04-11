const showPictures = (imgSelector) => {
	const blocks = document.querySelectorAll(imgSelector)

	function showImg(block) {
		const img = block.querySelector('img')
		const src = img.src.split('.')
		img.src = src[0] + '-1.' + src[1] 
		block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
			p.style.display = 'none'
		});
	}

	function hideImg(block) {
		const img = block.querySelector('img')
		img.src = img.src.replace('-1', '')
		block.querySelectorAll('p:not(.sizes-hit').forEach(p => {
			p.style.display = 'block'
		});
	}

	blocks.forEach(block => {
		block.onmouseover = () => showImg(block)
		block.onmouseout = () => hideImg(block)
	})
}	

export default showPictures