window.TrangChuController = function ($scope) {
  $scope.title = "this is trang chủ";
  $scope.themMoi = function () {
    console.log($scope.inpuValue);
    console.log($scope.inpuValue.name);
    console.log($scope.inpuValue.address);
  };
};
