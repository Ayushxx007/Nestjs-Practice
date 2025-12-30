/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students=[
        {id:1,name:'John Doe',age:20},
        {id:2,name:'Jane Smith',age:22},
        {id:3,name:'Mike Johnson',age:19}
    ]

    getStudents(){
        return this.students;
    }

    getStudentById(id:number){
        const student= this.students.find(student=>student.id===id);
        if(!student){
            throw new NotFoundException('Student not found');
        }

        return student;
    }

    addStudent(data:{name:string,age:number}){
        const newStudent={
            id:this.students.length+1,
            ...data
        };

        this.students.push(newStudent);
        return newStudent;

    }

    updateStudent(id:number, data:{name?:string,age?:number}){
        const student= this.getStudentById(id);
        if(!student){
            throw new NotFoundException('Student not found');
        }
        if(data.name){
            student.name=data.name;
        }
        if(data.age){
            student.age=data.age;
        }

        return student;
     
    }

    deleteStudent(id:number){
        const index= this.students.findIndex(student=>student.id===id);
        if(index===-1){
            throw new NotFoundException('Student not found');
        }

        const deletedStudent=this.students.splice(index,1);
        return deletedStudent[0];
    }





}

