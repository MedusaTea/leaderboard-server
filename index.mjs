import http from 'http'
import fs from 'fs'

import app from './app.mjs'
import './api/leaderboard.mjs'

const port = 4000

const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log('HTTPS server listening on port ' + port);
});
