$( document ).ready(function () {
    $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }		
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
    $('#showpassword').on('click', function(e){
        var x = document.getElementById("myInput");
        e.preventDefault();
        if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
        }
    })
    $('#loadMore').on('click', function(e){
      
    })
    $('.carousel-indicators li').click( function(){
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li').removeClass('spinner-border spinner-border-sm');
            var $this = $(this);
            if (!$this.hasClass('active')) {
                
                $(this).addClass('spinner-border spinner-border-sm');
            }
           
    })
    
});



(function(){
   
}())