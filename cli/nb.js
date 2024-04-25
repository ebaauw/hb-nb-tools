#!/usr/bin/env node

// nb.js
//
// Command line interface to Nuki bridge HTTP API.
// Copyright © 2018-2024 Erik Baauw. All rights reserved.

import { NbTool } from 'hb-nb-tools/NbTool'

new NbTool(import.meta.dirname).main()
