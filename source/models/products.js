// Instruments
import { products} from '../odm';
import { BaseModel } from './';

export class Products extends BaseModel {
    constructor(data) {
        super(data);
        this.model = products;
    }
}
