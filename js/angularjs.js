var employeeAppModule = angular.module("employeeApp", []);  

 employeeAppModule.controller("employeeCtrl", function ($scope,$http) {    
   $http.get('JSONData/Data.json')    
   .success(function(data){    
     $scope.employees = data;    
   })    
   .error(function(data,status){    
     console.error('Hata', status, data);    
     $scope.employees = { };     
    }) 

    $scope.entity = {}
	    
    $scope.edit = function(index){
      $scope.entity = $scope.employees[index];
      $scope.entity.index = index;
      $scope.entity.editable = true;
    }
       
    $scope.delete = function(index){
      $scope.employees.splice(index,1);
    }
       
    $scope.save = function(index){
      $scope.employees[index].editable = false;
      
    }
       
    $scope.add = function(){
      $scope.employees.push({
         name : "",
       country : "",
       editable : true
      })
    }
 })
 
 employeeAppModule.controller("bilgictrl",function($scope,$http){
   $http.get('JSONData/AzerbaycanHakkinda.json')
   .success(function(data){
    $scope.bilgi=data;
  })    
  .error(function(data,status){    
    console.error('Hata', status, data);    
    $scope.bilgi = { };     
   }) 
 })
 

 employeeAppModule.controller("SehirlerCTRL",function($scope,$http){
  $http.get('JSONData/TuristikSehirler.json')
  .success(function(data){
   $scope.sehirler=data;
 })    
 .error(function(data,status){    
   console.error('Hata', status, data);    
   $scope.sehirler = { };     
  }) 
})


employeeAppModule.controller("TumSehirler",function($scope,$http){
  $http.get('JSONData/Sehirler.json')
  .success(function(data){
   $scope.TumSehirler=data;
 })    
 .error(function(data,status){    
   console.error('Hata', status, data);    
   $scope.TumSehirler = { };     
  }) 
})

employeeAppModule.controller("GirisCTRL",function($scope,$http){
  $http.get('JSONData/kayitlar.json')
  .success(function(data){
   $scope.Kayitlar=data;
   $scope.tikla=function()
   {
     alert(Ad);
   }
 })    
 .error(function(data,status){    
   console.error('Hata', status, data);
   alert("Hata");   
  }) 
})

; 