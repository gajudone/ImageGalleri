import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
import { FourthComponent } from './fourth/fourth.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path : '', component: FirstComponent },
  { path : 'home', component: FirstComponent },
  { path: 'contact', component: SecondComponent },
  { path: 'career', component: ThreeComponent},
  { path: 'product', component: FourthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    FourthComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
