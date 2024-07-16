const User = require('../models/User');

const resolvers = {
    getUser: async ({ id }) => {
        return await User.findById(id);
    },
    getUsers: async () => {
        return await User.find();
    },
    createUser: async ({name, email}) => {
        const newUser = new User ({name, email});
        return await newUser.save();
    }
};

module.exports = resolvers;