# Homebridge NB Tools
[![Downloads](https://img.shields.io/npm/dt/hb-nb-tools.svg)](https://www.npmjs.com/package/hb-nb-tools)
[![Version](https://img.shields.io/npm/v/hb-nb-tools.svg)](https://www.npmjs.com/package/hb-nb-tools)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</span>

## Homebridge NB Tools
Copyright © 2020-2023 Erik Baauw. All rights reserved.

This repository provides a standalone installation of the command-line tools from [Homebridge NB](https://github.com/ebaauw/homebridge-nb):

Tool      | Description
--------- | -----------
`nb `     | Interact with Nuki bridge from command line.

Each command-line tool takes a `-h` or `--help` argument to provide a brief overview of its functionality and command-line arguments.

### Prerequisites
Homebridge NB communicates with the Nuki Bridge using the local
[Nuki Bridge HTTP API](https://developer.nuki.io/page/nuki-bridge-http-api-1-12/4).
You need to enable this API through the Nuki app.

### Installation
```
$ sudo npm -g i hb-nb-tools
```
Homebridge NB Tools uses [`sodium-plus`](https://github.com/paragonie/sodium-plus) for [encrypted tokens](https://developer.nuki.io/t/bridge-beta-fw-1-22-1-2-14-0-with-new-encrypted-bridge-http-api-token/15816).
This optional dependency contains C++ modules, that might need to be compiled on installation.
In case you want to install Homebridge NB Tools on a system that doesn't include the build tools needed for this, you might need to skip installation of `sodium-plus` by
```
$ sudo npm -g i hb-nb-tools --omit=optional
```
Homebrdige NB Tools reverts to hashed tokens when `sodium-plus` isn't installed.
