import { Model } from "objection";

export class Person extends Model {
  id!: number;
  name!: string;
  email!: string;

  static get tableName() {
    return "person";
  }
}
