/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import $ = require('jquery');
import ko = require('knockout');
import ExchangeGroupViewModel = require("./ExchangeGroupViewModel");
import ExchangeEditorViewModel = ExchangeGroupViewModel.Common.ExchangeEditorViewModel;
import RegisteredItemViewMoel = ExchangeGroupViewModel.Common.RegisteredItemViewMoel;

class ExcahngeApplication {

    public IsBusy = ko.observable<boolean>(true);
    public SaleViewModel = new ExchangeEditorViewModel(true);
    public PurchaseViewModel = new ExchangeEditorViewModel(false);
    public RegisteredItems = ko.observableArray<RegisteredItemViewMoel>();

    public initialize = () => {
         this.refresh();
    }

    refresh = () => {
        this.IsBusy(true);
        $.get("/api/v1/Exchange/GetModel", data => {
            console.log(data);
            this.IsBusy(false);

            this.SaleViewModel.CleanUp();
            this.SaleViewModel.Items(data.SalesOrders);

            this.PurchaseViewModel.CleanUp();
            this.PurchaseViewModel.Items(data.PurchaseOrders);

            this.RegisteredItems(data.Registrations);
        });
    }

    addNewExchangeGroup = (isSale: boolean) => {
        var url = "/api/v1/Exchange/" + (isSale ? "AddNewSaleItem" : "AddNewPurchaiseItem");
        var vm = isSale ? this.SaleViewModel : this.PurchaseViewModel;
        var model = ko.toJS(vm);
        $.post(url, { model: model }, () => {
            this.initialize();
        });
    }
}

export = ExcahngeApplication