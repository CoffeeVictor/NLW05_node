import express from 'express';
import './database';
import { routes } from './routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
	console.log(`Connecter to socket. Id: ${socket.id}`);
});

const PORT = 3333;

app.use(express.json());

app.use(routes);

http.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
