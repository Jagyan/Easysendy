/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

var app = angular.module("myApp", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                        .when("/dashboard", {
                            templateUrl: "Templates/dashboard.html",
                            controller: "dashboardController"
                        })
                        .when("/gallery", {
                            templateUrl: "Templates/gallery.html",
                            controller: "galleryController"
                        })
                        .when("/priceplans", {
                            templateUrl: "Templates/priceplans.html",
                            controller: "priceplansController"
                        })
                        .when("/autoResponderCampaigns", {
                            templateUrl: "Templates/autoResponderCampaigns.html",
                            controller: "autoResponderCampaignsController"
                        })
                     .when("/campaignGroups", {
                         templateUrl: "Templates/campaignGroups.html",
                         controller: "campaignGroupsController"
                     })
                     .when("/createCampaign", {
                         templateUrl: "Templates/createCampaign.html",
                         controller: "createCampaignController"
                     })
                     .when("/createList", {
                         templateUrl: "Templates/createList.html",
                         controller: "createListController"
                     })
                     .when("/helpdoc", {
                         templateUrl: "Templates/helpdoc.html",
                         controller: "helpDocController"
                     })
                     .when("/listTools", {
                         templateUrl: "Templates/listTools.html",
                         controller: "listToolsController"
                     })
                     .when("/myTemplates", {
                         templateUrl: "Templates/myTemplates.html",
                         controller: "myTemplatesController"
                     })
                     .when("/ordersHistory", {
                         templateUrl: "Templates/ordersHistory.html",
                         controller: "ordersHistoryController"
                     })
                     .when("/regularCampaigns", {
                         templateUrl: "Templates/regularCampaigns.html",
                         controller: "regularCampaignsController"
                     })
                     .when("/serverSettings", {
                         templateUrl: "Templates/serverSettings.html",
                         controller: "serverSettingsController"
                     })
                     .when("/supportTickets", {
                         templateUrl: "Templates/supportTickets.html",
                         controller: "supportTicketsController"
                     })
                     .when("/viewAllCampaign", {
                         templateUrl: "Templates/viewAllCampaign.html",
                         controller: "viewAllCampaignController"
                     })
                     .when("/viewList", {
                         templateUrl: "Templates/viewList.html",
                         controller: "viewListController"
                     })
                 })
                 .controller("dashboardController", function ($scope) {
                     $scope.message="Dashboard"
                 })
                 .controller("galleryController", function ($scope) {
                     $scope.message = "Gallery"
                 })
                 .controller("priceplansController", function ($scope) {
                     $scope.message = "Price Plans"
                 })
                 .controller("autoResponderCampaignsController", function ($scope) {
                     $scope.message = "Auto Responder Campaigns"
                 })
                 .controller("campaignGroupsController", function ($scope) {
                     $scope.message = "Campaign Groups"
                 })
                 .controller("createListController", function ($scope) {
                     $scope.message = "Create List"
                 })
                 .controller("helpDocController", function ($scope) {
                     $scope.message = "Help Document"
                 })
                 .controller("listToolsController", function ($scope) {
                     $scope.message = "List Tools"
                 })
                 .controller("myTemplatesController", function ($scope) {
                     $scope.message = "My Templates";
                     $scope.allBtns = true;
                     $scope.showCreate = function () {
                         $scope.createTemplate = true;
                         $scope.allBtns = false;
                         $scope.message = "Create new template";
                     };
                     $scope.hideCreate = function () {
                         $scope.createTemplate = false;
                         $scope.allBtns = true;
                         $scope.message = "My Templates";
                     };
                 })
                 .controller("ordersHistoryController", function ($scope) {
                     $scope.message = "Orders History"
                 })
                 .controller("regularCampaignsController", function ($scope) {
                     $scope.message = "Regular Campaigns"
                 })
                 .controller("serverSettingsController", function ($scope) {
                     $scope.message = "Server Settings"
                 })
                 .controller("supportTicketsController", function ($scope) {
                     $scope.message = "Support Tickets"
                 })
                 .controller("viewAllCampaignController", function ($scope) {
                     $scope.message = "View All Campaign"
                 })
                 .controller("viewListController", function ($scope) {
                     $scope.message = "View List"
                 })
                 .controller("createCampaignController", function ($scope) {
                     $scope.message = "Create Campaign"
                 })

               