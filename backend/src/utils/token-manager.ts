import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { COOKIE_NAME } from './constants.js';

export const createToken = (id: string, email: string, expiresIn: string) => {
    const payLoad = {id, email};
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    console.log(token);
}
