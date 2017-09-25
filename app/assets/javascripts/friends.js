var init_friend_lookup;

init_friend_lookup = function(){
    $('#friend-lookup-form').on('ajax:before', function(event,data,status){
        show_spinner();
    });

    $('#friend-lookup-form').on('ajax:after', function(event,data,status){
        hide_spinner();
    });

    $('#friend-lookup-form').on('ajax:success', function(event,data,status){
        //debugger;
        $('#friend-lookup').html(data); //replace with khaleenaha html then eshtaghal
        
        init_friend_lookup();
    });

    $('#friend-lookup-form').on('ajax:error', function(event,data,status){
        //debugger;
        hide_spinner();
        $('#friend-lookup-results').html('');
        $('#friend-lookup-errors').html("Person wasn't found"); //replace with khaleenaha html then eshtaghal
        
        init_friend_lookup();
    });
}

$( document ).on('turbolinks:load', function(){  
    init_friend_lookup();

})