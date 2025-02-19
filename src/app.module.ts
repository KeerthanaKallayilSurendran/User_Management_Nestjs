import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // get env variables
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true
    }),
    // connect mongodb
    MongooseModule.forRoot(process.env.CONNECTIONSTRING||''),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
