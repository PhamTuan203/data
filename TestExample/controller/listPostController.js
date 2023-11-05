window.listPostController = function($scope,$http,$location){

    $scope.newPost = {
        
        tieu_de:"",
        noi_dung:"",
        tac_gia:"",
        the_loai:"",
        ngay_dang:"",

    }
  

    // getData
    const apiListPost = " http://localhost:3000/posts";
    $http.get(apiListPost).then(function(response){
     if(response.status == 200){
        $scope.listPost = response.data;

     }
    });

    // thêm
  $scope.addNewPost = function(event){
    event.preventDefault();
    $http.post(apiListPost,$scope.newPost).then(function(response){
    if(response.status == 201){
       $location.path("/list-posts");

    }
    });
  }
//  delete
  $scope.deletePost = function(event,id){
    event.preventDefault();
    $http.delete(apiListPost+"/"+id);
  }


  
}