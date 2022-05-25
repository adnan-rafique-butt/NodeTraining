function encryptData(data) {
  return `Encrypted Data ${data}`;
}

function send(url, data) {
  const encryptedData = encryptData(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
  send,
};

//ES6 method to export is,
// export {
//     send,
// }
