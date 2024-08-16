// import { NextFunction, Request, Response } from "express";

// import { BlogPostService } from "../services";
// import logger from "../utils/winston";

// class BlogPostController {
//   constructor() {}

//   // ------------------ CREATE --------------------
//   async createBlogPost(req: Request, res: Response, next: NextFunction) {
//     try {
//       const response = await BlogPostService.createBlogPost(req.body);
//       return res.status(response.code).json(response);
//     } catch (error) {
//       logger.error(error);
//       next(error);
//     }
//   }

//   // ------------------ GET ALL --------------------

//   async getBlogPosts(req: Request, res: Response, next: NextFunction) {
//     try {
//       const response = await BlogPostService.getBlogPost();
//       return res.status(response.code).json(response);
//     } catch (error) {
//       logger.error(error);
//       next(error);
//     }
//   }

//   // ------------------ GET BY ID --------------------

//   async getBlogPostById(req: Request, res: Response, next: NextFunction) {
//     try {
//       const response = await BlogPostService.getBlogPostById(
//         req.params.id as any,
//       );
//       return res.status(response.code).json(response);
//     } catch (error) {
//       logger.error(error);
//       next(error);
//     }
//   }

//   // ------------------ UPDATE --------------------

//   async updateBlogPost(req: Request, res: Response, next: NextFunction) {
//     try {
//       const response = await BlogPostService.updateBlogPost(
//         req.params.id as any,
//         req.body,
//       );
//       return res.status(response.code).json(response);
//     } catch (error) {
//       logger.error(error);
//       next(error);
//     }
//   }

//   // ------------------ DELETE --------------------

//   async deleteBlogPost(req: Request, res: Response, next: NextFunction) {
//     try {
//       const response = await BlogPostService.deleteBlogPost(
//         req.params.id as any,
//       );
//       return res.status(response.code).json(response);
//     } catch (error) {
//       logger.error(error);
//       next(error);
//     }
//   }
// }

// export default new BlogPostController();
