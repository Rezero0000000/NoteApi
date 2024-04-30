import { Response } from "hyper-express";
import { db } from "../database/mysql.config";
import { CreateUserRequest, Login, ToUserResponse, UpdateUserRequest, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import { v4 as uuid  } from "uuid";

export class UserService {  
    static async register(request: CreateUserRequest, res: Response): Promise<UserResponse> {

        const validateRequest = await Validation.validate(UserValidation.CREATE, request);
        validateRequest.password = await bcrypt.hash(validateRequest.password, 10);

        const isUsernameUsed = await db("users").where("username", validateRequest.username).first();
        const isEmailUsed = await db("users").where("email", validateRequest.email).first();
        if (isUsernameUsed) {
            res.status(400).json({
                message: "Username is already use"
              })
              res.end();
        } else if (isEmailUsed) {
            res.status(400).json({
                message: "Email is already use"
              })
              res.end();
        }

        const dataId = await db("users").insert({
            name: validateRequest.name,
            username: validateRequest.username,
            email: validateRequest.email,
            password: validateRequest.password 
        });

        const user = await UserService.checkUserMustExsist(dataId[0], res);
        return ToUserResponse(user)
    }

    static async login(request: Login, res: Response): Promise<UserResponse> {
        const validateRequest = await Validation.validate(UserValidation.LOGIN, request);
        const email = await db("users").where("email", validateRequest.email).first();

        if (!email) {
          res.status(400).json({
            message: "Email or password is wrong"
          })
          res.end();
        }

        const password = await bcrypt.compare(validateRequest.password, email.password);
        if (!password) {
            res.status(400).json({
                message: "Email or password is wrong"
            })
            res.end();
          }

        const token = uuid();
        await db("users").where("email", validateRequest.email).update({
            token: token
        });
        const user = await db("users").where("email", validateRequest.email).first();
        user.token = token;
        return user;
    }


    static async logout (userId: number, res: Response): Promise<string> {
        await UserService.checkUserMustExsist(userId, res);
        await db("users").where("id", userId).update({
            token: null
        });
        
        return "OK"
    }

    static async checkUserMustExsist (id: number, res: Response) {
        const user = await db("users").where("id", id).first();
        if (!user) {
            res.status(404).json({
                message: "User not found"
            })
            res.end();
        }
        return user
    }

    static async get (id: number, res: Response): Promise<UserResponse> {
        const user = await UserService.checkUserMustExsist(id, res);
        return ToUserResponse(user);
    }

    static async update(request: UpdateUserRequest, id: number, res: Response): Promise<UserResponse> {
        const validateRequest = await Validation.validate(UserValidation.UPDATE, request);
        await db("users").where("id", id).update({
            name: validateRequest.name,
            username: validateRequest.username,
            email: validateRequest.email,
            password: validateRequest.password 
        });

        const user = await UserService.checkUserMustExsist(id, res);
        return ToUserResponse(user)
    }
}