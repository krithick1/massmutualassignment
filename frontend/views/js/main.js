(function() {
	var HeaderAPI = "http://localhost:8081/getHeader/";
  $.getJSON( HeaderAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
  
   .done(function( data ) {
	   console.log(data);
      $.each( data.Headerjson, function( i, item ) {
		 
		 if(i===0)
		 {
			 $( ".navbar-brand" ).text(item.text);
		 }
		 else{
        $( "<li>" ).addClass("myClass"+i).appendTo( ".nav" );
         $( "<a>" ).attr( "href", item.link ).attr("style","color:#fff;").text(item.text).appendTo( ".myClass"+i );
		 }
      });
	// ( ".nav" ).append('<li><a href="#"><span class="glyphicon glyphicon-search"></span> </a></li>');
    });
})();

var url = "http://localhost:8081/getContents/";

  $.getJSON(url, function (data) {

    $.each(data.contentjson, function(i, result) {
		var id= 0;
		var divhtml = "<div class='col-xs-3 col_grid'><a href='"+result.linkurl+"'> <h1>"+result.headline+"</h1> </a> <p>"+result.shortdescription+"</p>"+
		               "</div>"
		if(i>2)
		{	
	  
	       $('#data1').append(divhtml);
		}
		else{
      $('#data').append(divhtml);
		}
    });
	
  });

