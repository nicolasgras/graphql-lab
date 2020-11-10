import sequelize from '../models';

export default function resolvers () {
  const models = sequelize.models;

  return {
    RootQuery: {
      user (root, { id }, context) {
        console.log("----------------- user --------------------------");
        console.log(root);
        console.log({ id });
        console.log(context);
        console.log("----------------------------------------------------");
        
        return models.User.findById(id, context);
      },
      users (root, args, context) {
        console.log("----------------- users -----------------------------------");
        console.log(root);
        console.log(args);
        console.log(context);
        console.log("----------------------------------------------------");
        
        return models.User.findAll({}, context);
      },
      projects (root, args, context) {
        
        console.log("----------------------------------------------------");
        console.log(root);
        console.log(args);
        console.log(context);
        console.log("----------------------------------------------------");
        return models.Project.findAll({}, context);
      }
    },

    User: {
      projects (user) {
        return user.getProjects();
      }
    },

    Project: {
      tasks (project) {
        return project.getTasks();
      }
    }
  };
}
