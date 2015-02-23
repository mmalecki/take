#!/usr/bin/env node
var spawn = require('child_process').spawn
var async = require('async')

var args = process.argv.slice(2);
var versions = args.slice(0, args.length - 1)
var cmd = args[args.length - 1]

console.log('Running `' + cmd + '` on ' + versions.join(', ') + '...')

async.eachSeries(versions, function(version, done) {
  console.log('Running `' + cmd + '` on ' + version)

  var subshell = spawn(
    'give',
    ['use'].concat(version.split(' ')),
    { stdio: ['pipe', 'inherit', 'inherit'] }
  )
  subshell.stdin.end('$SHELL -c "' + cmd + '"\n')

  subshell.on('close', function() {
    done()
  })
});
