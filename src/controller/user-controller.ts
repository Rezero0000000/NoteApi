import { Request, Response } from "hyper-express";
import { CreateUserRequest } from "../model/user-model";
import { UserService } from "../services/user-service";

export class UserController {
    static async create(req: Request, res: Response) {
        try {
            const request:  CreateUserRequest = await req.json() as CreateUserRequest;
            const response = await UserService.create(request);
            res.status(200).json({
                data: response
            })
        }
        catch (e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async get (req: Request, res: Response) {
        try {
            const userId = Number(req.params.userId);
            const response = await UserService.get(userId);

            res.status(200).json({
                data: response
            })
        }
        catch (e) {
            res.status(400).json({
                error: e
            })
        }

    }
}