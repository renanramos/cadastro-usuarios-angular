import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './users/user-table/user-table.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { FilterTablePipe } from './pipe/filter-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent,
    FilterTablePipe
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
