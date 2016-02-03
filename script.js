var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider){});
app.controller('mainController', function ($scope){

  $scope.post=[
    {nombre:'Karen', comentario:'Esta es una prueba'},
  ];

  $scope.guardar=function(){
    $scope.post.push({
      nombre:$scope.nombre,
      comentario:$scope.comentario
    });

    $scope.nombre='';
    $scope.comentario=''
  };

  $scope.borrar=function(selData){
    $scope.post.splice(selData,1);
  };

  $scope.show={
    btn:false
  };

});
