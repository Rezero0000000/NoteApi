import { Request, Response } from "hyper-express";
import { CreateCategoryRequest, UpdateCategoryRequest } from "../model/category-model";
import { CategoryService } from "../services/category-service";
import { UserRequest } from "../type/user-request";

export class CategoryController {
    static async create (req: UserRequest, res: Response) {
        try {
            const request: CreateCategoryRequest = await req.json() as CreateCategoryRequest;
            const response = await CategoryService.create(request, res);

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
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.get(categoryId, res);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    
    static async update (req: UserRequest, res: Response) {
        try {
            const request: UpdateCategoryRequest = await req.json() as UpdateCategoryRequest;
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.update(request, categoryId, res);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    
    static async remove (req: UserRequest, res: Response) {
        try {
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.remove(categoryId, res);
            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

}