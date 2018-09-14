
var app = angular.module('recipeBoxApp', [])
 .controller('recipeBoxCtrl', function($scope) {
  
   
 $scope.saved = localStorage.getItem('_ckallemeyn_recipebox');
  
  $scope.recipeList = (localStorage.getItem('_ckallemeyn_recipebox')!==null) ? JSON.parse($scope.saved) : [{
   title: "Easy Cheese Straws",
   ingredients: "1/2 cup of butter, 2 cups of shredded cheese, 1 cup flour, 1/2 tsp salt, 1/4 tsp cayenne pepper"
  }, {
   title: "Ice-cream",
   ingredients: "Milk, Chocolate, Sugar"
  }, {
   title: "Cheesecake",
   ingredients: "Milk, cream, buscuits, sugar"
  }, {
   title: "Cake",
   ingredients: "Milk, eggs, vanilla, chocolate"
  }]
  localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));


  $scope.addRecipe = function() {
   if ($scope.newRecipe != null && $scope.newIngredients != null) {
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
   if (confirm("This recipe is going to be deleted")) {
    $scope.recipeList.splice(index, 1)
    localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));
   }
  }
  
  $scope.editRecipe = function(index) {
   var ingredients = $scope.recipeList[index].ingredients
   var result = prompt("Edit the ingredients: ", ingredients)
   if(result != null){
    $scope.recipeList[index].ingredients = result;
    localStorage.setItem('_ckallemeyn_recipebox', JSON.stringify($scope.recipeList));
   }
  }

 });

//jQuery for Collapsible area 
  $(document).ready(function(){
    $('.collapsible').collapsible();
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