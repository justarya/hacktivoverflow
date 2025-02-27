const router = require('express').Router();
const user = require('../controllers/user');
const authentication = require('../middlewares/authentication');

router.post('/register', user.register);
router.post('/login', user.login);
router.post('/login/google', user.loginWithGoogle);
router.get('/', authentication, user.getUser);

module.exports = router;