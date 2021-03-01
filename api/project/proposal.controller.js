const Proposal = require('./proposal.model');

exports.post = async (userId, projectId, data) => {
    data.freelancerId = userId;
    data.projectId = projectId;

    await Proposal.create(data);
    return [200, '', {}];
}