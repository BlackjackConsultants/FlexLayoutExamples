import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FlexLayoutColumnComponent } from './flex-layout-column.component';
import { SideNavComponent } from './side-nav.component';
import { AngularMaterialComponent } from './angular-material.component';
import { MatToolbarModule } from '@angular/material';
import { AngularRoutingComponent } from './angular-routing.component';
import { RouterNamedOutletComponent } from './router-named-outlet.component';
import { MessaginServiceComponent } from './messagin-service.component';
import { MessagingService, IMessage } from './messaging.service';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from "@angular/common/http";
import { TypographyComponent } from './typography.component';
import { ObservableComponent } from './observable.component';
import { ContactService } from './contact.service';
import { TypescriptComponent } from './typescript.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicTemplateComponent } from './dynamic-template.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutColumnComponent,
    SideNavComponent,
    AngularMaterialComponent,
    AngularRoutingComponent,
    RouterNamedOutletComponent,
    MessaginServiceComponent,
    TypographyComponent,
    ObservableComponent,
    TypescriptComponent,
    DynamicTemplateComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FlexLayoutModule, MatSidenavModule, MatButtonModule,
    MatSelectModule, MatSliderModule, MatToolbarModule, MatIconModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatRadioModule
  ],
  exports: [
    SideNavComponent, MatSelectModule, MatRadioModule
  ],
  providers: [MessagingService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
