const Freelancer = require('./freelancer.model');
const User = require('../user/user.model');

exports.get = async (userId) => {
    const freelancer = await Freelancer.getFreelancerByUserId(userId).lean().populate('skills');
    return [200, '', freelancer];
}

exports.post = async (userId, data={}) => {
    const freelancer = await Freelancer.getFreelancerByUserId(userId).lean();
    if (freelancer) {
        return [400, 'Freelancer already exists!', {}];
    }

    data.userId = userId
    const user = await User.getUserById(userId).lean();
    data = Object.assign(data, user);
    await Freelancer.create(data);
    return [200, '', {}];
}

exports.update = async (userId, key, value, id=null) => {
    const freelancer = await Freelancer.getFreelancerByUserId(userId);
    if (!freelancer) {
        return [400, 'Freelancer doesn\'t exists!', {}];
    }

    if (Array.isArray(freelancer[key])) {
        if (id) {
            index  = freelancer[key].map(obj => obj._id).indexOf(id);
            if (index > -1) {
                if (!value) {
                    freelancer[key].splice(index,1);
                } else {
                    value[0]['_id'] = freelancer[key][index]['_id'];
                    freelancer[key].set(index, value[0]);
                }
            }
        } else {
            freelancer[key] = [...freelancer[key], ...value]
        }
    } else {
        freelancer[key] = value
    }
    await freelancer.save()
    return [200, '', freelancer];
}