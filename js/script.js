// Jquery이용 
// $(document).ready()
// $('.inner')
// $('.sw-swiper' a)

$(document).ready(function () {
  // 모바일메뉴기능
  // .mb-bt를 저장해서 활용하자.
  $('.mb-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('mb-btn-open');
    $('.mb-dim').toggleClass('mb-dim-open');
    $('.mb-wrap').toggleClass('mb-wrap-open');
    // 
  });
  // 화면사이즈 체크
  $(window).resize(function () {
    // 화면너비를 계산한다.
    let temp = $(window).width();
    // 1000px 보다 크면
    if (temp > 1000) {
      // 모바일 버튼 기능 초기화
      $('.mb-btn').removeClass('mb-btn-open');
      $('.mb-dim').removeClass('mb-dim-open');
      $('.mb-wrap').removeClass('mb-wrap-open');
    }
  }); // 모바일메뉴 펼치기기능
  // 1.모바일메뉴저장

  let mb_mainmenu = $('.mb-mainmenu');
  // 2.모바일서브메뉴 저장
  let mb_submenu = $('.mb-submenu');
  // 3.펼쳐질 서브메뉴의 높이값
  let mb_submenu_high = [];
  // 높이값 계산을 실행
  $.each(mb_submenu, function (index) {
    // 각각의 .mb_submenu로 가서 li의 개수를 파악한다.
    let count = $(this).find('li').length //length는 숫자(갯수)를 말해준다.
    // 최종결과를 저장 (56*count)
    mb_submenu_high[index] = (56 * count); //56X갯수를 index(순서값)에다가 보관하라는 이야기.
  });
  // console.log(mb_menu_high);

  // 최종결과
  let mb_li = $('.mb-menu > li');
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {
      // 웹브라우저 갱신막기
      e.preventDefault();
      let temp = mb_submenu_high[index];
      mb_li.eq(index).height(temp + 60);
    });
  });
});



// js이용 : 멀티미디어 요소
window.onload = function () {
  // 비주얼 슬라이드
  let sw_visual = new Swiper('.sw-visual', {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pgnt",
      clickable: true,
    },
  });
  // 일시멈춤버튼
  // 현재상태저장
  let slide_now = 'ing'; // 이건내가직접정의한것
  $('.sw-visual-bt').click(function () {
    if (slide_now == 'ing') {
      // 현재 슬라이드 진행 중이라면
      // 슬라이드를 멈춘다.
      slide_now = 'stop';
      sw_visual.autoplay.stop();
      $(this).find('>span').text('play_arrow')
    } else {
      // 현재 슬라이드가 멈췄다.
      // 다시 슬라이드를 진행한다.
      slide_now = 'ing';
      sw_visual.autoplay.start();
      $(this).find('span').text('pause');
    }
  });
  new Swiper('.sw-banner', {
    loop: true,
    slidesPerView: 4, //P,V는 무조건 대문자 , 한줄에 6개 나와라는얘기
    spaceBetween: 20, //B는 무조건 대문자 , 배너간의 간격 이야기임
    navigation: {
      prevEl: '.sw-banner-prev',
      nextEl: '.sw-banner-next'
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1260: {
        slidesPerView: 5
      },
      1000: {
        slidesPerView: 4
      },
      860: {
        slidesPerView: 3
      }
    }
  });

  // 바로윗부분 브레이크포인트는 직접숫자조절은 한번 꼭해보길바람.

  // 배너 슬라이드 일시멈춤 버튼
  $('.sw-banner-pause').click(function () {
    // 현재 span 태그 안쪽의 글자를 읽는다.
    let temp = $(this).find('span').text();
    if (temp == 'play_arrow') {
      $(this).find('span').text('pause');
      sw_banner.autoplay.stop();
    } else {
      $(this).find('span').text('play_arrow');
      sw_banner.autoplay.start();
    }
  });

  // 화면 위로 이동
  $('.gotop').click(function () {
    $('html').animate({
      scrollTop: 0
    }); //}, 1000); 이런식으로 1000은 1초란의미 속도지정이된단얘기다.
  });

}

//   //  ~~~ () 는 ~~~함수, ()는 변수값 이라고 생각해라. 표현자체도 function이네!!
//   $('.sw-visual-bt').click(function () {
//     // $는 찾아라!!라는의미, click을햇을때 작용하고싶은것은 click옆 ()에 다적는다.
//     // 1번 아이콘바꾸기
//     $(this).toggleClass('sw-visual-bt-play');
//     //  $(this)는 $처리를한 최초값
//     // 2번 슬라이드토글시키기
//     // 현재 슬라이드상태
//     let temp = $(this).hasClass('sw-visual-bt-play');
//     if (temp) {
//       // 슬라이더멈추기
//       sw_visual.autoplay.stop();
//     } else {
//       // 슬라이더재생하기
//       sw_visual.autoplay.start();
//     }
//   });

// }

// 