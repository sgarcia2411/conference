import { Request, Response } from 'express';

export class PingController {

    constructor() { }

    public ping (req: Request, res: Response) {
        res.send('pong');
    }
}
