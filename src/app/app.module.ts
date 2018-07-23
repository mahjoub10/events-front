import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Layout
import { LayoutComponent } from './layout/layout.component';
import { PreloaderDirective } from './layout/preloader.directive';

// Sub modules
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

// hmr
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

//  local storage
import { Ng2Webstorage } from 'ngx-webstorage';

//  CUSTOM HTTP PROVIDER
import { customHttpProvider } from './shared/blocks/interceptors/http.provider';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

// google map
import { AgmCoreModule } from '@agm/core';

// toast
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AlertOption } from './shared/components/alert/alert.option';

import { AttendeeModule } from './attendee/attendee.module';
import { EventsModule } from './events/events.module';
import { AdminModule } from './admin/admin.module';
import { SpeakerModule } from './speaker/speaker.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'rec', separator: '-' }),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDP3axBfiMCuP_1RKBMjX33VoP7gc1YqQ4',
      libraries: ['places']
    }),
    ToastModule.forRoot(),

    // Sub modules
    LayoutModule,
    SharedModule,
    AttendeeModule,
    EventsModule,
    AdminModule,
    SpeakerModule
  ],
  declarations: [
    AppComponent,
    // Layout
    LayoutComponent,
    PreloaderDirective

  ],
  entryComponents: [],
  providers: [
    customHttpProvider(),
    { provide: ToastOptions, useClass: AlertOption },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
