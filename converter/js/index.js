"use strict";!function(){var t=angular.module("myApp",[]);window.myApp=t}(),myApp.service("currencyService",["$http",function(t){var c=this;this.list=[],this.loadCache=function(){return t.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(function(t){var n=t.data;return n.push({ccy:"UAH",buy:"1",sale:"1"}),angular.copy(n,c.list)}),c.list},this.convertToUa=function(t,n){return t*n},this.convertFromUa=function(t,n){return t/n},this.addCommission=function(t,n){return t*n/100}}]),myApp.constant("mainConstants",{percentageTax:[0,1,2,3,4,5],cities:["Kiev","Dnieper","Kharkov","Lvov","Zaporozhye","Krivoy Rog"]}),myApp.controller("myController",["currencyService","mainConstants",function(n,t){var c=this;this.activeTab=!0,this.countVal=null,this.costVal=null,this.currency=n.loadCache(),this.currencyFrom={ccy:"USD",buy:"26.85000",sale:"27.15000",$$hashKey:"object:3"},this.currencyTo={ccy:"EUR",buy:"30.30000",sale:"30.80000",$$hashKey:"object:7"},this.percentageTax=t.percentageTax,this.citiesLocation=t.cities,this.city="Kiev",this.commissionValue=0,this.changeValues=function(){var t=[c.costVal,c.countVal];c.countVal=t[0],c.costVal=t[1];var n=[c.currencyTo,c.currencyFrom];c.currencyFrom=n[0],c.currencyTo=n[1]},this.convertValue=function(){var t;t=n.convertToUa(c.countVal,c.currencyFrom.buy),c.costVal=n.convertFromUa(t,c.currencyTo.sale)},this.addCommissions=function(){c.convertValue(),c.costVal-=n.addCommission(c.costVal,c.commissionValue)}}]),myApp.filter("currencyFilter",function(){return function(t,n){return t.filter(function(t){return t.ccy!==n})}});