import CryptoJS from 'crypto-js';

export const encrypt = (s: string) => CryptoJS.SHA1(CryptoJS.MD5(s)).toString();
