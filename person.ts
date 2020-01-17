import { InspectProperty } from "./inspectProperty";

export class Person {
  @InspectProperty
  public firstName: string;
  @InspectProperty
  public lastName: string;
}