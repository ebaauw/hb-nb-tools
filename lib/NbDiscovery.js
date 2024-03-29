// hb-nb-tools/lib/NbDiscovery.js
// Copyright © 2020-2024 Erik Baauw. All rights reserved.
//
// Homebridge NB Tools.

'use strict'

const hbLibTools = require('hb-lib-tools')
const { HttpClient, OptionParser } = hbLibTools

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

module.exports = NbDiscovery
