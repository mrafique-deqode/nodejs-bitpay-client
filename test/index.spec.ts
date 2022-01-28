const BitPaySDK = require('../src/index');

let client;
let tokens = BitPaySDK.Tokens;
tokens.merchant = "HznXoFwMMKLjq7Qrrtg6skQ9sfnJrtTJTrRxagHsDnd5";
tokens.payout = "9XRgze9LPrCNMgym8L2UauSoQkZKgBUzrTnC4RPjeeLo"
let privateKey = "348cf26ca5c283acd987f2c40dcebc01c909843592e7a9e4110844b7aa28c4e8";
describe('BitPaySDK.Client', () => {
  beforeAll(() => {
    jest.setTimeout(2000); // browser takes a while
  });

  it('should prepare client', async () => {
    client = new BitPaySDK.Client("test", privateKey, tokens);
    expect(client).toBeDefined();
  });
});
