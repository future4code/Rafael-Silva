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
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async getAllProducts(): Promise<Product[] | boolean> {
        try {
            const result = await BaseDatabase.connection('Product');

            return result;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }
}
