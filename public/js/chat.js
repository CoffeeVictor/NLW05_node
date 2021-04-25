document.querySelector('#start_chat').addEventListener('click', event => {
	const chatHelp = document.getElementById('chat_help');
	chatHelp.style.display = 'none';

	const chatSupport = document.getElementById('chat_in_support');
	chatSupport.style.display = 'block';

	const email = document.getElementById('email').value;
	const text = document.getElementById('txt_help').value;

	const socket = io();
	socket.on('connect', () => {
		const params = {
			email,
			text,
		};
		socket.emit('client_first_access', params, (cb, err) => {
			if (err) {
				console.error(err);
			} else {
				console.log(cb);
			}
		});
	});
});
