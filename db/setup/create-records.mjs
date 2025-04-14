import { Query } from '../query.mjs';

export function CreateRecords () {
  return Query(`CREATE TABLE records (
      id INT AUTO_INCREMENT PRIMARY KEY,

      leaderboard_id INT(11) NOT NULL,
      score INT(11) NOT NULL,
      username VARCHAR(63) NOT NULL,

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP NULL DEFAULT NULL
  )`);
};
