const Employer = require('./employer.model');
const User = require('../user/user.model');

exports.get = async (userId) => {
    const employer = await Employer.getEmployerByUserId(userId).lean();
    return [200, '',employer];
}

exports.post = async (userId, data={}) => {
    const employer = await Employer.getEmployerByUserId(userId).lean();
    if (employer) {
        return [400, 'Employer already exists!', {}];
    }

    data.userId = userId;
    const user = await User.getUserById(userId).lean();
    data = Object.assign(data, user);
    await Employer.create(data);
    return [200, '', {}];
}

exports.update = async (userId, data) => {
    const employer = await Employer.getEmployerByUserId(userId);
    if (!employer) {
        return [400, 'Employer not found!', {}];
    }
    for (const [key,value] of Object.entries(data)) {
        employer[key] = value;
    }

    await employer.save();
    return [200, '', {}];
}