/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {


    getUsers(): string {
        return 'This action returns all users from the service';
    }

    getUserById(id: number): string {
        return `This action returns user with id: ${id}`;
    }

    



}
