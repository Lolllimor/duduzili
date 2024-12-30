// encrypt.ts

import CryptoJS from "crypto-js";
export const encrypt = (val: any) => {
  const crypto_key = process.env.NEXT_PUBLIC_ADMIN_ENCRYPTION_KEY as string;
  const crypto_iv = process.env.NEXT_PUBLIC_ADMIN_ENCRYPTION_VECTOR as string;
  const shouldEncrypt = process.env.NEXT_PUBLIC_ADMIN_SHOULD_ENCRYPT;
  if (shouldEncrypt !== "true") {
    return val;
  }

  var key = CryptoJS.enc.Utf8.parse(crypto_key);
  var iv = CryptoJS.enc.Utf8.parse(crypto_iv);
  try {
    if (typeof val === "object" && val !== null) {
      if (Array.isArray(val)) {
        return val.map((item): any => encrypt(item));
      } else {
        return Object.entries(val).reduce((acc: any, [key, value]) => {
          acc[key] = encrypt(value);
          return acc;
        }, {});
      }
    } else {
      return CryptoJS.AES.encrypt(
        val === null || typeof val === "number" || typeof val === "boolean"
          ? JSON.stringify(val)
          : val,
        key,
        {
          iv: iv,
        }
      ).toString();
    }
  } catch (e) {
    return val;
  }
};
