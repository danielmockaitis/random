
const encodedHeader = base64(utf8(JSON.stringify(header)));
const encodedPayload = base64(utf8(JSON.stringify(payload)));
const signature = base64(hmac(`${encodedHeader}.${encodedPayload}`,
                              secret, sha256));
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;



