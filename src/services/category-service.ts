import { db } from "../database/mysql.config";
import { Category, CreateCategoryRequest, UpdateCategoryRequest } from "../model/category-model";
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

    static async update (request: UpdateCategoryRequest, id: number) {
        const validateRequest = await Validation.validate(CategoryValidation.UPDATE, request);
        await CategoryService.checkCategoryMustExsist(id);


        await db("categories").where("id", id).update({
            title: validateRequest.title,
            slug: validateRequest.slug,
        });

        const category = await CategoryService.checkCategoryMustExsist(id);
        return (category)
    }

    static async remove (id: number): Promise<string>{
        const response = await db("categories").where("id", id).del();
        if (!response) {
            return "Category not found"
        }
        return "OK"
    }
}