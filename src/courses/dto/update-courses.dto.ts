import { PartialType } from "@nestjs/mapped-types"
import { CreateCoursesDto } from "./create-courses.dto"

export class UpdateCoursesDto extends PartialType(CreateCoursesDto) {}
