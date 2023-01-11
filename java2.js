let hello = document.getElementById('hello').innerHTML = 'HI';
document.getElementById('hello').style.color='red';
document.getElementById('hello').style.fontSize='50px';
console.log(hello);

// id갖고 올 때는 getElementById쓴다 쿼리 셀렉터가 아니다.
// getElementById('hello') id 갖고 온다고 했으니깐 #을 안 붙이는 거다.
// let hello = document.getElementById('hello').innerHTML = 'HI';


let btn = document.querySelector('.close-btn');

//정석적인 함수
function 감자() {
  document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!!'
}

btn.addEventListener('click', 감자)

// 설명을 추가적으로 하자면 btn은 close-btn 클래스로 설정한다
// 감자()라는 함수를 추가해준다.
//  이 감자는 innerHTML = '자바스크립트 너무 재밌어요!!'로 바꿔주는 것이다.
// btn.addEventListener('click', 감자)는 btc에 클릭이라는 이벤트가 일어날 시에 
// 감자라는 함수가 실행이 되도록 해주세요 하는 것이다;.


// 콜백함수
btn.addEventListener('click', function() {
  document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!!'
})

// 콜백함수는 밑에 클릭을 먼저 입력해주는 것을 콜백함수라고 하는 것이다.



let close = document.querySelector('.close-btn')

function close1() {
  document.querySelector('.box').style.display= 'none'
}


// close.addEventListener('click', close1)

let open = document.querySelector('.open-btn')

function open1() {
  document.querySelector('.box').style.display= 'flex'
}

// open.addEventListener('click', open1)

// 너무 당연한 것인데 함수랑 변수 이름을 같게 하면 안 된다.