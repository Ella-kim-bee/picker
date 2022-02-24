let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
// menu toggle
let btnToggle = document.getElementById("btnToggle");
let $header = document.getElementById("header");

// like toggle
let btnLikes = document.querySelectorAll(".like");

// tooltips
let btnTooltips = document.querySelectorAll(".btn_tooltips > button");
let tt_info = [
    {
        image: "images/img_index_weekly_tooltip_eyebrow.jpg",
        alt: "shuuemura eyebrow",
        brandName: "shu uemura",
        prodectName: "하드 포뮬라 - 스톤 그레이",
        href: "eyebrow#shuuemura.html"
    },
    {
        image: "images/img_index_weekly_tooltip_eyeshadow.jpg",
        alt: "mac eyeshadow",
        brandName: "mac",
        prodectName: "바이 나인 팔레트",
        href: "eyeshadow#mac.html"
    },
    {
        image: "images/img_index_weekly_tooltip_face.jpg",
        alt: "espoir face",
        brandName: "espoir",
        prodectName: "프로 테일러 비 글로우 쿠션 올 뉴 SPF42 PA++(단품+리필) - 21호",
        href: "face#espoir.html"
    },
    {
        image: "images/img_index_weekly_tooltip_lip.jpg",
        alt: "bobbibrown lip",
        brandName: "bobbibrown",
        prodectName: "크러쉬드 샤인 젤리스틱",
        href: "lip#bobbibrown.html"
    }
];
let sWeekly = document.querySelector("section.weekly");

// category mobile
const btnCateM = {
    lips: document.querySelectorAll("ul.cate_wrap_M button")[0],
    faces: document.querySelectorAll("ul.cate_wrap_M button")[1],
    eyes: document.querySelectorAll("ul.cate_wrap_M button")[2]
};
let cateLists = { 
    lips: document.querySelectorAll("ul.cate_wrap li.lip_lists"),
    faces: document.querySelectorAll("ul.cate_wrap li.face_lists"),
    eyes: document.querySelectorAll("ul.cate_wrap li.eye_lists")
};

// toprank
let tabs = document.querySelectorAll("div.tabs_wrap > ul > li");
let tabsBar = document.querySelectorAll("div.tabs_wrap > ul > li")[12];
let lists = document.querySelectorAll("ul.lists_wrap > li");

// ===== function =====
// ===== visual slide =====
function slider(){
    const slides = document.querySelectorAll(".visual .slides");
    const visual_pns = document.querySelectorAll(".visual .pagination button.pages");
    //const visual_prev = document.querySelector(".visual buton.prev");
    //const visual_next = document.querySelector(".visual buton.next");
    let cnt = 0; // 
    let si_01 = 0; // interval
    for(let i = 0; i < visual_pns.length; i++){
        visual_pns[i].addEventListener("click",function(){
            let cur_num = i;
            if(cur_num == cnt) return;
            cnt = cur_num;
            slide_img(cnt, 'none');
            pagination_change(cnt);
        });
    }

    function count_plus(){
        cnt = cnt == slides.length - 1 ? 0 : cnt + 1;
        slide_img(cnt, 'transform 0.5s');
        pagination_change(cnt);
    }

    function count_minus(){
        cnt = cnt == 0 ? slides.length - 1 : cnt - 1;
        slide_img(cnt, 'transform 0.5s');
        pagination_change(cnt);
    }

    function slide_img(num, transition_val){
        stop_si();
        let next_num = num == slides.length - 1 ? 0 : num + 1;
        let prev_num = num == 0 ? slides.length - 1 : num - 1;
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove("cur");
            slides[i].classList.remove("next");
            slides[i].style.transition = 'none';
        }
        if(slides.length == 2){
            slides[next_num].classList.add('next')
            slides[next_num].style.transition = transition_val;
            if(num == 0){
                slides[next_num].classList.add('next')
                slides[next_num].style.transition = transition_val;
            }
            else if(num == 1){
                slides[prev_num].classList.add('prev')
                slides[prev_num].style.transition = transition_val;
            }
            
        }
        else if(slides.length >= 3){
            slides[num].classList.add('cur');
            slides[num].style.transition = transition_val;
            slides[prev_num].classList.add('prev');
            slides[prev_num].style.transition = transition_val;
            slides[next_num].classList.add('next')
            slides[next_num].style.transition = transition_val;
        }
        
        start_si();
    }

    function pagination_change(num){
        for(let i = 0; i < visual_pns.length; i++){
            visual_pns[i].classList.remove("active");
        }
        visual_pns[num].classList.add("active");
    }

    function start_si(){
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = setInterval(count_plus, 3000);
    }

    function stop_si(){
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = 0;
    }

    start_si();
}

