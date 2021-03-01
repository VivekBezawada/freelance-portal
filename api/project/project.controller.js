const Project = require('./project.model');
const { projectSchema } = require('./project.schemas');

exports.get = async (userId) => {
    // TODO: Implement Pagination
    const projects = await Project.getProjectsbyUserId(userId).lean().populate('category subCategories');
    return [200, '', projects];
}

exports.getById = async (userId, projectId) => {
    const project = await Project.getProjectById(projectId).lean().populate('category skills subCategories');
    if (!project || project.employerId != userId) {
        return [404, 'No Project found!', {}];
    }

    return [200, '', project];
}

exports.post = async (userId, data) => {
    data.employerId = userId;
    const project = await Project.create(data);
    return [200, '', project];
}

exports.update = async (userId, projectId, data) => {
    const project = await Project.getProjectById(projectId);
    if (!project || project.employerId != userId) {
        return [404, 'No Project found!', {}];
    }

    if (!data) {
        data = {isDeleted : true};
    }
    for (const [key,value] of Object.entries(data)) {
        project[key] = value;
    }

    console.log(project);
    await project.save();
    return [200, '', {}];
}