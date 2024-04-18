// hb-nb-tools/index.js
//
// Homebridge NB Tools.
// Copyright © 2017-2024 Erik Baauw. All rights reserved.

/** Homebridge NB Tools.
  *
  * @module hbNbTools
  */

/** Nuki bridge HTTP API client.
  * <br>See {@link NbClient}.
  * @name NbClient
  * @type {Class}
  * @memberof module:hbNbTools
  */
export { NbClient } from './lib/NbClient.js'

/** Parser and validator for command-line arguments.
  * <br>See {@link NbDiscovery}.
  * @name NbDiscovery
  * @type {Class}
  * @memberof module:hbNbTools
  */
export { NbDiscovery } from './lib/NbDiscovery.js'

/** Command-line tool.
  * <br>See {@link NbListener}.
  * @name NbListener
  * @type {Class}
  * @memberof module:hbNbTools
  */
export { NbListener } from './lib/NbListener.js'

// Command-line tools.
export { NbTool } from './lib/NbTool.js'
