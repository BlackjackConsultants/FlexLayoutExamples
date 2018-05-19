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
var messaging_service_1 = require("./messaging.service");
var UserUpdatedMessage = /** @class */ (function () {
    function UserUpdatedMessage() {
    }
    return UserUpdatedMessage;
}());
exports.UserUpdatedMessage = UserUpdatedMessage;
var MessaginServiceComponent = /** @class */ (function () {
    function MessaginServiceComponent(messagingService) {
        var _this = this;
        this.messagingService = messagingService;
        // subcriber using mvvm type messaging
        this.subscription = this.messagingService.of(UserUpdatedMessage).subscribe(function (message) {
            _this.message = message;
            alert(_this.message.text);
        });
    }
    MessaginServiceComponent.prototype.publish = function () {
        // send message to subscribers via observable subject
        this.messagingService.publish(new UserUpdatedMessage());
    };
    MessaginServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-messagin-service',
            templateUrl: './messagin-service.component.html',
            styleUrls: ['./messagin-service.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [messaging_service_1.MessagingService])
    ], MessaginServiceComponent);
    return MessaginServiceComponent;
}());
exports.MessaginServiceComponent = MessaginServiceComponent;
//# sourceMappingURL=messagin-service.component.js.map