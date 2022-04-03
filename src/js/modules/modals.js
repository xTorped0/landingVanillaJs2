const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
			const trigger = document.querySelectorAll(triggerSelector),
						modal = document.querySelector(modalSelector),
						close = document.querySelectorAll(closeSelector),
						windows = document.querySelectorAll('[data-modal]');

			trigger.forEach(item => {
					item.addEventListener('click', (e) => {
							if (e.target) {
								e.preventDefault();
							}

							windows.forEach(item => {
								item.style.display = 'none';
							});
	
							modal.style.display = "block";
							document.body.style.overflow = "hidden";
							// document.body.classList.add('modal-open');
					});
			});

			close.forEach(item => {
				item.addEventListener('click', () => {
				console.log(windows);
					windows.forEach(item => {
							item.style.display = 'none';
					});

					modal.style.display = "none";
					document.body.style.overflow = "";
					// document.body.classList.remove('modal-open');
				});
			});

			modal.addEventListener('click', (e) => {
					if (e.target === modal && closeClickOverlay) {
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
					document.querySelector(selector).style.display = 'block';
					document.body.style.overflow = "hidden";
			}, time);
	}

	bindModal('.button-design', '.popup-design', '.popup-close')
	// showModalByTime('.popup', 60000);
};

export default modals;