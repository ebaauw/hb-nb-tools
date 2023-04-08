// hb-nb-tools/index.js
//
// Homebridge NB Tools.
// Copyright © 2017-2023 Erik Baauw. All rights reserved.

'use strict'

/** Homebridge NB Tools.
  *
  * @module hbNbTools
  */
class hbNbTools {
  /** Colour conversions.
    * <br>See {@link NbClient}.
    * @type {Class}
    * @memberof module:hbNbTools
    */
  static get NbClient () { return require('./lib/NbClient') }

  /** Parser and validator for command-line arguments.
    * <br>See {@link NbDiscovery}.
    * @type {Class}
    * @memberof module:hbNbTools
    */
  static get NbDiscovery () { return require('./lib/NbDiscovery') }

  /** Command-line tool.
    * <br>See {@link NbListener}.
    * @type {Class}
    * @memberof module:hbNbTools
    */
  static get NbListener () { return require('./lib/NbListener') }

  // Command-line tools.
  static get NbTool () { return require('./lib/NbTool') }
}

module.exports = hbNbTools
