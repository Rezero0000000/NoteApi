import { CreateCategoryRequest, UpdateCategoryRequest } from "../model/category-model";
import { CategoryValidation } from "../validation/category-validation";
import { Validation } from "../validation/validation";
import { db } from "../database/mysql.config";
import { Response } from "hyper-express";

export class CategoryService {
    static async create (request: CreateCategoryRequest, res: Response) {
        const ValidateRequest = await Validation.validate(CategoryValidation.CREATE, request);  
        const dataId = await db("categories").insert({
            title: ValidateRequest.title,
            slug: ValidateRequest.slug,
        });

        const category = await CategoryService.checkCategoryMustExsist(dataId[0], res);
        return (category)
    }

    static async checkCategoryMustExsist (id: number, res: Response) {
        const category = await db("categories").where("id", id).first();
        if (!category) {
            res.status(404).json({
                message: "Category is not found"
              })
              res.end();
        }
        return category
    }

    static async get (id: number, res: Response) {
        const category = await CategoryService.checkCategoryMustExsist(id, res);
        return category
    }

    static async update (request: UpdateCategoryRequest, id: number, res: Response) {
        const validateRequest = await Validation.validate(CategoryValidation.UPDATE, request);
        await CategoryService.checkCategoryMustExsist(id ,res);


        await db("categories").where("id", id).update({
            title: validateRequest.title,
            slug: validateRequest.slug,
        });

        const category = await CategoryService.checkCategoryMustExsist(id, res);
        return (category)
    }

    static async remove (id: number, res: Response): Promise<string>{
        const response = await db("categories").where("id", id).del();
        if (!response) {
            res.status(400).json({
                message: "Failed"
              })
              res.end();
        }
        return "OK"
    }
}