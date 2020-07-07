module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xDB37C94cc3F4B3409B76a83Af2462a4fA8B2835E", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};