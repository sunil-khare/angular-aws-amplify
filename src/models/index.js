// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TEST } = initSchema(schema);

export {
  TEST
};