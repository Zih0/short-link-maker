const Url = require('../models/Url');

export const redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.code,
    });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
};
