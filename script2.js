
$(document).ready(function() {
    document.onkeyup = keyCheck;
    function keyCheck() {
        var keyID = event.keyCode;
        console.log(keyID);
        switch (keyID) {
            case 49:
                $('.screen').val(currScreenVal+1);
                break;
            case 50:
                $('.screen').val(currScreenVal+2);
                break;
            case 51:
                $('.screen').val(currScreenVal+3);
                break;
            case 52:
                $('.screen').val(currScreenVal+4);
                break;
            case 53:
                $('.screen').val(currScreenVal+5);
                break;
            case 54:
                $('.screen').val(currScreenVal+6);
                break;

            case 55:
                $('.screen').val(currScreenVal+7);
                break;
           case 56:
                $('.screen').val(currScreenVal+8);
                break;
           case 57:
                $('.screen').val(currScreenVal+9);
                break;
          case 187:
                $('.screen').val(currScreenVal+'+');
                break;
          case 88:
                $('.screen').val(currScreenVal+'-');
                break;
            case 191:
                $('.screen').val(currScreenVal+'/');
                break;
            case 13:
                doIt();
                break;
                 case 187:
                doIt();
                break;
           
                default:
           
        }
    }
});
function doIt(){
   try{var total=eval($('.screen').val());
   }catch(e){console.log(e);
       if(e instanceof SyntaxError){
           alert("error ")
       }
    
}