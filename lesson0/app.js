// iife
(function(){
    'use strict';
    //alert("In my iffe");
    //x = 'hello';
    angular.module("nameCalcApp", [])
        .controller("nameCalcController", function($scope){
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = function(){
                var totalNumericValue = calculateNumericForString($scope.name);
                $scope.totalValue = totalNumericValue;
            }
        }
    );
    function calculateNumericForString(string){
        var totalValue = 0;
        // for(var i = 0; i < string.length; ++i)
        //     totalValue += string.charCodeAt(i);
        // return totalValue;
        var letters = string.split('');
        return letters.length == 0 ? 0 : letters.map(s=>s.charCodeAt(0)).reduce((total,num)=>total+num,);

    }
})();