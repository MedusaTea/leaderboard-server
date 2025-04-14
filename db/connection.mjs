import 'dotenv/config'
import mariadb from 'mariadb';

export const pool = mariadb.createPool({
  host: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_U,
  password: process.env.SQL_P,
  connectionLimit: 10, // Maximum number of connections in the pool
  connectTimeout: 10000, // Timeout in milliseconds
  acquireTimeout: 10000, // Timeout for acquiring a connection
});

// Close the pool when the application is shutting down
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) {
      console.error('Error closing the pool:', err.stack);
      return;
    }
    console.log('Pool closed.');
    process.exit(0);
  });
});


