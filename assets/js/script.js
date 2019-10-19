$(document).ready(function() {


    var isCharSelected = false;

    $(".charBox").on("click", function(){

    console.log("yoda clicked");
    
    isCharSelected = true;

    charSelection();
    
    });
    
    console.log(isCharSelected)
    function charSelection(){
        $("#charRow").hide();
        console.log($(this).val());
        if (isCharSelected){
            $("#charSelect").html("Your Character: ");
        }
        
    }
})