slider();


// ===== addImg random =====
function addNumRandom(){
    let num = Math.ceil(Math.random() * 10) % 4;
    if(num > 0 && num < 4){
    document.querySelector("div.add_wrap img").src = 'images/img_index_header_gnb_banner_0'+ num +'.png';
    }
    else{
        document.querySelector("div.add_wrap img").src = 'images/img_index_header_gnb_banner_03.png';
    }
}

// ===== menu toggle =====
btnToggle.addEventListener('click', function(e){
    let e2 = e ? e : window.event;
    $header.classList.toggle('on');
    document.body.classList.toggle('scroll_disable');
    addNumRandom();
});

// ===== header.bg =====
window.addEventListener('scroll',function(e){
    let e2 = e ? e : window.event;
    if(window.scrollY >= sWeekly.offsetTop){
        $header.classList.add('bg');
    }
    else{
        $header.classList.remove('bg');
    }
});

// ===== like toggle =====
for(let i = 0; i < btnLikes.length; i++){
    btnLikes[i].addEventListener('click', function(e){
        let e2 = e ? e : window.event;
        btnLikes[i].classList.toggle('active');
    });
}

// ===== tooltips =====
function tootipClick(){
    for(let i = 0; i < btnTooltips.length; i++){
        btnTooltips[i].addEventListener('click', function(e){
            let e2 = e ? e : window.event;
            document.getElementById("tt_img").src = tt_info[i].image;
            document.getElementById("tt_img").alt.innerHTML = tt_info[i].alt;
            document.getElementById("tt_title").innerHTML = tt_info[i].brandName;
            document.getElementById("tt_desc").innerHTML = tt_info[i].prodectName;
            document.getElementById("tt_more").href = tt_info[i].href;
            sWeekly.classList.add('on');
        });
    }
    document.getElementById("tt_close").addEventListener('click',function(e){
        let e2 = e ? e : window.event;
        sWeekly.classList.remove('on');
    });
}
tootipClick();

// ===== category mobile =====
function cateMobVersion(cateName){
    btnCateM.lips.parentElement.classList.remove('active');
    btnCateM.faces.parentElement.classList.remove('active');
    btnCateM.eyes.parentElement.classList.remove('active');
    btnCateM[cateName].parentElement.classList.add('active');
    for(let j = 0; j < cateLists.lips.length; j++){
        cateLists.lips[j].style.display = 'none';
        cateLists.faces[j].style.display = 'none';
        cateLists.eyes[j].style.display = 'none';
    }
    for(let k = 0; k < cateLists[cateName].length; k++){
        cateLists[cateName][k].style.display = 'block';
    }
}

// ===== toprank ===== // mobile 수정 후 안되면 함수로 묶자
for(let i = 0; i < lists.length; i++){
    tabs[i].addEventListener('click', function(e){
        let e2 = e ? e : window.event;
        for(let i = 0; i < lists.length; i++){
            tabs[i].classList.remove('active');
            lists[i].classList.remove('active');
        }
        tabs[i].classList.add('active');
        lists[i].classList.add('active');
        tabsBar.style.left = tabs[i].offsetLeft + document.body.scrollLeft + "px";
        tabsBar.style.width = tabs[i].offsetWidth + "px";
    });
}
////////////////////////////////////////////////////////////////////////////////////////

