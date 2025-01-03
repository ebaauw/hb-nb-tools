// hb-nb-tools/lib/NbDiscovery.js
// Copyright © 2020-2025 Erik Baauw. All rights reserved.
//
// Homebridge NB Tools.

import { HttpClient } from 'hb-lib-tools/HttpClient'
import { OptionParser } from 'hb-lib-tools/OptionParser'

/** Nuki bridge discovery.
  * <br>See {@link NbDiscovery}.
  * @name NbDiscovery
  * @type {Class}
  * @memberof module:hb-nb-tools
  */

/** Class for discovery of Nuki bridges.
  *
  * See the [Nuki bridge HTTP API](https://developer.nuki.io/page/nuki-bridge-http-api-1-13/4)
  * documentation for a better understanding of the API.
  * @extends HttpClient
  */
class NbDiscovery extends HttpClient {
  constructor (params = {}) {
    const config = {
      timeout: 5
    }
    const optionParser = new OptionParser(config)
    optionParser.intKey('timeout', 1, 60)
    optionParser.parse(params)
    super({
      https: true,
      host: 'api.nuki.io',
      json: true,
      keepAlive: false,
      name: 'nuki server',
      path: '/discover',
      timeout: config.timeout
    })
    this.config = config
  }

  async discover () {
    const bridges = []
    const response = await super.get('/bridges')
    if (response == null) {
      return bridges
    }
    for (const bridge of response.body.bridges) {
      const client = new HttpClient({
        host: bridge.ip + ':' + bridge.port,
        path: '',
        timeout: this.config.timeout,
        validStatusCodes: [200, 401]
      })
      client
        .on('error', (error) => { this.emit('error', error) })
        .on('request', (request) => { this.emit('request', request) })
        .on('response', (response) => { this.emit('response', response) })
      try {
        await client.get('/info')
        bridges.push(bridge)
      } catch (error) {}
    }
    return bridges
  }
}

export { NbDiscovery }
