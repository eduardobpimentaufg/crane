// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getToken} from "next-auth/jwt";

export default function handler(req, res) {
  (async () => {
    const token = await getToken({req});
    console.log("JSON Web Token", token);
  })();
  res.status(200).json({ name: 'John Doe' })
}
