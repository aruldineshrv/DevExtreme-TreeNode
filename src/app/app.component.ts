import { Component } from "@angular/core";
import { Resources } from "./logic/money/01-domain/resources.domain";
import {
  regularResources,
  resourceType,
  specialResources
} from "./logic/money/01-domain/resources.interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular 7 Router Demo frhryry";
  params: regularResources = {
    type: resourceType.regular,
    resources: { iron: 4, gold: 100, wood: 300 }
  };
  params2: specialResources = {
    type: resourceType.special,
    resources: { opal:300 ,diamonds:2 }
  };

  cityResources = new Resources([this.params, this.params2]);
  constructor() {
    console.log('cityResources',this.cityResources.resources);
    console.log('cityResources',this.cityResources.getResourceByType(resourceType.special));
  }
}
