import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      //'mongodb+srv://backluan:cebola083@cluster0.ij6yevh.mongodb.net/test',
      'mongodb://mongo:Np6g3Gw0ATn3CgqVftVt@containers-us-west-122.railway.app:7327',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
