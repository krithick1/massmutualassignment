(function() {
	
	var hostname = window.location.href;
	console.log(url);
	var url = hostname.split("=");
	console.log(url);
	var contentAPI = "http://localhost:8081/Content/"+url[1];
  $.getJSON( contentAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
  
   .done(function( data ) {
	   console.log(data);
      $(".blog_heading").html(data.headline);
	 $(".media-heading").html("By "+data.postedby);
	 $(".blog_img").attr("src",data.bannerImage);
	 var UserAPI = "http://localhost:8081/getUsers";
  $.getJSON( UserAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
  
   .done(function( data1 ) {
	   console.log(data1);
     
      $.each( data1.Users, function( i, item ) {
		  
       if(item.name===data.postedby)
	   {
		  $(".media-content").html(item.shortdescription); 
          $(".media-object").attr("src",item.imageurl);
          
	   }
      });
    });
	 
      $.each( data.body, function( i, item ) {
        $( "<p>" ).text(item.p).appendTo( ".main-content-blog" );
        
      });
    });
})();



