import { InspectProperty } from "./inspectProperty";

export class Automobile {
  @InspectProperty
  public make: string;
  @InspectProperty
  public model: string;
  @InspectProperty
  public year: number;

  constructor(make: string, model: string, year: number){
    this.make = make;
    this.model = model;
    this.year = year;
  }

getInfo(): string {
  return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
  }
}