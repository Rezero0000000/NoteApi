import { db } from "../database/mysql.config";
import { CreateUserRequest, Login, ToUserResponse, UpdateUserRequest, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import { v4 as uuid  } from "uuid";

export class UserService {  
    static async register(request: CreateUserRequest): Promise<UserResponse> {
        const validateRequest = await Validation.validate(UserValidation.CREATE, request);
        validateRequest.password = await bcrypt.hash(validateRequest.password, 10);
        const dataId = await db("users").insert({
            name: validateRequest.name,
            username: validateRequest.username,
            email: validateRequest.email,
            password: validateRequest.password 
        });

        const user = await UserService.checkUserMustExsist(dataId[0]);
        return ToUserResponse(user)
    }

    static async login(request: Login): Promise<UserResponse> {
        const validateRequest = await Validation.validate(UserValidation.LOGIN, request);

        const email = await db("users").where("email", validateRequest.email).first();
        if (!email) {
            console.log("Email salah")
        }

        const password = await bcrypt.compare(validateRequest.password, email.password);
        if (!password) {
            console.log("Password salah")
        }

        const token = uuid();
        const dataId = await db("users").where("email", validateRequest.email).update({
            token: token
        });
        const user = await db("users").where("email", validateRequest.email).first();
        user.token = token;
        return user;
    }

    static async checkUserMustExsist (id: number) {
        const user = await db("users").where("id", id).first();
        if (!user) {
            console.log("Not found")
            return 0
        }
        return user
    }

    static async get (id: number): Promise<UserResponse> {
        const user = await UserService.checkUserMustExsist(id);
        return ToUserResponse(user);
    }

    static async update(request: UpdateUserRequest, id: number): Promise<UserResponse> {
        const validateRequest = await Validation.validate(UserValidation.UPDATE, request);
        const dataId = await db("users").where("id", id).update({
            name: validateRequest.name,
            username: validateRequest.username,
            email: validateRequest.email,
            password: validateRequest.password 
        });

        const user = await UserService.checkUserMustExsist(id);
        return ToUserResponse(user)
    }
}