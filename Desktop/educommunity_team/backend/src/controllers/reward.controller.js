const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const apiResponse = require('../utils/apiResponse');

 const giveRewardToUser = async (req, res, next) => {
    try {
        const { userId, pointsToAdd, badgeName } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return next(new ApiError(404, "user not found"));
        }

         if (pointsToAdd !== undefined) {
            user.points += Number(pointsToAdd);
        }

         if (badgeName && !user.badges.includes(badgeName)) {
            user.badges.push(badgeName);
        }

        await user.save();

        return apiResponse(res, 200, "point updades", {
            id: user._id,
            name: user.name,
            points: user.points,
            badges: user.badges
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    giveRewardToUser
};