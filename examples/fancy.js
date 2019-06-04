const crypto = require('crypto');
const nkn = require('../lib/nkn');
//7c99160bcae2b47648f0c1e57246bafe6fbe5a347d10aa04971dde3e5168959a 03d54a81447c14be2b79be22d3c10252ea02b3967d6c9a6ef59d496bae79b4d960
const client = nkn({
    identifier: 'fancy_number_1',
    privateKey: '7c99160bcae2b47648f0c1e57246bafe6fbe5a347d10aa04971dde3e5168959a',
});
console.log(client.key.privateKey, client.key.publicKey);
console.log(client.addr);
//addr  fancy_number_1.03d54a81447c14be2b79be22d3c10252ea02b3967d6c9a6ef59d496bae79b4d960


client.on('connect',()=>{

    console.log("connetction opend");
    client.send(dest, 'hello world',);
});



client.on('message', (src, payload, payloadType) => {
    if (payloadType === nkn.PayloadType.TEXT) {
      console.log('Receive text message:', src, payload);
    } else if (payloadType === nkn.PayloadType.BINARY) {
      console.log('Receive binary message:', src, payload);
    }
  });

let dest = 'fancy_number_1.028cd215883d3462f13cb0ba43f251165bbbe7d94cebf0316bf197e593ff9643af';





