import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty.component';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [AppComponent, EmptyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PagesModule,
    HttpClientModule,
    // CommonModule,
    SharedModule,
    // FormsModule,
    // RouterModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('bpm-mf-pre-filter', appElement);
  }
}
