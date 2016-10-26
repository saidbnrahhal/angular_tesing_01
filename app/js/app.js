var testingAngularApp =angular.module('testingAngularApp',[]);
testingAngularApp.controller('testingAngularCtrl',function($rootScope,$scope,$http){
	
	$scope.title ="Testing AngularJS  Application";
    
    $scope.destinations=[];

    $scope.apiKey ="c82d0b779c59934bc8b43427113f84f1";
    
    $scope.newDestination={
    	city : undefined,
    	country : undefined
    };

    $scope.addDestination =function(){
    	$scope.destinations.push(
    		{
    			city:$scope.newDestination.city,
    			country:$scope.newDestination.country
    		}	
    	);
    };

    $scope.removeDestination =function(index){
    	$scope.destinations.splice(index,1);
    };
    $scope.getWeather	 =function(destination){
      
      $http.get("http://api.openweathermap.org/data/2.5/weather?q="+destination.city+"&appid="+$scope.apiKey)
      .then(function successCallback(response){
      	if(response.data.weather){
      		destination.weather ={};
      		destination.weather.main =response.data.weather[0].main;
      		destination.weather.temp = $scope.convertKlvinToCelsius(response.data.main.temp);
      	}

      },function errorCallback(error){
      	   console.log(error);
      });
      
    };
    $scope.convertKlvinToCelsius=function(temp){

    	return Math.round(temp-273);

    };


});
