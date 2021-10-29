import { Request, Response } from 'express';
import { PostCreateDTO } from '../business/interfacesDTOs/PostInterfaceDTO';

// business
import { PostBusiness} from '../business/PostBusiness';

// data access
import { PostData } from '../data/PostData';


export class PostController {
    private postBusiness: PostBusiness;

    constructor() {
        this.postBusiness = new PostBusiness(new PostData());
    }

    public async createPostController (req: Request, res: Response) {
        try {
            const token = req.headers.token as string;
            const input: PostCreateDTO = {
                title: req.body.title,
                subtitle: req.body.subtitle,
                content: req.body.content,
                type: req.body.type,
                photo: req.body.photo
            }

            const post = await this.postBusiness.createPostBusiness(input, token);

            if (post) {
                res.status(200).send({
                    message: 'Post created',
                    post
                });
            } else {
                res.status(400).send({
                    message: 'Post not created',
                });
            }

        } catch (e) {
            const error = e as Error;
            console.log(error.message);
            res.send({ message: error.message });
        }
    }
}