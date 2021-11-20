const shortid = require('shortid');
const Url = require('../models/UrlModel');

const baseUrl = 'http://localhost:5000';

module.exports = {
  shortenUrl: async (req, res) => {
    const { longUrl } = req.body;
    const urlCode = shortid.generate();
    console.log(req);
    if (longUrl) {
      try {
        let url = await Url.findOne({
          longUrl,
        });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = baseUrl + '/' + urlCode;
          url = new Url({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date(),
          });
          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    } else {
      res.status(500).json('Invalid Url');
    }
  },
};
