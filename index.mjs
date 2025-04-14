import http from 'http'
import fs from 'fs'

import app from './app.mjs'
import './api/leaderboard.mjs'

const port = 3008

app.get('/', (req, res) => {
  console.log('oh hai')

  res.send('oh hai!')
})

//app.use((req, res, next) => {
//  console.log(`Incoming: ${req.method} ${req.url}`);
//  next();
//});

const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log('HTTPS server listening on port ' + port);
});
