const Router = require('express');
const User = require('./../models/User');
const router = new Router();
const authMiddleware = require('./../middleware/auth.middleware');

router.post('/register', authMiddleware, async (req, res) => {
  try {
    const { registered, role, status } = req.body;
    const user = await User.findOne({ _id: req.user.id });

    return res.json({
      success: true,
      user: {
        id: user.id,
        registered: registered || user.registered,
        role: role || user.role,
        status: status || user.status,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
