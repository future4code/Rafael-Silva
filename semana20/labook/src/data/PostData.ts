// database
import Database from './Database';

// models
import { PostRepository } from '../business/repository/PostRepository';
import { PostInterface } from '../models/interfaces/PostInterface';
import { Post } from '../models/Post';

// helpers
import { dateFmtYmd } from '../utils/helpers';

export class PostData extends Database implements PostRepository {
    constructor() {
        super('labook_posts');
    }

    public async create(post: Post): Promise<PostInterface | boolean> {
        try {
            await Database.connection(this.tableName).insert({
                id: post.getId(),
                author_id: post.getAuthorId(),
                title: post.getTitle(),
                subtitle: post.getSubtitle(),
                photo: post.getPhoto(),
                content: post.getContent(),
                type: post.getType(),
                create_at: dateFmtYmd(post.getCreatedAt()),
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}