const Url = require('../models/UrlModel');

module.exports = {
  redirectUrl: async (req, res) => {
    try {
      const url = await Url.findOne({
        urlCode: req.params.code,
      });
      console.log(url);
      if (url) {
        return res.redirect(url.longUrl);
      } else {
        return res.status(404).json('No URL Found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  },
};
