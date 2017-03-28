/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'knockout', "knockout.validation"], function (require, exports, ko) {
    var Common;
    (function (Common) {
        var RegisteredItemViewMoel = (function () {
            function RegisteredItemViewMoel() {
            }
            return RegisteredItemViewMoel;
        })();
        Common.RegisteredItemViewMoel = RegisteredItemViewMoel;
        var ExchangeGroupViewModel = (function () {
            function ExchangeGroupViewModel() {
                this.Amount = ko.observable();
                this.Count = ko.observable();
                this.Email = ko.observable();
            }
            return ExchangeGroupViewModel;
        })();
        Common.ExchangeGroupViewModel = ExchangeGroupViewModel;
        var ExchangeEditorViewModel = (function (_super) {
            __extends(ExchangeEditorViewModel, _super);
            function ExchangeEditorViewModel(isSale) {
                var _this = this;
                _super.call(this);
                this.IsSale = ko.observable();
                this.Title = ko.computed(function () {
                    return _this.IsSale() ? "Купить" : "Продать";
                });
                this.OrderTitle = ko.computed(function () {
                    return _this.IsSale() ? "Ордера на продажу" : "Ордера на покупку";
                });
                this.Items = ko.observableArray();
                this.CleanUp = function () {
                    _this.Amount(null);
                    _this.Count(null);
                    _this.Email(null);
                };
                this.IsSale(isSale);
                ko.validation.rules.pattern.message = 'Invalid.';
                ko.validation.init({
                    registerExtenders: true,
                    messagesOnModified: true,
                    insertMessages: true,
                    parseInputAttributes: true,
                    messageTemplate: null
                }, true);
                this.Amount = ko.observable().extend({ required: true }).extend({
                    pattern: {
                        params: /^(\d*\.\d{1,2}|\d+)$/,
                        message: "Invalid amount."
                    }
                });
                ;
                ;
                this.Count = ko.observable().extend({ required: true }).extend({
                    pattern: {
                        params: /^[0-9]$/,
                        message: "Invalid count."
                    }
                });
                ;
                this.Email = ko.observable().extend({ required: true }).extend({ email: true });
                this.errors = ko.validation.group(this);
            }
            return ExchangeEditorViewModel;
        })(ExchangeGroupViewModel);
        Common.ExchangeEditorViewModel = ExchangeEditorViewModel;
    })(Common = exports.Common || (exports.Common = {}));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwudHMiXSwibmFtZXMiOlsiQ29tbW9uIiwiQ29tbW9uLlJlZ2lzdGVyZWRJdGVtVmlld01vZWwiLCJDb21tb24uUmVnaXN0ZXJlZEl0ZW1WaWV3TW9lbC5jb25zdHJ1Y3RvciIsIkNvbW1vbi5FeGNoYW5nZUdyb3VwVmlld01vZGVsIiwiQ29tbW9uLkV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJDb21tb24uRXhjaGFuZ2VFZGl0b3JWaWV3TW9kZWwiLCJDb21tb24uRXhjaGFuZ2VFZGl0b3JWaWV3TW9kZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRCwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLHNEQUFzRDs7Ozs7OztJQU90RCxJQUFjLE1BQU0sQ0FvRW5CO0lBcEVELFdBQWMsTUFBTSxFQUFDLENBQUM7UUFDbEJBO1lBQUFDO1lBUUFDLENBQUNBO1lBQURELDZCQUFDQTtRQUFEQSxDQVJBRCxBQVFDQyxJQUFBRDtRQVJZQSw2QkFBc0JBLHlCQVFsQ0EsQ0FBQUE7UUFFREE7WUFBQUc7Z0JBQ1dDLFdBQU1BLEdBQUdBLEVBQUVBLENBQUNBLFVBQVVBLEVBQVVBLENBQUNBO2dCQUNqQ0EsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBVUEsQ0FBQ0E7Z0JBQ2hDQSxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFVQSxDQUFDQTtZQUMzQ0EsQ0FBQ0E7WUFBREQsNkJBQUNBO1FBQURBLENBSkFILEFBSUNHLElBQUFIO1FBSllBLDZCQUFzQkEseUJBSWxDQSxDQUFBQTtRQUVEQTtZQUE2Q0ssMkNBQXNCQTtZQWEvREEsaUNBQVlBLE1BQWVBO2dCQWIvQkMsaUJBa0RDQTtnQkFwQ09BLGlCQUFPQSxDQUFDQTtnQkFiTEEsV0FBTUEsR0FBR0EsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBV0EsQ0FBQ0E7Z0JBQ2xDQSxVQUFLQSxHQUFHQSxFQUFF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OlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mva25vY2tvdXQva25vY2tvdXQuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2tub2Nrb3V0Lm1hcHBpbmcva25vY2tvdXQubWFwcGluZy5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mva25vY2tvdXQudmFsaWRhdGlvbi9rbm9ja291dC52YWxpZGF0aW9uLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuLy8vPGFtZC1kZXBlbmRlbmN5IHBhdGg9XCJrbm9ja291dC52YWxpZGF0aW9uXCIvPlxyXG5cclxuaW1wb3J0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuaW1wb3J0IGtvID0gcmVxdWlyZSgna25vY2tvdXQnKTtcclxuXHJcbmV4cG9ydCBtb2R1bGUgQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpc3RlcmVkSXRlbVZpZXdNb2VsIHtcclxuICAgICAgICBwdWJsaWMgQ3JlYXRlZEF0IDogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgU2FsZUNyZWF0ZWRBdDogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgUHVyY2hhc2VDcmVhdGVkQXQ6IERhdGU7XHJcbiAgICAgICAgcHVibGljIEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBDb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBTYWxlRW1haWw6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgUHVyY2hhc2VFbWFpbDogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFeGNoYW5nZUdyb3VwVmlld01vZGVsIHtcclxuICAgICAgICBwdWJsaWMgQW1vdW50ID0ga28ub2JzZXJ2YWJsZTxzdHJpbmc+KCk7XHJcbiAgICAgICAgcHVibGljIENvdW50ID0ga28ub2JzZXJ2YWJsZTxudW1iZXI+KCk7XHJcbiAgICAgICAgcHVibGljIEVtYWlsID0ga28ub2JzZXJ2YWJsZTxzdHJpbmc+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEV4Y2hhbmdlRWRpdG9yVmlld01vZGVsIGV4dGVuZHMgRXhjaGFuZ2VHcm91cFZpZXdNb2RlbCB7XHJcbiAgICAgICAgcHVibGljIElzU2FsZSA9IGtvLm9ic2VydmFibGU8Ym9vbGVhbj4oKTtcclxuICAgICAgICBwdWJsaWMgVGl0bGUgPSBrby5jb21wdXRlZDxzdHJpbmc+KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNTYWxlKCkgPyBcItCa0YPQv9C40YLRjFwiIDogXCLQn9GA0L7QtNCw0YLRjFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHB1YmxpYyBPcmRlclRpdGxlID0ga28uY29tcHV0ZWQ8c3RyaW5nPigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLklzU2FsZSgpID8gXCLQntGA0LTQtdGA0LAg0L3QsCDQv9GA0L7QtNCw0LbRg1wiIDogXCLQntGA0LTQtdGA0LAg0L3QsCDQv9C+0LrRg9C/0LrRg1wiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJsaWMgSXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXk8RXhjaGFuZ2VHcm91cFZpZXdNb2RlbD4oKTtcclxuXHJcbiAgICAgICAgcHVibGljIGVycm9yczogS25vY2tvdXRWYWxpZGF0aW9uRXJyb3JzO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpc1NhbGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5Jc1NhbGUoaXNTYWxlKTtcclxuXHJcbiAgICAgICAgICAgIGtvLnZhbGlkYXRpb24ucnVsZXMucGF0dGVybi5tZXNzYWdlID0gJ0ludmFsaWQuJztcclxuXHJcbiAgICAgICAgICAgIGtvLnZhbGlkYXRpb24uaW5pdCh7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RlckV4dGVuZGVyczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzT25Nb2RpZmllZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnB1dEF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVGVtcGxhdGU6IG51bGxcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLkFtb3VudCA9IGtvLm9ic2VydmFibGU8c3RyaW5nPigpLmV4dGVuZCh7IHJlcXVpcmVkOiB0cnVlIH0pLmV4dGVuZCh7IFxyXG4gICAgcGF0dGVybjogeyBcclxuICAgICAgICBwYXJhbXM6IC9eKFxcZCpcXC5cXGR7MSwyfXxcXGQrKSQvLCBcclxuICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgYW1vdW50LlwiXHJcbiAgICB9IFxyXG59KTs7O1xyXG4gICAgICAgIHRoaXMuQ291bnQgPSBrby5vYnNlcnZhYmxlPG51bWJlcj4oKS5leHRlbmQoeyByZXF1aXJlZDogdHJ1ZSB9KS5leHRlbmQoeyBcclxuICAgIHBhdHRlcm46IHsgXHJcbiAgICAgICAgcGFyYW1zOiAvXlswLTldJC8sIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBjb3VudC5cIlxyXG4gICAgfSBcclxufSk7O1xyXG4gICAgICAgIHRoaXMuRW1haWwgPSBrby5vYnNlcnZhYmxlPHN0cmluZz4oKS5leHRlbmQoeyByZXF1aXJlZDogdHJ1ZSB9KS5leHRlbmQoeyBlbWFpbDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0ga28udmFsaWRhdGlvbi5ncm91cCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDbGVhblVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkFtb3VudChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5Db3VudChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5FbWFpbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
