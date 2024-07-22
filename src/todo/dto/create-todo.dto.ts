import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {

    @IsNotEmpty()
    @IsOptional()
    task: string

    @IsOptional()
    @IsString()
    description?: string
}

