import express from 'express';
import { ConnectionService } from '@services/ConnectionService';
import { routes } from './router';

const PORT = 3333;

const app = express();

ConnectionService.connect();

app.use(express.json(), routes)

app.listen(PORT, () => { console.log(`API running in port: ${PORT}`) });