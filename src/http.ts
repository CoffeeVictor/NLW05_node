import express, { request } from 'express';
import './database';
import { routes } from './routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { renderFile } from 'ejs';
import path from 'path';

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
	console.log(`Connected to socket. Id: ${socket.id}`);
});

app.use(express.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.set('views', publicPath);
app.engine('html', renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (request, response) => {
	return response.render('html/client.html');
});

app.use(routes);

export { http, io };
