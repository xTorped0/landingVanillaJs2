const modals = () => {
	let isBtnPressed

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
			const trigger = document.querySelectorAll(triggerSelector),
						modal = document.querySelector(modalSelector),
						close = document.querySelector(closeSelector),
						windows = document.querySelectorAll('[data-modal]');

			trigger.forEach(item => {
					item.addEventListener('click', (e) => {
							if (e.target) {
								e.preventDefault();
							}

							if(destroy) {
								item.remove()
							}

							windows.forEach(item => {
								item.style.display = 'none';

								item.classList.add('animated', 'fadeIn')
							});
	
							modal.style.display = "block";
							document.body.style.overflow = "hidden";

							isBtnPressed = true
							// document.body.classList.add('modal-open');
					});
			});

			close.addEventListener('click', () => {
					windows.forEach(item => {
							item.style.display = 'none';
					});

					modal.style.display = "none";
					document.body.style.overflow = "";
					// document.body.classList.remove('modal-open');
			});

			modal.addEventListener('click', (e) => {
					if (e.target === modal) {
							windows.forEach(item => {
									item.style.display = 'none';
							});

							modal.style.display = "none";
							document.body.style.overflow = ""; 
							// document.body.classList.remove('modal-open');
					}
			});
	}

	function showModalByTime(selector, time) {
			setTimeout(function() {
				let display

				document.querySelectorAll('[data-modal]').forEach(item => {
					if(getComputedStyle(item).display === 'none') {
						display = true
					}
				})

				if(!display) {
					document.querySelector(selector).style.display = 'block'
					document.body.style.overflow = "hidden"
				}
			
			}, time);
	}

	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			if(!isBtnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
				document.querySelector(selector).click()
			}
		})
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)

	openByScroll('.fixed-gift')

	showModalByTime('.button-consultation', 60000);
};

export default modals;