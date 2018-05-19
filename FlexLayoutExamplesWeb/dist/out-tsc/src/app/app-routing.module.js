"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var flex_layout_column_component_1 = require("./flex-layout-column.component");
var side_nav_component_1 = require("./side-nav.component");
var angular_material_component_1 = require("./angular-material.component");
var angular_routing_component_1 = require("./angular-routing.component");
var router_named_outlet_component_1 = require("./router-named-outlet.component");
var messagin_service_component_1 = require("./messagin-service.component");
var routes = [
    { path: 'column', component: flex_layout_column_component_1.FlexLayoutColumnComponent },
    { path: 'sidenav', component: side_nav_component_1.SideNavComponent },
    { path: 'material', component: angular_material_component_1.AngularMaterialComponent },
    { path: 'messaging', component: messagin_service_component_1.MessaginServiceComponent },
    { path: 'routing', component: angular_routing_component_1.AngularRoutingComponent, children: [
            { path: 'testOutlet', component: router_named_outlet_component_1.RouterNamedOutletComponent, outlet: 'test' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map