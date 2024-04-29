// import { MiddlewareNext, Request, Response } from "hyper-express";
// import { ResponseError } from "../error/response-error";
// import { ZodError } from "zod";

// export const ErrorMiddleware = async (error: Error, req: Request, res: Response, next: MiddlewareNext) => {
//         if (error instanceof ZodError) {
//             res.status(400).json({
//                 errors: `validation error : ${JSON.stringify(error.message)}`
//             });
//         }
//         else if (error instanceof ResponseError) {
//              res.status(error.status).json({
//                 errors: error.message
//             });
//             return 0;

//         }
//         else {
//              res.status(500). json({
//                 errors: error.message
//             });
//             return 0;

//         }
// }