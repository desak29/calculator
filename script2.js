
$(document).ready(function(){
    document.onkeyup=keyCheck;
    function keyCheck(){
        var keyID=event.keyCode;
        console.log(keyID);
        switch(keyID){
            case 49:
                $('.screen').val('1');
                break;
            case 50:
            $(".screen"),val('2');
            
        }
    }
});
