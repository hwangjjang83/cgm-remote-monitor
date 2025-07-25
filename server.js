/*
* cgm-remote-monitor - web app to broadcast cgm readings
* Copyright (C) 2014 Nightscout contributors.  See the COPYRIGHT file
* at the root directory of this distribution and at
* https://github.com/nightscout/cgm-remote-monitor/blob/master/COPYRIGHT
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published
* by the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 1337);

// Fix for Juggluco: redirect /api/v1/entries to /api/v1/entries.json
app.use('/api/v1/entries', (req, res, next) => {
  if (!req.path.endsWith('.json')) {
    return res.redirect('/api/v1/entries.json');
  }
  next();
});

'use strict';

require('./lib/server/server');

