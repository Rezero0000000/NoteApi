import { Request, Response } from "hyper-express";
import { CreateCategoryRequest, UpdateCategoryRequest } from "../model/category-model";
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

    
    static async update (req: Request, res: Response) {
        try {
            const request: UpdateCategoryRequest = await req.json() as UpdateCategoryRequest;
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.update(request, categoryId);
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

    
    static async remove (req: Request, res: Response) {
        try {
            const categoryId = Number(req.params.categoryId);
            const response = await CategoryService.remove(categoryId);
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