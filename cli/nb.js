#!/usr/bin/env node

// nb.js
//
// Command line interface to Nuki bridge HTTP API.
// Copyright © 2018-2025 Erik Baauw. All rights reserved.

import { createRequire } from 'node:module'

import { NbTool } from 'hb-nb-tools/NbTool'

const require = createRequire(import.meta.url)
const packageJson = require('../package.json')

new NbTool(packageJson).main()
