
var app = angular.module('recipeBoxApp', [])
 .controller('recipeBoxCtrl', function($scope) {
  
   
 $scope.saved = localStorage.getItem('_ckallemeyn_recipebox');
  
  $scope.recipeList = (localStorage.getItem('_ckallemeyn_recipebox')!==null) ? JSON.parse($scope.saved) : [{
   title: "Easy Cheese Straws",
   ingredients: "1/2 cup of butter, 2 cups of shredded cheese, 1 cup flour, 1/2 tsp salt, 1/4 tsp cayenne pepper"
  }, {
   title: "Bacon Water Chestnut Wraps",
   ingredients: "1lb of bacon strips, 16 oz whole water chestnuts, 1/2 cup packed brown sugar, 1/2 cup mayonnaise, 1/4 cup chili sauce"
  }, {
   title: "Swiss Cheese Bread",
   ingredients: "1 loaf of french bread, 8oz butter, 2 cups shredded Swiss cheese, 3/4 tsp celery seed, 3/4 tsp garlic powder, 3 Tbs parsley flakes"
  }, {
   title: "Buffalo Wing Poppers",
   ingredients: "20 jalapeno peppers, 8oz cream cheese, 1 cup shredded mozzarella cheese, 1 cup diced cooked chicken, 1/2 cup blue cheese salad dressing, 1/2 cup of buffalo wing sauce"
  }]
  localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));


  $scope.addRecipe = function() {
   if ($scope.newRecipe !== null && $scope.newIngredients !== null) {
     $scope.recipeList.push({
     title: $scope.newRecipe,
     ingredients: $scope.newIngredients
    })
    localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));
    $scope.newRecipe = null;
    $scope.newIngredients = null;
   }
  }

  $scope.deleteRecipe = function(index) {
   if (confirm("Are you sure you want to delete this recipe?")) {
    $scope.recipeList.splice(index, 1)
    localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));
   }
  }
  
  $scope.editRecipe = function(index) {
   var ingredients = $scope.recipeList[index].ingredients
   var result = prompt("What would you like to change? ", ingredients)
   if(result != null){
    $scope.recipeList[index].ingredients = result;
    localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));
   }
  }

 });

//jQuery for Collapsible area 
  $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
  });
/*$(document).ready(function() {


  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");

    console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);
    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});*/