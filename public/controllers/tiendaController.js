angular.module("tiendaStore")
.controller("tiendaStoreCtrl", function ($scope) {

    $scope.data = {
        productos: [
          { nombre: "Polera rojo", descripcion: "Para niños", precio: 100, categoria: "Polera" },
          { nombre: "Polera naranja", descripcion: "Para niños", precio: 80, categoria: "Polera" },
          { nombre: "Polera negro", descripcion: "Para niños", precio: 100, categoria: "Polera" },
          { nombre: "Vestido verde", descripcion: "Elegante", precio: 210, categoria: "Vestido" },
          { nombre: "Solera blanco", descripcion: "Para el carnaval", precio: 50, categoria: "Solera" },
          { nombre: "Vestido negro", descripcion: "para una fiesta", precio: 302, categoria: "Vestido" },
          { nombre: "Vestido sexi", descripcion: "probocativo", precio: 252, categoria: "Vestido" },]
    };
});