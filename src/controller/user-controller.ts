import { Request, Response } from "hyper-express";
import { CreateUserRequest, Login, UpdateUserRequest } from "../model/user-model";
import { UserService } from "../services/user-service";
import { UserRequest } from "../type/user-request";

export class UserController {
    static async register(req: Request, res: Response) {
        try {
            const request:  CreateUserRequest = await req.json() as CreateUserRequest;
            const response = await UserService.register(request, res);

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
 
    static async login (req: Request, res: Response) {
        try {
            const request: Login = await req.json() as Login;
            const response = await UserService.login(request, res);
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

    
    static async logout (req: UserRequest, res: Response) {
        try {
            const userId = req.user!.id
            const response = await UserService.logout(userId, res);
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

    static async get (req: UserRequest, res: Response) {
        try {
            const userId = req.user!.id
            const response = await UserService.get(userId, res);

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

    
    static async update(req: UserRequest, res: Response) {
        try {
            const request:  UpdateUserRequest = await req.json() as UpdateUserRequest;
            const userId = req.user!.id

            const response = await UserService.update(request, userId, res);
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