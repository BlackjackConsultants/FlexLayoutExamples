"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
/**
 * @title Basic select
 */
var AngularMaterialComponent = /** @class */ (function () {
    function AngularMaterialComponent(http, iconRegistry, sanitizer) {
        this.http = http;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/flashcards.svg'));
    }
    AngularMaterialComponent.prototype.ngOnInit = function () {
        var atest = this.foods;
        console.debug(atest.length);
    };
    AngularMaterialComponent = __decorate([
        core_1.Component({
            selector: 'angular-material.component',
            templateUrl: './angular-material.component.html',
            styleUrls: ['./angular-material.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [http_1.Http, material_1.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], AngularMaterialComponent);
    return AngularMaterialComponent;
}());
exports.AngularMaterialComponent = AngularMaterialComponent;
//# sourceMappingURL=angular-material.component.js.map