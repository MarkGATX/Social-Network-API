const router = require('express').Router();

const {
    createUser,
    getUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).post(updateOneUser).delete(deleteOneUser);

router.route('./:userId/friends/:friendId').post(addFriend).put(deleteFriend);

module.exports = router;
