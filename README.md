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

즉 설명을 하자면 close라는 변수는 close-btn 클래스라고 명명한 것이다. 그 다음 밑에 close1은 box 클래스에 있는 디스플레이 논으로 바꾸는거야 하라고 설명을 한다.

그 다음 close.addEventListener('click', close1)라는 것은 close라는 변수 즉 close-btn 클래스에 클릭을 하면 close1이 되게 해줘라는 것이다.


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

그 다음 html에 온클릭이라는 것을 추가해줌으로서 알 수 있따.

    <button onclick="close1()" class="close-btn">x</button>
    
    라고 입력을 하면 onclick시 즉 버튼을 클릭하면 close1이라는 함수가 작동을 하는 것이다. 
    
    명심해야 할 것이 onclick="close1"라고 입력하면 작동이 안 된다. 반드시 가로()이 있어야 한다.

