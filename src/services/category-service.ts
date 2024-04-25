import { db } from "../database/mysql.config";
import { Category, CreateCategoryRequest } from "../model/category-model";
import { CategoryValidation } from "../validation/category-validation";
import { Validation } from "../validation/validation";

export class CategoryService {
    static async create (request: CreateCategoryRequest) {
        const ValidateRequest = await Validation.validate(CategoryValidation.CREATE, request);         
        const dataId = await db("categories").insert({
            title: ValidateRequest.title,
            slug: ValidateRequest.slug,
        });

        const category = await CategoryService.checkCategoryMustExsist(dataId[0]);
        return (category)
    }

    static async checkCategoryMustExsist (id: number) {
        const category = await db("categories").where("id", id).first();
        if (!category) {
            console.log("Not found")
            return 0
        }
        return category
    }

    static async get (id: number) {
        const category = await CategoryService.checkCategoryMustExsist(id);
        return category
    }
}