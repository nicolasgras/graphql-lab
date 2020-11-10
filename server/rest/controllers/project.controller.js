import sequelize from '../../models';

const Project = sequelize.models.Project;

/**
 * Load Project and append to req.
 */
function load (req, res, next, id) {
  
  // Project.findOne({ id })
  Project.findOne({id, where: {id: req.params.projectId}})
    .then((project) => {
      req.project = project; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get Project list.
 * @property {number} req.query.skip - Number of Projects to be skipped.
 * @property {number} req.query.limit - Limit number of Projects to be returned.
 * @returns {Project[]}
 */
function list (req, res, next) {
  
  Project.findAll()
    .then(projects => res.json(projects))
    .catch(e => next(e));
}

/**
 * Get Project
 * @returns {Project}
 */
function get (req, res) {
  
  return res.json(req.project);
}

/**
 * List tasks of project
 * @returns {Tasks[]}
 */
function listTasks (req, res, next) {
   
  req.project.getTasks()
    .then(tasks => res.json(tasks))
    .catch(e => next(e));
}

export default { load, get, list, listTasks };
