import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/modules/database/database.module';
import { UsersModule } from './core/modules/users/users.module';
import { AuthModule } from './core/modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    /*  PostsModule, */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
