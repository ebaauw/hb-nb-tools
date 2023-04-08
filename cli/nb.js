#!/usr/bin/env node

// nb.js
//
// Command line interface to Nuki bridge HTTP API.
// Copyright © 2018-2023 Erik Baauw. All rights reserved.

'use strict'

const { NbTool } = require('../index')

new NbTool(require('../package.json')).main()
