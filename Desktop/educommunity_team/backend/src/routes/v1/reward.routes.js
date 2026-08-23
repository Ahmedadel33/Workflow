const express = require('express');
const router = express.Router();
const { giveRewardToUser } = require('../../controllers/reward.controller');
const { authenticate, authorize } = require('../../middleware/auth.middleware');

 router.post('/assign', authenticate, authorize('admin'), giveRewardToUser);

module.exports = router;