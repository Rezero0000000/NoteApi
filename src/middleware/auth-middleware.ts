import { Response, MiddlewareNext } from "hyper-express";
import { UserRequest } from "../type/user-request";
import { db } from "../database/mysql.config";

export const authMiddleware = async (req: UserRequest, res: Response, next: MiddlewareNext) => {
    const token = req.get('X-API-TOKEN');

    if (token) {
        const user = await db("users").where("token", token).first();

        if (user) {
            req.user = user;
            next();
            return;
        }
    }

    res.status(401).json({
        errors: "Unauthorized"
    });
    res.end()
}