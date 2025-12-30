/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {


    getEmployee(): string {
        return 'This action returns all employees from the service';
    }

    
}
