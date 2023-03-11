import { HttpException, HttpStatus, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';
import { Course } from './entities/course.entitty'

@Injectable()
export class CoursesService {
    constructor( @InjectRepository(Course) private readonly courseRepository: Repository<Course>) {}

    findAll(){
        return this.courseRepository.find()
    }

    async findOne(id: string){

        const course =  await this.courseRepository.findOne({where: {id: Number(id)}})

        if(!course){
            throw new HttpException(`Curso referente ao ID ${id}, não encontrado`, HttpStatus.BAD_REQUEST)
        }

        return course

    }

    async create(createCourseDto: CreateCoursesDto){

        const course = this.courseRepository.create(createCourseDto)

        await this.courseRepository.save(course)

        throw new HttpException('Cadastardo', HttpStatus.CREATED)
    }

    async update(id: string, updateCourseDto: UpdateCoursesDto){
        const course = await this.courseRepository.preload({
            id: Number(id),
            ... updateCourseDto
        })

        if(!course){
            throw new NotFoundException(`Curso ${id} não encontrados`)
        }

        return this.courseRepository.save(course)

    }   

    async delete(id: string){
        const course = await this.courseRepository.findOne({where: {id: Number(id)}})

        if(!course){
            throw new NotFoundException(`Curso ${id} não encontrado`)
        }

        return this.courseRepository.remove(course)
    }
}
