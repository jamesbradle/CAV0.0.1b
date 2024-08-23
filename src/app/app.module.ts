import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { UnitTypeTreemapComponent } from './unit-type-treemap.component';
import { GoogleAnalyticsService } from './google-analytics.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent, UnitTypeTreemapComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
