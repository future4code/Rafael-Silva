import BaseDatabase from './BaseDatabase';
import Product from '../models/Product';

export default class ProductDatabase extends BaseDatabase {
    // eslint-disable-next-line class-methods-use-this
    async create(product: Product): Promise<boolean> {
        try {
            await BaseDatabase.connection('Product').insert({
                id: product.getId(),
                name: product.getName(),
                description: product.getDescription(),
                price: product.getPrice(),
                created_at: product.getCreated(),
                updated_at: product.getUpdated(),
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
