import { Injectable, Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constant';
import { User } from 'src/core/models/User.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async createUser(user: UserDto): Promise<User> {
    console.log(
      '🚀 ~ file: users.service.ts:18 ~ UsersService ~ createBook ~ user:',
      user,
    );
    return this.userRepository.create<User>({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      address: user.address,
      imgUrl: user.imgUrl,
    });
  }
}
