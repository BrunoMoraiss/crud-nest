import { IsString, Length} from "class-validator"


export class CreateCoursesDto {
    @IsString()
    @Length(5, 20)
    readonly name: string
    @IsString()
    readonly description: string
    @IsString({each: true})
    readonly tags: string []
}