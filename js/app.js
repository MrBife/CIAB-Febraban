function popUp() {
    document.querySelector('.popup-content').style.display = 'block';
    document.querySelector('.popup-black-overlay').style.display = 'block';
}

function popUpClose() {
    document.querySelector('.popup-content').style.display = 'none';
    document.querySelector('.popup-black-overlay').style.display = 'none';
}

function counterAdd(elem) {
    var input = elem.parentNode.querySelector('.counter-input');
    if (input.value < 99) {
        input.value++;
    }
}

function counterTake(elem) {
    var input = elem.parentNode.querySelector('.counter-input');
    if (input.value > 0) {
        input.value--;
    }
}

function notifyAdd(n){
    var $noty = $("#master_side #menu .notify");
    var quant = parseInt($noty.html());
    var href  = window.location.href;
    
    if(href.indexOf("?") > 0){
        if(n){
            window.history.replaceState(null, null, href.split("?")[0] + "?" + String(n));
        } else {
            window.history.replaceState(null, null, href.split("?")[0] + "?" + String(quant+1));
        }
    } else {
        window.history.replaceState(null, null, href + "?" + String(quant+1));
    }

    if(n){
        $noty.html(parseInt(quant)+parseInt(n))
             .removeClass("invisible");
    } else {
        $noty.html(quant+1)
             .removeClass("invisible");
    }
}

function notifySub(n, $this){
    var $noty = $("#master_side #menu .notify");
    var quant = parseInt($noty.html());
    var href  = window.location.href;

    if($this){
        var val = $($this).next().val();
        if(!val || val == "0"){
            return false;
        }
    }

    if(quant > 0){
        if(href.indexOf("?") > 0){
            if(href.split("?")[1] == "1"){
                window.history.replaceState(null, null, href.split("?")[0]);
            } else {
                window.history.replaceState(null, null, href.split("?")[0] + "?" + String(quant-1));
            }
        } else {
            window.history.replaceState(null, null, href + "?" + String(quant-1));
        }

        if(quant == 1){
            $noty.addClass("invisible");
        }
        if(n){
            $noty.html(quant-n);
        } else {
            $noty.html(quant-1);
        }
    }

}