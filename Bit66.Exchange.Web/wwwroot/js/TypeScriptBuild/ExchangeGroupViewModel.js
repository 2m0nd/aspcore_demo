/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'knockout'], function (require, exports, ko) {
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
            }
            return ExchangeEditorViewModel;
        })(ExchangeGroupViewModel);
        Common.ExchangeEditorViewModel = ExchangeEditorViewModel;
    })(Common = exports.Common || (exports.Common = {}));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwudHMiXSwibmFtZXMiOlsiQ29tbW9uIiwiQ29tbW9uLlJlZ2lzdGVyZWRJdGVtVmlld01vZWwiLCJDb21tb24uUmVnaXN0ZXJlZEl0ZW1WaWV3TW9lbC5jb25zdHJ1Y3RvciIsIkNvbW1vbi5FeGNoYW5nZUdyb3VwVmlld01vZGVsIiwiQ29tbW9uLkV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwuY29uc3RydWN0b3IiLCJDb21tb24uRXhjaGFuZ2VFZGl0b3JWaWV3TW9kZWwiLCJDb21tb24uRXhjaGFuZ2VFZGl0b3JWaWV3TW9kZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRCwwRUFBMEU7QUFDMUUsc0RBQXNEOzs7Ozs7O0lBS3RELElBQWMsTUFBTSxDQXNDbkI7SUF0Q0QsV0FBYyxNQUFNLEVBQUMsQ0FBQztRQUNsQkE7WUFBQUM7WUFRQUMsQ0FBQ0E7WUFBREQsNkJBQUNBO1FBQURBLENBUkFELEFBUUNDLElBQUFEO1FBUllBLDZCQUFzQkEseUJBUWxDQSxDQUFBQTtRQUNEQTtZQUFBRztnQkFDV0MsV0FBTUEsR0FBR0EsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBVUEsQ0FBQ0E7Z0JBQ2pDQSxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFVQSxDQUFDQTtnQkFDaENBLFVBQUtBLEdBQUdBLEVBQUVBLENBQUNBLFVBQVVBLEVBQVVBLENBQUNBO1lBQzNDQSxDQUFDQTtZQUFERCw2QkFBQ0E7UUFBREEsQ0FKQUgsQUFJQ0csSUFBQUg7UUFKWUEsNkJBQXNCQSx5QkFJbENBLENBQUFBO1FBRURBO1lBQTZDSywyQ0FBc0JBO1lBVy9EQSxpQ0FBWUEsTUFBZUE7Z0JBWC9CQyxpQkFxQkNBO2dCQVRPQSxpQkFBT0EsQ0FBQ0E7Z0JBWExBLFdBQU1BLEdBQUdBLEVBQUVBLENBQUNBLFVBQVVBLEVBQVdBLENBQUNBO2dCQUNsQ0EsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBU0E7b0JBQy9CQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQTtnQkFDaERBLENBQUNBLENBQUNBLENBQUNBO2dCQUNJQSxlQUFVQSxHQUFHQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFTQTtvQkFDcENBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLG1CQUFtQkEsR0FBR0EsbUJBQW1CQSxDQUFDQTtnQkFDckVBLENBQUNBLENBQUNBLENBQUNBO2dCQUVJQSxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQSxlQUFlQSxFQUEwQkEsQ0FBQ0E7Z0JBT3JEQSxZQUFPQSxHQUFHQTtvQkFDYkEsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDakJBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyQkEsQ0FBQ0EsQ0FBQUE7Z0JBUEdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3hCQSxDQUFDQTtZQU9MRCw4QkFBQ0E7UUFBREEsQ0FyQkFMLEFBcUJDSyxFQXJCNENMLHNCQUFzQkEsRUFxQmxFQTtRQXJCWUEsOEJBQXVCQSwwQkFxQm5DQSxDQUFBQTtJQUNMQSxDQUFDQSxFQXRDYSxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFzQ25CIiwiZmlsZSI6IkV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9rbm9ja291dC9rbm9ja291dC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3Mva25vY2tvdXQubWFwcGluZy9rbm9ja291dC5tYXBwaW5nLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuaW1wb3J0IGtvID0gcmVxdWlyZSgna25vY2tvdXQnKTtcclxuXHJcbmV4cG9ydCBtb2R1bGUgQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZWdpc3RlcmVkSXRlbVZpZXdNb2VsIHtcclxuICAgICAgICBwdWJsaWMgQ3JlYXRlZEF0IDogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgU2FsZUNyZWF0ZWRBdDogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgUHVyY2hhc2VDcmVhdGVkQXQ6IERhdGU7XHJcbiAgICAgICAgcHVibGljIEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBDb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBTYWxlRW1haWw6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgUHVyY2hhc2VFbWFpbDogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEV4Y2hhbmdlR3JvdXBWaWV3TW9kZWwge1xyXG4gICAgICAgIHB1YmxpYyBBbW91bnQgPSBrby5vYnNlcnZhYmxlPHN0cmluZz4oKTtcclxuICAgICAgICBwdWJsaWMgQ291bnQgPSBrby5vYnNlcnZhYmxlPG51bWJlcj4oKTtcclxuICAgICAgICBwdWJsaWMgRW1haWwgPSBrby5vYnNlcnZhYmxlPHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRXhjaGFuZ2VFZGl0b3JWaWV3TW9kZWwgZXh0ZW5kcyBFeGNoYW5nZUdyb3VwVmlld01vZGVsIHtcclxuICAgICAgICBwdWJsaWMgSXNTYWxlID0ga28ub2JzZXJ2YWJsZTxib29sZWFuPigpO1xyXG4gICAgICAgIHB1YmxpYyBUaXRsZSA9IGtvLmNvbXB1dGVkPHN0cmluZz4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Jc1NhbGUoKSA/IFwi0JrRg9C/0LjRgtGMXCIgOiBcItCf0YDQvtC00LDRgtGMXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHVibGljIE9yZGVyVGl0bGUgPSBrby5jb21wdXRlZDxzdHJpbmc+KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNTYWxlKCkgPyBcItCe0YDQtNC10YDQsCDQvdCwINC/0YDQvtC00LDQttGDXCIgOiBcItCe0YDQtNC10YDQsCDQvdCwINC/0L7QutGD0L/QutGDXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBJdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheTxFeGNoYW5nZUdyb3VwVmlld01vZGVsPigpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpc1NhbGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5Jc1NhbGUoaXNTYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDbGVhblVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkFtb3VudChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5Db3VudChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5FbWFpbChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
