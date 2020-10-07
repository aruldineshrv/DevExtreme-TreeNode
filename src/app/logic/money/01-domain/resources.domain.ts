import {
  resourceTypes,
  resourcesInterfaces,
  resourceType,
  TAllResources,
  ResourcesNames
} from "./resources.interfaces";
import { type } from "os";

export class Resources {
  private _data: TAllResources;

  constructor(resources: TAllResources) {
    this._data = resources;
  }

  get resources(): TAllResources {
    return JSON.parse(JSON.stringify(this._data));
  }

  get resourcesRef(): TAllResources {
    return this._data;
  }

  getResourceByType(type: resourceType): TAllResources {
    let resourceByType: TAllResources = {};

    for (let key in this._data) {
      if (this._data[key].type === type) {
        resourceByType[key] = this._data[key];
      }
    }

    return resourceByType;
  }

  addResource({
    resourceName,
    amount
  }: {
    resourceName: ResourcesNames;
    amount: number;
  }) {
    this.isValid("number", amount);
    this._data[resourceName].amount += amount;
  }
  subResource({
    resourceName,
    amount
  }: {
    resourceName: ResourcesNames;
    amount: number;
  }) {
    this._data[resourceName].amount -= amount;
  }

  isValid(type: "number" | "string", val) {
    if (typeof val !== type) {
      throw new Error(`not a ${type}`);
    }
  }
}
