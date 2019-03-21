// Audio 객체 생성
var audio = new Audio('audio.mp3');
console.log(typeof audio + " " + audio);
window.onload = function () {
    // span 객체 얻기
    var current = document.getElementById('current');
    var total = document.getElementById('total');
    // progress 객체 얻기
    var progress = document.getElementById('progress');

    // Audio 객체에 timeupdate 이벤트 처리를 위한 리스너 부착
    // addEventListener() 함수 사용
    audio.addEventListener('timeupdate', function () {
        // 오디오의 총 재생시간 얻고 설정
        total.innerHTML = audio.duration;
        // 오디오의 현재 재생시간 얻고 설정
        current.innerHTML = audio.currentTime;
        // 타임 업데이트에 따른 프로그레스 진행정도 표시
        // 최대값 설정
        progress.max = audio.duration;
        // 진행 정도
        progress.value = audio.currentTime;
    });
};

// 재생버튼시 호출하는 함수
var play = function () {
    audio.play();
};

// 일시정지버튼시 호출하는 함수
var pause = function () {
    audio.pause();
};

// 정지버튼시 호출하는 함수
var stop = function () {
    // stio 함수는 별도로 없어서 따로 이런식으로 만들자.
    if (audio.played) {
        audio.pause();
        audio.currentTime = 0;
    }
};
