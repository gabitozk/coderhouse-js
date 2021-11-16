$('#fade').click(function (e) { 
    
    $('#mostrar').fadeIn("slow");
    $('#esconder').fadeOut("slow");
    
});

$('#animar1').click(function (e) {

    $('#div1').animate({

                        width: '500px'
                       

                        },

                        "slow"
                        
                        ); 

    $('#div1').animate({

                        width: '300px'
                            
                        },
    
                        "slow"
                            
                        ); 
});

$('#animar2').click(function (e) {

    $('#div2').animate({

                        height: '500px'

                       },
                       
                       "slow"

                       ).delay(2000).animate({

                                  height: '300px'

                                  },
                                  
                                  "slow"

                                  );                   

})