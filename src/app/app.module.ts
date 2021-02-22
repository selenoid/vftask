import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
//   MatIconModule,
//   MatCheckboxModule,
//   MatInputModule,
//   MatCardModule,
//   MatListModule,
//   MatButtonModule,
MatProgressSpinnerModule,
MatButtonModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    // MatIconModule,
    // MatCheckboxModule,
    MatButtonModule,
    // MatCardModule,
    // MatInputModule,
    // MatListModule,
   MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
