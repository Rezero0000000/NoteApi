import { Request } from "hyper-express";
import { User } from "../model/user-model";

export interface UserRequest extends Request {
    user?: User;
}