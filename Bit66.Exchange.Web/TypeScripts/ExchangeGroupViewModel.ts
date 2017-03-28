/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../typings/knockout.validation/knockout.validation.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

///<amd-dependency path="knockout.validation"/>

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

        public errors: KnockoutValidationErrors;

        constructor(isSale: boolean) {
            super();
            this.IsSale(isSale);

            ko.validation.rules.pattern.message = 'Invalid.';

            ko.validation.init({
                registerExtenders: true,
                messagesOnModified: true,
                insertMessages: true,
                parseInputAttributes: true,
                messageTemplate: null
            }, true);

            
        this.Amount = ko.observable<string>().extend({ required: true }).extend({ 
    pattern: { 
        params: /^(\d*\.\d{1,2}|\d+)$/, 
        message: "Invalid amount."
    } 
});;;
        this.Count = ko.observable<number>().extend({ required: true }).extend({ 
    pattern: { 
        params: /^[0-9]$/, 
        message: "Invalid count."
    } 
});;
        this.Email = ko.observable<string>().extend({ required: true }).extend({ email: true });

            this.errors = ko.validation.group(this);
        }

        public CleanUp = () => {
            this.Amount(null);
            this.Count(null);
            this.Email(null);
        }
    }
}