// Click İşlemleriyle Menü açılıp kapanması
function openSideBar() {
  document.querySelector("#sidebar-menu").style.width = "25%";
}
function closeSideBar() {
  document.getElementById("sidebar-menu").style.width = "0";
}

// Sağ ve sol yön oklarıyla menü hareketleri
window.addEventListener("keydown", control);
var tus = new Array(37,38,39,40);

function control(key){
    if (key.keyCode == tus[0]){
        document.querySelector("#sidebar-menu").style.width = "0%";
    }else if(key.keyCode == tus[2]){
        document.querySelector("#sidebar-menu").style.width = "25%";
    }
}



// Yukarı,Aşağı yön oklarıyla menü hareketleri ve enter, esc ile gelen içerik kontrolü
var Selected;
$(window).keydown(function(key){
    if(key.which === tus[3]){
        if(Selected){
            Selected.removeClass('controlled');
            next = Selected.next();
            if(next.length > 0){
                Selected = next.addClass('controlled');
            }else{
                Selected = $('li').eq(0).addClass('controlled');
            }
        }else{
            Selected = $('li').eq(0).addClass('controlled');
        }
    }else if(key.which === tus[1]){
        if(Selected){
            Selected.removeClass('controlled');
            next = Selected.prev();
            if(next.length > 0){
                Selected = next.addClass('controlled');
            }else{
                Selected = $('li').last().addClass('controlled');
            }
        }else{
            Selected = $('li').last().addClass('controlled');
        }
    }
    /*  Jquery İle İçerik Açıp Kapama
    else if(key.which == 13){
        $('.pop-up').css('opacity', 1);
    }else if(key.which == 27){
        $('.pop-up').css('opacity', 0);
    } 
    */
});
/* Pure Js ile İçerik Açıp Kapama */
window.addEventListener("keydown", popup);
function popup(key){
    if (key.keyCode == 13){
        document.querySelector(".pop-up").style.opacity = "1";
    }else if(key.keyCode == 27){
        document.querySelector(".pop-up").style.opacity = "0";
    }
}



