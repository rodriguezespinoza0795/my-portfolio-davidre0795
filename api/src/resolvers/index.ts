import * as user from './user.resolver';
import * as avo from './avocado.resolver';

export default {
  Query: {
    users: user.findAll,
    avo: avo.findOne,
    avos: avo.findAll,
  },

  Mutation: {
    createUser: user.createUser,
    createAvo: avo.createAvo,
  },
};
