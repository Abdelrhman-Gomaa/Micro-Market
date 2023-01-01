import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    UseGuards, 
    ValidationPipe 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from './decorators/get.user.decorator';
import { CreateUserDto } from './dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { User } from './entity/userEntity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get()
    async findAll(){
        return await this.userService.findAll()
    }

    @Post('/register')
    async register(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return await this.userService.register(createUserDto)
    }

    @Post('/login')
    async login(@Body(ValidationPipe) loginUserDto: LoginUserDto): Promise<{accessToken: string}>{
        return await this.userService.signIn(loginUserDto)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    //@UseGuards(IsAdminGuard)
    async test(@GetUser() user: User){
        console.log(user)
    }

    
    //@Patch()
    //@Delete()
}
