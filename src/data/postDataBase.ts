import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

  createPost = async (post: post) => {
      await BaseDatabase.connection("labook_posts")
          .insert({
              id: post.id,
              photo: post.photo,
              description: post.description,
              type: post.type,
              created_at: post.createdAt,
              author_id: post.authorId
          })
  }

  getPostbyId = async (id: string): Promise<any> => {
      const queryResult = await BaseDatabase.connection("labook_posts")
          .select("*")
          .where({ id })
      
      return queryResult[0]
  }
}