(function(){
    'use strict';
    angular.module("LunchCheckApp", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.lunchMenu = "";
        $scope.textStyleObj = {
                color: "#0"
        };

        var borderStyleBlack = {
            "border-color" : "black"
        };
        var borderStyleRed = {
            "border-color" : "red"
        };
        var borderStyleGreen = {
            "border-color" : "#00FF00"
        };
        $scope.borderStyleObj = borderStyleBlack;

        $scope.checkAmount = function(){
            var items;
            if($scope.lunchMenu != "")
                items = $scope.lunchMenu.split(",").map(it=>it.trim()).filter(it=>it!="");
            else
                items = []
            var response;
            //alert($scope.lunchMenu == "");
            if($scope.lunchMenu == ""){
                response = "Please enter data, first!";
                $scope.textStyleObj.color = "#FF0000";
                $scope.borderStyleObj=borderStyleRed;
            }else if(items.length == 0){
                response = "Please enter data!"
                $scope.textStyleObj.color = "#FF0000";
                $scope.borderStyleObj=borderStyleRed;
            }else if(items.length <= 3){
                response = "Enjoy!";
                $scope.textStyleObj.color = "#00FF00";
                $scope.borderStyleObj=borderStyleGreen;
            }else{
                response = "Too much!"
                $scope.textStyleObj.color = "#00FF00";
                $scope.borderStyleObj=borderStyleGreen;
            }
            var scold = "";
            //alert(items.length + " -- " + $scope.lunchMenu.split(",").length);
            if($scope.lunchMenu != "" && items.length != $scope.lunchMenu.split(",").length)
                scold = " (blank items excluded...)"    
            $scope.response = response;
        };
    }

})();