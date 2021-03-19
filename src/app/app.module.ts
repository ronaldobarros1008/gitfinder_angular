import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './_root-store/root-store.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultListComponent } from './components/result/result-list/result-list.component';
import { ResultItemComponent } from './components/result/result-item/result-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultListComponent,
    ResultItemComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RootStoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }