import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { routingModule } from "./routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, routingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
