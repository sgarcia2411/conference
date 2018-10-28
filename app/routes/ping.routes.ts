import express from 'express';
import { PingController } from '../controllers/ping.controller';

const router = express.Router();

const pingController = new PingController();

router.get('/', pingController.ping);

export const PingRoute: express.Router = router;
