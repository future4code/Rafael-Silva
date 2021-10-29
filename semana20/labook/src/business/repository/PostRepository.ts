import { PostInterface } from '../../models/interfaces/PostInterface';
import { Post } from '../../models/Post';

export interface PostRepository {
    create(post: Post): Promise<PostInterface | boolean>;
}