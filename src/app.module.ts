import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { OdsModule } from './ods/ods.module';

// Responsável pela configuração geral
@Module({
  imports: [StudentModule, MongooseModule.forRoot('mongodb+srv://leticiamazzo:dBHdbQVxV2QyENXv@webmobile.sixo7z4.mongodb.net/?appName=webmobile'), OdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
