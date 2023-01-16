import Web3 from "web3";

const options = {
  clientConfig: {
    // Useful if requests are large
    maxReceivedFrameSize: 100000000, // bytes - default: 1MiB
    maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

    // Useful to keep a connection alive
    keepalive: true,
    keepaliveInterval: 100000, // ms
  },

  // Enable auto reconnection
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 20,
    onTimeout: false,
  },
};

export const webSocket = new Web3.providers.WebsocketProvider(
  process.argv[2],
  options,
);
export const web3 = new Web3(webSocket);
