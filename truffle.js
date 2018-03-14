module.exports = {
  "build": "webpack",
  "deploy": [
    "NGToken"
  ],
 networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    docker_dev: { //must use docker to access this network
      host: "testrpc",
      port: 8545,
      network_id: "*" 
    }
  },
  "rpc": {
    // Default RPC configuration.
    "host": "localhost",
    "port": 8545
  }
}
