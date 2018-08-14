"use strict"

const assert = require("assert")
const camelCaseKeys = require("camelcase-keys")
const debug = require("debug")("loopback:cli")
const minimist = require("minimist")
const path = require("path")

const opts = minimist(process.argv.slice(2), {
  alias: {
    version: "v"
  }
})

if (opts.version) {
  const ourVersion = require("../package.json").version
  const generatorVersion = require("generator-node-api-cli/package.json")
    .version
  const workspaceVersion = require("generator-node-api-cli").workspaceVersion
  console.log(
    "%s (generator-node-api-cli@%s node-api-cli-workspace@%s)",
    ourVersion,
    generatorVersion,
    workspaceVersion
  )
  return
}

// Tell the generator to replace "yo loopback:" with "lb"
process.env.SLC_COMMAND = "nac"

// NOTE(bajtos) Loading generator-node-api-cli takes about a second,
// therefore I am intentionally loading it only after we have
// handled the "--version" case which becomes much faster as the result.
const lbGenerator = require("generator-node-api-cli")
const yeoman = lbGenerator._yeoman // generator-node-api-cli should export _yeoman
assert(yeoman, "generator-node-api-cli should export _yeoman")

const env = yeoman()

// Change the working directory to the generator-node-api-cli module so that
// yeoman can discover the generators
const root = path.dirname(
  require.resolve("generator-node-api-cli/package.json")
)
const cwd = process.cwd()
debug("changing directory to %s", root)
process.chdir(root)

// lookup for every namespaces, within the environments.paths and lookups
env.lookup()
debug("changing directory back to %s", cwd)
process.chdir(cwd) // Switch back

const args = opts._
const originalCommand = args.shift()
let command = "nac:" + (originalCommand || "app")
const supportedCommands = env.getGeneratorsMeta()

if (!(command in supportedCommands)) {
  command = "nac:app"
  args.unshift(originalCommand)
  args.unshift(command)
} else {
  args.unshift(command)
}

debug("invoking generator", args)

// `yo` is adding flags converted to CamelCase
const options = camelCaseKeys(opts, { exclude: ["--", /^\w$/, "argv"] })
Object.assign(options, opts)

const generator = env.create(command, { args })

debug("env.run %j %j", args, options)
env.run(args, options)
