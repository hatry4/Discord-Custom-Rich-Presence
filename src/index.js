const rpc = require("discord-rpc");
const rpc_framework = require("./Struct/main.js");
const client = new rpc.Client({ transport: 'ipc' });
require('dotenv').config({ path: '../.env' });

/**
 * Data for the RPC Client.
 * @param {client} client 
 * @param {Object} timestamps
 * @param {string} [string[]] details
 * @param {string} [string[]] large_text
 * @param {string} [string[]] large_image
 * @param {string} [string[]] large_text
 * @param {string} [string[]] small_image
 * @param {string} [string[]] small_text 
 * @param {Object[]} buttons
 * @param {number} interval
 */
new rpc_framework(
  // Leave the client as it is.
  client,           
  {start: 1, end: 1},
  // Details and Text are strings but can also be changed to an Array so they will be randomized each interval.
  "Test RPC Details",
  "default",
  "Test RPC Large Text",
  "default",
  "Test RPC Small Text",
  // Buttons.
  [],
  // Interval will update the Presence this amount os Miliseconds.
  10000
).start();

client.login({ clientId : "788233833731457105" })
.catch(console.error);
