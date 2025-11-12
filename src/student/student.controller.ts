import { StudentService } from './student.service';
import { Body, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import type { Student } from './student.model';
import { Param } from '@nestjs/common/decorators';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  readAllStudents(): Promise<any> {
    return this.studentService.readStudents();
  }

  @Post()
  async createStudent(@Body() student: Student): Promise<any> {
    var response = await this.studentService.createStudent(student);
    return { id: response };
  }

  @Patch()
  async updateStudent(@Body() student: Student) {
    await this.studentService.updateStudent(student);
  }

  @Delete(':tia')
  async deleteStudent(@Param('tia') tia: number) {
    await this.studentService.deleteStudent(tia);
    return null;
  }

}
