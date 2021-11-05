import { PostInterface } from '../../models/interfaces/PostInterface';
import { Post } from '../../models/Post';

export interface PostRepository {
    getPostById(id: string): Promise<object | boolean>;
    create(post: Post): Promise<PostInterface | boolean>;
}