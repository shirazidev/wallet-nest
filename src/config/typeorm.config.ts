import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeOrmDbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    database: "wallet",
    port: 5432,
    host: "localhost",
    username: "",
    password: "",
    synchronize: true,
    entities: [
      'dist/**/**/**/*.entity{.ts,.js}',
      'dist/**/**/*.entity{.ts,.js}',
    ],
  };
}