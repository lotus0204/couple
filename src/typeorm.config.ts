import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dev',
  password: 'mildangdev1357',
  database: 'couple',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  // migrations: ["dist/migrations/*{.ts,.js}"],
  // migrationsTableName: "migrations", // migration 내용이 기록될 테이블명(default = migration)
};

export default config;
//**https://stackoverflow.com/questions/42880479/cant-connect-to-mysql-container-from-localhost*/