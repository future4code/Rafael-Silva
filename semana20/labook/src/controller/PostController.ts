import { Request, Response } from 'express';
import { GetPostByIdDTO, PostCreateDTO } from '../business/interfacesDTOs/PostInterfaceDTO';

// business
import { PostBusiness} from '../business/PostBusiness';

// data access
import { PostData } from '../data/PostData';


export class PostController {
    private postBusiness: PostBusiness;

    constructor() {
        this.postBusiness = new PostBusiness(new PostData());
    }

    public createPostController = async (req: Request, res: Response): Promise<void> =>  {
        try {
            const token = req.headers.token as string;
            const input: PostCreateDTO = {
                title: req.body.title,
                subtitle: req.body.subtitle,
                content: req.body.content,
                type: req.body?.type,
                photo: req.body?.photo
            }

            const post = await this.postBusiness.createPostBusiness(input, token);

            if (post) {
                res.status(200).send({
                    message: 'Post created'
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

    public getPostByIdController = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.token as string;
            const input: GetPostByIdDTO = {
                id: req.params.id
            }

            const post = await this.postBusiness.getPostByIdBusiness(input, token);

            if (post) {
                res.status(200).send(post);
            } else {
                res.status(400).send({
                    message: 'Post not found',
                });
            }

        } catch (e) {
            const error = e as Error;
            console.log(error.message);
            res.send({ message: error.message });
        }
    }
}