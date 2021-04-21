import express from 'express';
import './database';

const app = express();

const PORT = 3333;

app.get('/', (request, response) => {
	return response.json({
		message: 'Olá NLW05!',
	});
});

app.post('/users', (request, response) => {
	return response.json({
		message: 'Usuário salvo com sucesso!',
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
