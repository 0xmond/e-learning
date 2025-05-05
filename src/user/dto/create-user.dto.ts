import { IsEmail, IsEnum,IsNotEmpty,IsOptional,IsString, IsArray,  MinLength} from 'class-validator'
  

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullName: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(6)
    password: string

    @IsEnum(['student', 'instructor', 'admin'])
    role: 'student' | 'instructor' | 'admin'

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    skills?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    qualifications?: string[]

    @IsOptional()
    @IsString()
    bio?: string

    @IsOptional()
    @IsString()
    profilePicture?: string
}
