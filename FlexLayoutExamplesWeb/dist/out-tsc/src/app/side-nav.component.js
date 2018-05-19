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
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
    }
    SideNavComponent.prototype.ngAfterViewInit = function () {
        var bd = this.sidenav.nativeElement.querySelector('.example-sidenav-content');
        bd.addEventListener('click', this.onClick.bind(this));
    };
    SideNavComponent.prototype.onClick = function (event) {
        ////alert('it works!!!!');
    };
    __decorate([
        core_1.ViewChild('sidenavContainer', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], SideNavComponent.prototype, "sidenav", void 0);
    SideNavComponent = __decorate([
        core_1.Component({
            selector: 'app-side-nav',
            templateUrl: './side-nav.component.html',
            styleUrls: ['./side-nav.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=side-nav.component.js.map