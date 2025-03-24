import 'server-only';

//Importantions
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SessionCryptDatas = async (payload: string | object | []) => {
  const secret = new TextEncoder().encode(process.env.SECRET_JOSE_SIGN_KEY); // create UTF-8 Array value
  const alg = 'HS256';

  // create jwt token
  const jwt = await new SignJWT({ payload })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .sign(secret);

  // return datas
  return jwt;
};

const SessionDeCryptDatas = async (jwtCode: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_JOSE_SIGN_KEY); // create UTF-8 Array value
    const alg = 'HS256';

    // create jwt token
    const { payload } = await jwtVerify(jwtCode, secret, {
      algorithms: [alg],
    });
    // return datas
    return payload ? payload.payload : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const ConfigSessionDatas = async (value: string | object | []) => {
  // Create jwt token
  const jwtCode = await SessionCryptDatas(value);
  return jwtCode;
};

const SaveCookie = async (key: string, value: string) => {
  // cookies store
  const cookiesStore = await cookies();
  try {
    cookiesStore.set(key, value); // create cookie
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
  // Storage Value datas in Local Cookies
};

// get cookies value
const getCookie = async (key: string) => {
  // cookies store
  const cookiesStore = await cookies();
  const cookieValue = await cookiesStore.get(key); // return cookie value datas with key value passed
  return cookieValue?.value;
};

const deleteCookie = async (key: string) => {
  // cookies store
  const cookiesStore = await cookies();
  const cookieValue = await cookiesStore.delete(key); // delete Cookie
  return cookieValue;
};

export {
  SessionCryptDatas,
  SessionDeCryptDatas,
  ConfigSessionDatas,
  SaveCookie,
  getCookie,
  deleteCookie,
};
