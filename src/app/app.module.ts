import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [AppComponent, EmptyComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, HttpClientModule],
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
