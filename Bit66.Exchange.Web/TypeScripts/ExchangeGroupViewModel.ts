/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import $ = require('jquery');
import ko = require('knockout');

export module Common {
    export class RegisteredItemViewMoel {
        public CreatedAt : Date;
        public SaleCreatedAt: Date;
        public PurchaseCreatedAt: Date;
        public Amount: string;
        public Count: number;
        public SaleEmail: string;
        public PurchaseEmail: string;
    }
    export class ExchangeGroupViewModel {
        public Amount = ko.observable<string>();
        public Count = ko.observable<number>();
        public Email = ko.observable<string>();
    }

    export class ExchangeEditorViewModel extends ExchangeGroupViewModel {
        public IsSale = ko.observable<boolean>();
        public Title = ko.computed<string>(() => {
            return this.IsSale() ? "Купить" : "Продать";
        });
        public OrderTitle = ko.computed<string>(() => {
            return this.IsSale() ? "Ордера на продажу" : "Ордера на покупку";
        });

        public Items = ko.observableArray<ExchangeGroupViewModel>();

        constructor(isSale: boolean) {
            super();
            this.IsSale(isSale);
        }

        public CleanUp = () => {
            this.Amount(null);
            this.Count(null);
            this.Email(null);
        }
    }
}