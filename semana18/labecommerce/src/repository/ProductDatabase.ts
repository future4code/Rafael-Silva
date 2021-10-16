import Database from '../database/Database';
import Product from '../models/Product';

export default class ProductDatabase extends Database {
    // eslint-disable-next-line class-methods-use-this
    async create(product: Product): Promise<boolean> {
        try {
            await Database.connection('Product').insert({
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
            const result = await Database.connection('Product');

            return result;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return false;
        }
    }
}
