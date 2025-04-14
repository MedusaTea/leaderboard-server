import { Query } from '../query.mjs';

export async function GetLeaderboard(id) {
  try {
    const result = await Query(`
      SELECT *
      FROM records
      WHERE leaderboard_id = ?
      ORDER BY score
      DESC
      LIMIT 10`, id)

    return result.length > 0 ? result : [];

  } catch (error) {
    return {
      error: error.message || 'An unexpected error occurred',
    };
  }
}

export async function AddToLeaderboard(id, score, username) {
  try {
    const result = await Query(`
      INSERT INTO
      records (leaderboard_id, username, score) VALUES (?, ?, ?)`, [id, username, score])

    return result.length > 0 ? result : [];

  } catch (error) {
    return {
      error: error.message || 'An unexpected error occurred',
    };
  }
}
