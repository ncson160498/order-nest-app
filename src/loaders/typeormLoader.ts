import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'nestjs',
      // entities: ['dist/**/*.entity.js'],
      synchronize: false,
      // migrations: ['dist/db/migrations/*.js'],
      autoLoadEntities: true,
      extra: {
        isolation: 'READ COMMITTED',
        // poolSize: 20,
        // connectionTimeoutMillis: 5000,
        // query_timeout: 5000,
        // statement_timeout: 5000,
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class TypeormLoader {}
