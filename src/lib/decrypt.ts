import CryptoJS from "crypto-js";
export const decrypt = (val: any) => {
  const crypto_key = process.env.NEXT_PUBLIC_ADMIN_ENCRYPTION_KEY as string;
  const crypto_iv = process.env.NEXT_PUBLIC_ADMIN_ENCRYPTION_VECTOR as string;
  const shouldEncrypt = process.env.NEXT_PUBLIC_ADMIN_SHOULD_ENCRYPT;
  if (shouldEncrypt !== "true") return val;

  var key = CryptoJS.enc.Utf8.parse(crypto_key);
  var iv = CryptoJS.enc.Utf8.parse(crypto_iv);

  try {
    if (typeof val === "object") {
      if (Array.isArray(val)) {
        return val.map((item): any => decrypt(item));
      } else {
        return Object.entries(val).reduce((acc: any, [key, value]) => {
          acc[key] = decrypt(value);
          return acc;
        }, {});
      }
    } else {
      let value: any = CryptoJS.AES.decrypt(val, key, {
        iv,
      }).toString(CryptoJS.enc.Utf8);
      if (typeof value === "string") {
        if (isNumeric(value)) {
          return Number(value);
        }
        if (value === "True") {
          value = true;
          return value;
        }
        if (value === "False") {
          value = false;
          return value;
        }
        if (value === "None") {
          value = null;
          return value;
        }
        return value;
      }
      return JSON.parse(value);
    }
  } catch (e) {
    return val;
  }
};

function isNumeric(str: any) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}
