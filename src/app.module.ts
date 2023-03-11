import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "56157469",
    database: 'typeOrm',
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
