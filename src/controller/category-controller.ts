import { Request, Response } from "hyper-express";
import { CreateCategoryRequest } from "../model/category-model";
import { CategoryService } from "../services/category-service";

export class CategoryController {
    static async create (req: Request, res: Response) {
        try {
            const request: CreateCategoryRequest = await req.json() as CreateCategoryRequest;
            const response = await CategoryService.create(request);

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
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.get(categoryId);
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