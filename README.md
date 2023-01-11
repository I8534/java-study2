# java-study2







btn.addEventListener('click', function() {
  document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!!'
})

// 콜백함수는 밑에 클릭을 먼저 입력해주는 것을 콜백함수라고 하는 것이다.




let close = document.querySelector('.close-btn')

function close1() {
  document.querySelector('.box').style.display= 'none'
}

close.addEventListener('click', close1)

let open = document.querySelector('.open-btn')

function open1() {
  document.querySelector('.box').style.display= 'flex'
}

open.addEventListener('click', open1)

너무 당연한 것인데 함수랑 변수 이름을 같게 하면 안 된다. 처음엔 open1을 open으로 해서 오류가 발생하였다.

즉 설명을 하자면 close라는 변수는 close-btn 클래스라고 명명한 것이다. 그 다음 밑에 close1은 디스플레이 논으로 바꾸는거야 하라고 설명을 한다.

그 다음 close.addEventListener('click', close1)라는 것은 close라는 변수 즉 close-btn 클래스에 클릭을 하면 close1이 되게 해줘라는 것이다.






