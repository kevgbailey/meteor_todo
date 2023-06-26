import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');
console.log("what",TasksCollection);