import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import {InMemoryCache} from "@apollo/client/core";

const routes: Routes = [
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,
    ApolloModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
