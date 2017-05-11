var app=angular.module('estadoTlfno', ['ionic'])
//Controlador
app.controller('estadoCtr',function($http,$scope){
  $scope.estado =function (){
    PhoneCallTrap.onCall(function(obj) {
      var callObj = JSON.parse(obj),
        state = callObj.state,
        callingNumber = callObj.incomingNumber;
        switch (state) {
        case "RINGING":
            console.log("Phone is ringing", callingNumber);
            $scope.estadoLlamada="Llamando";
            break;
        case "OFFHOOK":
            console.log("Phone is off-hook");
            $scope.estadoLlamada="off";
            break;
        case "IDLE":
            console.log("Phone is idle");
            $scope.estadoLlamada="espera";
            break;
          }
        });
  }
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
