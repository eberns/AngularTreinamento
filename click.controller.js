angular.module("myApp",[])
    .controller("control", function($scope) {
        
        
        $scope.exibirNome = exibir;

        function exibir(nome) {
            $scope.titulo = "Olá "+nome+"!";
        }
        
        $scope.clicou = function() {
            $scope.titulo = "Clicou no botão";
            
        }
    });
