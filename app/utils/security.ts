import crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

const prefix = 'cer1';
const subfix = 'argentina';
const secret = 'conference2018..!';

export function encriptPassword(pwd: string) {
    const paswordComplete = subfix + pwd + prefix;
    const hash = crypto.createHash('sha256').update(paswordComplete).digest('base64');
    return hash;
}

export function generateToken(data: any, expiration: string = '24h') {
    const token = jwt.sign(data, secret, { expiresIn: expiration });
    return token;
}
