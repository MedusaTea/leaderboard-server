import { pool } from './connection.mjs';

// Function to run a query with optional transaction support
export async function Query(queryString, queryParams = [], connection = null) {
  let conn;

  try {
    // If no connection is passed, get a new one from the pool
    conn = connection || await pool.getConnection();

    // Log the query and parameters for debugging purposes
    console.log('Executing query:', queryString, 'with params:', queryParams);

    // Execute the query
    const res = await conn.query(queryString, queryParams);

    // Log the result for debugging purposes
    console.log('Query result:', res);

    // Return the result of the query
    return res;
  } catch (error) {
    // Log the error with a more descriptive message
    console.error('Error executing query:', error.message || error);

    // Reject with the error so the calling function can handle it
    throw new Error(error.message || 'An error occurred while executing the query.');
  } finally {
    // If we opened a connection, release it (but only if it's not provided by the caller)
    if (!connection && conn) {
      conn.release();
    }
  }
}

// Function to begin a transaction (get a connection and start the transaction)
export async function beginTransaction() {
  const connection = await pool.getConnection();
  await connection.beginTransaction();
  return connection; // Return the connection to use for queries in the transaction
}

// Function to commit a transaction
export async function commitTransaction(connection) {
  await connection.commit();
  connection.release();
}

// Function to rollback a transaction
export async function rollbackTransaction(connection) {
  await connection.rollback();
  connection.release();
}

