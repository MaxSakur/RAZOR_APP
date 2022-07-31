const Router = require('express');
const User = require('./../models/User');
const router = new Router();
const authMiddleware = require('./../middleware/auth.middleware');

router.post('/registerCharacter', authMiddleware, async (req, res) => {
  try {
    const { gender, race, role } = req.body;
    return res.json({
      character: {
        isCharacterRegistered: true,
        gender,
        race,
        role,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
