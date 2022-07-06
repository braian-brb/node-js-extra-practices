import { multiply } from './multiplicator/index.js'

import parseArgs from 'minimist'
const args = parseArgs(process.argv.slice(2))

const base = args.base

multiply(base)