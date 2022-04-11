const showMoreStyles = (trigger, styles) => {
	const cards = document.querySelectorAll(styles),
				btn = document.querySelector(trigger)

	cards.forEach(card => {
		card.classList.add('animated', 'fadeInUp')
	})

	const showedClasses = cards[0].className

	btn.onclick = () => {
		cards.forEach(card => {
			card.className = ''
			card.className= showedClasses
		})

		btn.style.display = 'none'
	}
}

export default showMoreStyles