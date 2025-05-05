
 const hexsecretKey =3344

const secretKey = Uint8Array.from(Buffer.from(hexsecretKey, "hex"));
console.log(secretKey)