if(!isMobile){ // desktop
    // ===== bestseller slide =====
    function rolling_slides(_targetWrap){

        const sectionName = _targetWrap; // .bestseller
        let viewUl = document.querySelector(sectionName +' div.view_mask > ul');
        let viewUlLi = document.querySelectorAll(sectionName +' div.view_mask > ul > li');
        const btnPrev = document.querySelector(sectionName +' button.prev');
        const btnNext = document.querySelector(sectionName +' button.next');

        const liWidth = viewUlLi[0].offsetWidth;
        const moveCnt = 1; // 넘기는 li 갯수
        let clickEvent = true;
        let setItv = 0; // undefined
        
        (function init(){
            for(let i = 1; i <= moveCnt; i++){
                viewUl.insertBefore(viewUlLi[viewUlLi.length - 1], viewUl.firstElementChild);
            }
            viewUl.style.marginLeft = -(liWidth * moveCnt) + "px";
        })(); // 즉시 실행
        function movement(_direction){
            stopSetItv();
            let ulAni = viewUl.animate([{ left: _direction * liWidth +"px" }], {duration: 300, iterations: 1});
            ulAni.addEventListener('finish',function(){
                viewUlLi =  document.querySelectorAll(sectionName +' div.view_mask > ul > li');
                if(_direction == 1){
                viewUl.insertBefore(viewUlLi[viewUlLi.length - 1], viewUl.firstElementChild);
                }
                else if(_direction == -1){
                    viewUl.appendChild(viewUlLi[0]);
                }
                viewUl.style.left = "0px";
                clickEvent = true;
                startSetItv();
            });
        }
        
    
        btnPrev.addEventListener('click',function(){
            if(clickEvent){
                clickEvent = false;
                movement(1);
            }
        });
        
        function nextItv(){ 
            if(clickEvent){
                clickEvent = false;
                movement(-1);
            }
        }
        
        btnNext.addEventListener('click', nextItv);
    
        // interval
        function startSetItv(){
            if(setItv != 0) clearInterval(setItv);
            setItv = setInterval(nextItv, 4000);
        }
        function stopSetItv(){
            if(setItv != 0) clearInterval(setItv);
            setItv = 0;
        }
        startSetItv();
    }
    rolling_slides(".bestseller");
}

let initialX = null;
let tabUl = document.querySelector('div.tabs_wrap ul');

