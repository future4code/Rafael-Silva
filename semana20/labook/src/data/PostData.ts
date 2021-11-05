// database
import Database from './Database';

// models
import { PostRepository } from '../business/repository/PostRepository';
import { PostInterface } from '../models/interfaces/PostInterface';
import { Post } from '../models/Post';

// helpers
import { dateFmt, dateFmtYmd } from '../utils/helpers';

export class PostData extends Database implements PostRepository {
    constructor() {
        super('labook_posts');
    }

    public async getPostById(id: string): Promise<object | boolean> {
        try {
            const post = await Database.connection(this.tableName)
                .select('*')
                .where({ id })
                .first();

            if (post) {
                return {
                    id: post.id,
                    authorId: post.author_id,
                    title: post.title,
                    subtitle: post.subtitle,
                    content: post.content,
                    photo: post.photo,
                    type: post.type,
                    created_at: dateFmt(post.created_at),
                };
            }

            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

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
                created_at: dateFmtYmd(post.getCreatedAt()),
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}