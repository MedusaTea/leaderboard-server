import app from '../app.mjs'
import { isProfane } from 'no-profanity';

import {
  GetLeaderboard,
  AddToLeaderboard,
} from '../db/actions/leaderboard.mjs';

app.get('/leaderboard/:leaderboardId', async (req, res) => {
  const { leaderboardId } = req.params

  const result = await GetLeaderboard(leaderboardId);
  if (result.error) {
    return res.status(500).json({
      error: 'Failed to fetch leaderboard',
      message: '',
    });
  }

  return res.status(200).json({
    'leaderboard': result,
  });
})

app.post('/leaderboard', async (req, res) => {
  const { leaderboardId, username, score } = req.body

  const addResult = await AddToLeaderboard(leaderboardId, username, score);
  if (addResult.error) {
    return res.status(500).json({
      error: 'Failed to add',
      message: '',
    });
  }

  return res.status(200).json({
    'success': true,
  });
})