if(isMobile) {  //tab, mob

   // ===== bestseller slide =====
    function rolling_slides_TM(_targetWrap){

        const sectionName = _targetWrap; // .bestseller
        let viewUl = document.querySelector(sectionName +' div.view_mask > ul');
        let viewUlLi = document.querySelectorAll(sectionName +' div.view_mask > ul > li');
        const btnPrev = document.querySelector(sectionName +' button.prev');
        const btnNext = document.querySelector(sectionName +' button.next');

        let clickEvent = true;
        let setItv = 0; // undefined
        let setItv_02 = 0;
        
        function init(){
            for(let i = 0; i < viewUlLi.length; i++){
                viewUlLi[i].classList.remove('prodect_li_prev')
                viewUlLi[i].classList.remove('prodect_li_next')
            }
        }
        function prodect_prev(){
            stopSetItv();
            viewUlLi =  document.querySelectorAll(sectionName +' div.view_mask > ul > li');
            for(let i = 0; i < viewUlLi.length; i++){
                viewUlLi[i].classList.add('prodect_li_prev')
            }
            viewUl.insertBefore(viewUlLi[viewUlLi.length - 1], viewUl.firstElementChild);
            clickEvent = true;
            startSetItv();
        }
        function prodect_next(){
            stopSetItv();
            viewUlLi =  document.querySelectorAll(sectionName +' div.view_mask > ul > li');
            for(let i = 0; i < viewUlLi.length; i++){
                viewUlLi[i].classList.add('prodect_li_next')
            }
            viewUl.appendChild(viewUlLi[0]);
            clickEvent = true;
            startSetItv();
        }
        

        btnPrev.addEventListener('click',function(){
            if(clickEvent){
                clickEvent = false;
                prodect_prev();
            }
        });
        
        function nextItv(){ 
            if(clickEvent){
                clickEvent = false;
                prodect_next();
            }
        }
        
        btnNext.addEventListener('click', nextItv);

        // interval
        function startSetItv(){
            if(setItv != 0) clearInterval(setItv);
            if(setItv != 0) clearInterval(setItv_02);
            setItv = setInterval(nextItv, 3000);
            setItv_02 = setInterval(init, 100);
        }
        function stopSetItv(){
            if(setItv != 0) clearInterval(setItv);
            if(setItv != 0) clearInterval(setItv_02);
            setItv = 0;
            setItv_02 = 0;
        }
        startSetItv();
    }
    rolling_slides_TM(".bestseller");


    // ===== bestseller slide =====
    /*function slider(){
        const lists = document.querySelectorAll(".bestseller ul.slideAnimate > li"); //slides
        const best_prev = document.querySelector(".bestseller buton.prev");
        const best_next = document.querySelector(".bestseller buton.next");
        let cnt = 0; // 
        let si_01 = 0; // interval
        
        for(let i = 0; i < visual_pns.length; i++){
            visual_pns[i].addEventListener("click",function(){
                let cur_num = i;
                if(cur_num == cnt) return;
                cnt = cur_num;
                slide_img(cnt, 'none');
                pagination_change(cnt);
            });
        }

        function count_plus(){
            cnt = cnt == lists.length - 1 ? 0 : cnt + 1;
            slide_img(cnt, 'transform 0.5s');
        }

        function count_minus(){
            cnt = cnt == 0 ? lists.length - 1 : cnt - 1;
            slide_img(cnt, 'transform 0.5s');
        }

        function slide_img(num, transition_val){
            stop_si();
            let next_num = num == lists.length - 1 ? 0 : num + 1;
            let prev_num = num == 0 ? lists.length - 1 : num - 1;
            for(let i = 0; i < lists.length; i++){
                lists[i].style.transition = 'none';
            }
            if(lists.length == 2){
                lists[next_num].style.transition = transition_val;
                if(num == 0){
                    lists[next_num].style.transition = transition_val;
                }
                else if(num == 1){
                    lists[prev_num].style.transition = transition_val;
                }
                
            }
            else if(lists.length >= 3){
                lists[num].style.transition = transition_val;
            }
            
            start_si();
        }

        function start_si(){
            if(si_01 != 0){
                clearInterval(si_01)
            }
            si_01 = setInterval(count_plus, 3000);
        }

        function stop_si(){
            if(si_01 != 0){
                clearInterval(si_01)
            }
            si_01 = 0;
        }

        start_si();
    }

    slider();*/
    ///////////////////////////////////////////////////////////////////

    if(screen.width >= 768){ // tab
         // ===== top rank tablet swipe =====
        function initTouch(e) {
            initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
        };

        function swipeDirection(e) {
            if (initialX !== null) {
                const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
                let diffX = initialX - currentX;
                if(diffX < 0 ){
                    tabUl.style.transform = `translateX(0px)`; //  console.log("to left")
                    document.querySelector('div.tabs_wrap').classList.add('blur');
                }
                else{
                    tabUl.style.transform = `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`; // console.log("to right")
                    document.querySelector('div.tabs_wrap').classList.remove('blur');
                }
                initialX = null;
            }
        }
        tabUl.addEventListener("touchstart", initTouch);
        tabUl.addEventListener("touchmove", swipeDirection);
    }
    else { // mob
        // ===== tooltips & scrollY 제어 =====
        tootipClick();
        for(let i = 0; i < btnTooltips.length; i++){
            btnTooltips[i].addEventListener('click', function(e){
                document.body.classList.add('scroll_disable');
            });
        }
        document.getElementById("tt_close").addEventListener('click',function(e){
            document.body.classList.remove('scroll_disable');
        });

        // ===== category mobile =====
        cateMobVersion;

        // ===== toprank swipe =====
        function initTouch(e) {
            initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
        };

        function swipeDirection(e) {
            if (initialX !== null) {
                const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
                let diffX = initialX - currentX;
                if(diffX < 0 ){
                    tabUl.style.transform = `translateX(0px)`; //  console.log("to left")
                    document.querySelector('div.tabs_wrap').classList.add('blur');
                }
                else {
                    if(tabUl.style.transform == `translateX(-150px)`){
                        tabUl.style.transform = `translateX(-300px)`;
                    }
                    else if(tabUl.style.transform == `translateX(-300px)`){
                        tabUl.style.transform = `translateX(-450px)`;
                    }	
                    else if(tabUl.style.transform == `translateX(-450px)`){
                        tabUl.style.transform = `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`;
                        document.querySelector('div.tabs_wrap').classList.remove('blur');
                    }
                    else if(tabUl.style.transform == `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`){
                        tabUl.style.transform = `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`;
                        document.querySelector('div.tabs_wrap').classList.remove('blur');
                    }
                    else{
                        tabUl.style.transform = `translateX(-150px)`;
                    }

                    /*if(tabUl.style.transform == `translateX(-200px)`){
                        tabUl.style.transform = `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`; // console.log("to right")
                        document.querySelector('div.tabs_wrap').classList.remove('blur')
                        console.log(diffX)
                    }
                    else if(tabUl.style.transform = `translateX(-${tabUl.offsetWidth - window.outerWidth}px)`){
                    }
                    else {
                        tabUl.style.transform = `translateX(-200px)`;
                        console.log("*2"+diffX)
                    }*/
                }
            }
                initialX = null;
        }
        tabUl.addEventListener("touchstart", initTouch);
        tabUl.addEventListener("touchmove", swipeDirection);
        

        function rolling_slides(_targetWrap){

            const sectionName = _targetWrap; // .event

            const viewMask = document.querySelector(sectionName +' div.view_mask');
            let viewUl = document.querySelector(sectionName +' div.view_mask > ul');
            let viewUlLi = document.querySelectorAll(sectionName +' div.view_mask > ul > li');
            const paginations = document.querySelectorAll(sectionName +' div.pagination button.pages');

            const liWidth = viewUlLi[0].offsetWidth;
            const duration = 300; // 이동속도
            let cnt = 1;
            let setItv = 0; // undefined

            (function init(){
                viewUl.insertBefore(viewUlLi[viewUlLi.length - 1], viewUl.firstElementChild);
                viewUl.style.marginLeft = -(liWidth) + "px";
            })(); // 즉시 실행
            for(let i = 0; i < paginations.length; i++){
                paginations[i].addEventListener('click', function(){
                    for(let j = 0; j < paginations.length; j++){
                        paginations[j].classList.remove("active");
                    }
                    paginations[i].classList.add("active");
                    viewUlLi[i] = viewUlLi[1];
                });
            }
            
            function movement(_direction){
                stopSetItv();
                let ulAni = viewUl.animate([{ left: _direction * liWidth +"px" }], {duration: 300, iterations: 1});
                ulAni.addEventListener('finish',function(){
                    viewUlLi =  document.querySelectorAll(sectionName +' div.view_mask > ul > li');
                    if(_direction == 1){
                    viewUl.insertBefore(viewUlLi[viewUlLi.length - 1], viewUl.firstElementChild);
                    }
                    else if(_direction == -1){
                        viewUl.appendChild(viewUlLi[0]);
                    }
                    viewUl.style.left = "0px";
                    for(let j = 0; j < paginations.length; j++){
                        paginations[j].classList.remove("active");
                    }
                    if(cnt == 3){
                        paginations[cnt++].classList.add("active");
                        cnt = 0;
                    } else{
                        paginations[cnt++].classList.add("active");
                    }
                    
                    startSetItv();
                });
            }
            function nextItv(){
                movement(-1);
            }
            function startSetItv(){
                if(setItv != 0) clearInterval(setItv);
                setItv = setInterval(nextItv, 4000);
            }
            function stopSetItv(){
                if(setItv != 0) clearInterval(setItv);
                setItv = 0;
            }
            startSetItv();
        }

        rolling_slides(".event");

        // ===== event mobile slide =====
        /*function clickSlide(){ 
            var slides = $('.inner_wrap_half .info_wrap'),
                slideCount = slides.length,
                currentIndex = 0;

            var imgs = $('.imgs_wrap .img_wrap'),
                imgCount = imgs.length,
                currentImg = 0;

            var dots = $('.pagination_01 .dot_01'),
                dotCount = dots.length,
                currentDot = 0;

            let cnt = 0; 
            
            //해당 시간이 지나면 한 번만 할 일
            //var timer = setTimeout(할일, 1000); 
            //clearTimeout(대상의 이름);

            //일정시간마다 할일
            //var timer = setInterval(할일, 시간);
            //clearInterval(timer);
            
            //제이쿼리 집합개체(object) 중 특정번째 요소 선택 .eq
            //.eq(숫자)<-해당하는 요소를 선택 equivalent 동등한, 인덱스 번호와 동등한 요소
            //요소를 서서히 나타나도록 .fadeIn()

            slides.eq(currentIndex).fadeIn();
            imgs.eq(currentImg).fadeIn();
            dots.eq(currentDot).addClass('active');


            var timer = setInterval(showNextSlides, 4000);
            var timer01 = setInterval(displayNextImgs, 4000);
            var timer02 = setInterval(activeDots, 4000);
            //clearInterval(timer);

            function activeDots(){ 
                var nextDot = (currentDot +1) % dotCount;
                dots.eq(currentDot).removeClass('active');
                dots.eq(nextDot).addClass('active');
                currentDot = nextDot;

            }
            function showNextSlides(){
                    //ci가 0 번일 때, 1이 들어와야함, ci 1 ni 2, ci 2 ni 3, ci 3 ni 0
                    //slideCount 4
                    var nextIndex = (currentIndex +1) % slideCount; //슬라이드 길이로 나눠주면 다시 0번으로 갈 수 있음
                    //1. 현재 슬라이드가 사라지고 
                    slides.eq(currentIndex).fadeOut();
                    //2. 다음 슬라이드가 나타난다.
                    slides.eq(nextIndex).fadeIn();
                    currentIndex = nextIndex;
            } 

            function displayNextImgs(){
                var nextImg = (currentImg +1) % imgCount;
                imgs.eq(currentImg).fadeOut();
                imgs.eq(nextImg).fadeIn();
                currentImg = nextImg;
            }


            //도트 클릭하면 그 도트, 이미지, 슬라이드 들어오게 하기

            dots.on("click", function(){
            var curNum = dots.index(this);
            if(curNum == cnt) return;
            cnt = curNum;
            fade_imgs(cnt);
            fade_slides(cnt);
            page_change(cnt);        
        })


            function fade_imgs(num){
            clearInt();
            imgs.fadeOut(500);
            imgs.eq(num).fadeIn(500, function(){
            // setInt();
            });
        }

            function fade_slides(num){
            clearInt();
            slides.fadeOut(500);
            slides.eq(num).fadeIn(500, function(){
            // setInt();
            })
            }
    
            function page_change(num){
            dots.removeClass("active");
            dots.eq(num).addClass("active");
            }*/
           
    }
}