import { multiply } from './multiplicator/index.js'

import parseArgs from 'minimist'
const args = parseArgs(process.argv.slice(2))

if(!args.base || isNaN(args.base)){
  throw new Error('--base required, only number')
}
if(!args.limit || isNaN(args.limit)){
  throw new Error('--limit required, only number')
}

const base = args.base
const limit = args.limit
const visualize = args.visualize || args.v || false

multiply(base, limit, visualize)