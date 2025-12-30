/* eslint-disable prettier/prettier */
import { Controller ,Get,Post,Put ,Patch,Delete,Param,Body} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
// eslint-disable-next-line prettier/prettier
export class StudentController {

    constructor(private readonly studentService: StudentService) {

    }
    @Get()
    getAllStudents() {
        return this.studentService.getStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id:string){
        return this.studentService.getStudentById(Number(id));
    }


@Post()
    addStudent(@Body() body:{name:string,age:number}){
        return this.studentService.addStudent(body);
    }

    @Put(":id")
    updateStudent(@Param('id') id:string,@Body() body:{name:string,age:number}){

        return this.studentService.updateStudent(Number(id),body);

    }

    @Delete(":id")
    deleteStudent(@Param('id') id:string){
        return this.studentService.deleteStudent(Number(id));
    }
   
}
