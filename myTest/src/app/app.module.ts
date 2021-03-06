import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './routing/firstPage.component';
import { SecondPageComponent } from './routing/SecondPage.component';
import { CharactersService } from './characters.service'
import { TabsComponent } from './tabs/tabs.component'
import { TabComponent } from './tabs/tab.component'


const appRoutes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'result', component: SecondPageComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
