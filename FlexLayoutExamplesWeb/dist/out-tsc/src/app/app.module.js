"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var flex_layout_1 = require("@angular/flex-layout");
var app_routing_module_1 = require("./app-routing.module");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var flex_layout_column_component_1 = require("./flex-layout-column.component");
var side_nav_component_1 = require("./side-nav.component");
var angular_material_component_1 = require("./angular-material.component");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var material_4 = require("@angular/material");
var material_5 = require("@angular/material");
var icon_1 = require("@angular/material/icon");
var angular_routing_component_1 = require("./angular-routing.component");
var router_named_outlet_component_1 = require("./router-named-outlet.component");
var messagin_service_component_1 = require("./messagin-service.component");
var messaging_service_1 = require("./messaging.service");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                flex_layout_column_component_1.FlexLayoutColumnComponent,
                side_nav_component_1.SideNavComponent,
                angular_material_component_1.AngularMaterialComponent,
                angular_routing_component_1.AngularRoutingComponent,
                router_named_outlet_component_1.RouterNamedOutletComponent,
                messagin_service_component_1.MessaginServiceComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule, flex_layout_1.FlexLayoutModule, material_1.MatSidenavModule, material_5.MatButtonModule,
                material_2.MatSelectModule, material_3.MatSliderModule, material_4.MatToolbarModule, icon_1.MatIconModule,
                http_1.HttpModule
            ],
            exports: [
                side_nav_component_1.SideNavComponent
            ],
            providers: [messaging_service_1.MessagingService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map