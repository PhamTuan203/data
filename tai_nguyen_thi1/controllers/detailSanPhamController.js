window.detailSanPhamController = function($scope,$http,$routeParams){
    const apiSanPham = "http://localhost:3000/sanPham";
    let sanPhamID = $routeParams.id;

    $http.get(`${apiSanPham}/${sanPhamID}`).then(function(response){
            if(response.status == 200){
                $scope.newSanPham = {
                    id:response.data.id,
                    ten_sanpham :response.data.ten_sanpham,
                    gia_sanpham:response.data.gia_sanpham,
                    xuat_xu:response.data.xuat_xu,
                }
            }
    })
}