let start = document.querySelector(".start") ;
let stop = document.querySelector(".stop") ;
let reset = document.querySelector(".reset") ;
let time = document.querySelector(".timer") ;

let isStop = true ;

start.addEventListener("click",(e) => {
    isStop = false ;
    timer() ;
})

let s = 0 ;
let m = 0 ;
let h = 0 ;

let timer = () => {
    if(!isStop) {
        s = parseInt(s) ;
        m = parseInt(m) ;
        h = parseInt(h) ;
        s++ ;
        
        if(s == 60) {
            s = 0 ;
            m++ ;
        }
        
        if(m == 60) {
            m = 0 ;
            h++ ;
        }

        if(s < 10) {
            s = `0${s}` ;
        }

        if(m < 10) {
            m = `0${m}` ;
        }

        if(h < 10) {
            h = `0${h}` ;
        }

        time.innerHTML = `${h} : ${m} : ${s}`
        setTimeout(timer, 1000);
    }
}

stop.addEventListener("click",(e) => {
    isStop = true ;
})

reset.addEventListener("click",(e) => {
    isStop = true ;
    time.innerHTML = "00 : 00 : 00" ;
})