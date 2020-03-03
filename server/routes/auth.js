var express = require('express');
var router = express.Router();
var axios = require('axios');
var jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/auth', async (req, res) => {
  const { code } = req.body;
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const response = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id, // 내 APP의 정보
      client_secret, // 내 APP의 정보
      code,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );

  console.log('response');
  // GITHUB에서 제공하는 다양한 API에 접근할 수 있는 토큰 정보를 취득할 수 있습니다.
  const token = response.data.access_token;

  const access_token = jwt.sign({ token }, process.env.TOKEN_KEY);

  return res.json({ access_token });
});

module.exports = router;
