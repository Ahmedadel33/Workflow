const router = require('express').Router();
const rewardRoute = require('./reward.routes');

router.use('/rewards', rewardRoute);
router.use('/auth', require('./auth.routes'));

router.use('/subjects', require('./subject.routes'));

router.use('/materials', require('./material.routes'));

router.use('/teachers', require('./teacher.routes'));

router.use('/soft-skill-tasks', require('./softSkillTask.routes'));

router.use('/submissions', require('./submission.routes'));

module.exports = router;