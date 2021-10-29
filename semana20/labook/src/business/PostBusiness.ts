// models
import { Post } from '../models/Post';
import AuthInterface from '../models/interfaces/AuthInterface';

// repository interface
import { PostRepository } from './repository/PostRepository';

// DTO's
import { PostCreateDTO, PostType } from './interfacesDTOs/PostInterfaceDTO';

// error message
import ErrorMessage from '../error/ErrorMessage';

// services
import Auth from '../services/Auth';
import { uuid } from '../utils/helpers';



export class PostBusiness {
    private postData: PostRepository;

    constructor(
        PostDatabaseImp: PostRepository
    ) {
        this.postData = PostDatabaseImp;
    }

    public async createPostBusiness(input: PostCreateDTO, token: string): Promise<object> {
        const tokenVerify = Auth.getTokenData(token) as AuthInterface;

        if (!tokenVerify) {
            throw new ErrorMessage(
                "Token inválido, expirado ou ausente da chave 'token' do cabeçalho",
                403
            );
        }

        const { title, subtitle, content, type, photo } = input;

        if (!title || !content || !type) {
            throw new ErrorMessage(
                'Todos os campos são obrigatórios',
                400
            );
        }

        if ((type in PostType) === false) {
            throw new ErrorMessage(
                'Tipo de post inválido',
                400
            );
        }

        const id = uuid();

        const newPost = new Post(
            id,
            tokenVerify.id,
            title,
            content,
            type,
            subtitle,
            photo
        );

        const result = await this.postData.create(newPost);

        if (result === false) {
            throw new ErrorMessage(
                'Erro ao criar post',
                500
            );
        } else {
            return { message: 'Post criado com sucesso' };
        }
    }
}
