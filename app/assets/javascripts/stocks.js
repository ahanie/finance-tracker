var init_stock_lookup;

init_stock_lookup = function(){
    $('#stock-lookup-form').on('ajax:before', function(event,data,status){
        show_spinner();
    });

    $('#stock-lookup-form').on('ajax:after', function(event,data,status){
        hide_spinner();
    });

    $('#stock-lookup-form').on('ajax:success', function(event,data,status){
        //debugger;
        $('#stock-lookup').html(data); //replace with khaleenaha html then eshtaghal
        
        init_stock_lookup();
    });

    $('#stock-lookup-form').on('ajax:error', function(event,data,status){
        //debugger;
        hide_spinner();
        $('#stock-lookup-results').html('');
        $('#stock-lookup-errors').html("Stock wasn't found"); //replace with khaleenaha html then eshtaghal
        
        init_stock_lookup();
    });
}

$( document ).on('turbolinks:load', function(){  
    init_stock_lookup();

})