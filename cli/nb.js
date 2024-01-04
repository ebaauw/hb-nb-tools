#!/usr/bin/env node

// nb.js
//
// Command line interface to Nuki bridge HTTP API.
// Copyright © 2018-2024 Erik Baauw. All rights reserved.

'use strict'

const { NbTool } = require('../index')
const pkgJson = require('../package.json')

new NbTool(pkgJson).main()
