import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  entities: ['src/database/entities/*.{js,ts}'],
  // migrations: ['src/database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsTableName: 'migrations',
};

const datasource = new DataSource(options);
export default datasource;
