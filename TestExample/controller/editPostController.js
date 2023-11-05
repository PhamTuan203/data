window.editPostController = function($scope,$http,$location,$routeParams){

    let postID = $routeParams.id;
     const apiListPost = " http://localhost:3000/posts";

     
    $scope.newPost = {
        
        tieu_de:"",
        noi_dung:"",
        tac_gia:"",
        the_loai:"",
        ngay_dang:"",

    }
     $http.get(`${apiListPost}/${postID}`).then(function(response){
    
        $scope.newPost = {
            id: response.data.id,
            tieu_de: response.data.tieu_de,
            noi_dung: response.data.noi_dung,
            tac_gia:response.data.tac_gia,
            the_loai: response.data.the_loai,
            ngay_dang: response.data.ngay_dang,


        

     }
     });

     $scope.update = function(){
        $http.put(`${apiListPost}/${postID}`,$scope.newPost);
          $location.path("/list-posts");
     }

}