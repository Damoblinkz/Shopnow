//CONTENT LIST
//SIDENAV
//SEARCH BOX
//SIGN IN & LOGIN 
$(function(){ 
//SIDENAV
$('.sub-btn').click(function(){
       $(this).next('.sidenav-submenu').slideToggle();
       $(this).find('.dropdown').toggleClass('rotate');
     });

     //jquery for expand and collapse the sidebar
     $('.nav-item').click(function(){
       $('.side-nav').addClass('active');
       $('.nav-item').css("visibility", "hidden");
     });

     $('.close-btn').click(function(){
       $('.side-nav').removeClass('active');
       $('.nav-item').css("visibility", "visible");
     }); 

//SEARCH BOX
// Open the full screen search box
$(".search").click(function(){
$("#myOverlay").css("display", "block");
});

// Close the full screen search box
$("#closesearch").click(function(){
$("#myOverlay").css("display", "none");
});

//SIGN IN AND LOGIN
$("#signupbtn").click(function(){
			$("#signup").css("display", "block");
			$("#login").css("display", "none");	
});
 
$("#loginbtn").click(function(){
			$("#signup").css("display", "none");	
			$("#login").css("display", "block");
});

});
