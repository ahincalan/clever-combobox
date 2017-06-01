import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CleverComboboxComponent} from "./clever-combobox.component";
import {FilterPipe} from "./clever-combobox.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [CleverComboboxComponent,FilterPipe],
  exports: [CleverComboboxComponent]
})
export class CleverComboboxModule {
}
