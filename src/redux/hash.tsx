"use client";
const generateDatetimeStamp = () => {
  const now = new Date();
  return now.toISOString(); // Example: 2024-12-20T12:34:56.789Z
};
const api_key = process.env.NEXT_PUBLIC_ADMIN_API_KEY as string;
const secret_key = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY as string;
const idempotency_key = generateDatetimeStamp();
const result = api_key + secret_key + idempotency_key;

const myString = result;
const encoder = new TextEncoder();
const encoded = encoder.encode(myString);

console.log("concatenatedvalue", result);
console.log("encodedvalue", encoded);

// Hashing s
// async function hashString(input: any) {
//   // Encode the input string as a UTF-8 byte array
//   const encoder = new TextEncoder();
//   const data = encoder.encode(input);

//   // Hash the data using SHA-256
//   const hashBuffer = await crypto?.subtle?.digest("SHA-256", data);

//   // Convert the hash to a hex string
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray
//     .map((byte) => byte.toString(16).padStart(2, "0"))
//     .join("");

//   return hashHex;
// }

// (async () => {
//   const hash = await hashString(encoded);

//   console.log("SHA-256 Hash:", hash);
// })();
