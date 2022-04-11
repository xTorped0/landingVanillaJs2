const calc = (size, material, opts, promo, result) => {
	const sizeBlock = document.querySelector(size),
				materialBlock = document.querySelector(material),
				optsBlock = document.querySelector(opts),
				promoBlock = document.querySelector(promo),
				resultBlock = document.querySelector(result)

	let sum = 0

	function onChange() {
		sum = Math.round(Number(sizeBlock.value) * Number(materialBlock.value) + Number(optsBlock.value))

		if(!sizeBlock.value || !materialBlock.value) {
			resultBlock.textContent = 'Выберите размер и материал картины'
		} else if(promoBlock.value === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum * .7)
		} else resultBlock.textContent = sum
	}

	sizeBlock.onchange = onChange
	materialBlock.onchange = onChange
	optsBlock.onchange = onChange
	promoBlock.oninput = onChange
}

export default calc