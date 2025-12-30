/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    getCategories(): string[] {
        return ['Electronics', 'Books', 'Clothing', 'Home Appliances'];
    }

    
}
