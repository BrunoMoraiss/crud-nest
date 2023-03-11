import { Controller} from '@nestjs/common';
import { Body, Get, Param, Post, Patch, Delete } from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}
    
    @Get()
    findAll(){
        return this.coursesService.findAll()
    }

    @Get(':id')
    findOne(
        @Param('id') id: string
    ){
        return this.coursesService.findOne(id)
    }

    @Post()
    create(@Body() createCourseDto: CreateCoursesDto){
        return this.coursesService.create(createCourseDto)
    }

    @Patch(':id')
    update(@Param("id") id: string, @Body() updateCourseDto: UpdateCoursesDto){
        return this.coursesService.update(id, updateCourseDto)
    }

    @Delete(':id')
    delete(
        @Param('id') id: string
    ){
        return this.coursesService.delete(id)
    }
}
