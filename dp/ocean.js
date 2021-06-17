// 문제
// 자신이 감옥에 간 사이 연인이었던 줄리아를 앤디에게 빼앗겨 화가 난 조지는 브레드, 맷과 함께 앤디 소유의 카지노 지하에 있는 금고를 털기로 합니다. 온갖 트랩을 뚫고 드디어 금고에 진입한 조지와 일행들. 조지는 이와중에 감옥에서 틈틈이 공부한 알고리즘을 이용해 target 금액을 훔칠 수 있는 방법의 경우의 수를 계산하기 시작합니다.

// 예를 들어 $50 을 훔칠 때 $10, $20, $50 이 있다면 다음과 같이 4 가지 방법으로 $50을 훔칠 수 있습니다.

// $50 한 장을 훔친다
// $20 두 장, $10 한 장을 훔친다
// $20 한 장, $10 세 장을 훔친다
// $10 다섯 장을 훔친다
// 훔치고 싶은 target 금액과 금고에 있는 돈의 종류 type 을 입력받아, 조지가 target 을 훔칠 수 있는 방법의 수를 리턴하세요.

// 입력
// 인자 1: target
// Number 타입의 100,000 이하의 자연수
// 인자 2: type
// Number 타입을 요소로 갖는 100 이하의 자연수를 담은 배열
// 출력
// Number 타입을 리턴해야 합니다.
// 조지가 target을 훔칠 수 있는 방법의 수를 숫자로 반환합니다.
// 주의사항
// 모든 화폐는 무한하게 있다고 가정합니다.

function ocean(target, type) {
  // 각 인덱스 no# = 만드려는 금액 을 의미
  let bag = [1];

  for (let i = 1; i <= target; i++) bag[i] = 0;
  
  for (let i = 0; i < type.length; i++) {
    for(let j = 1; j <= target; j++)
      if(type[i] <= j)
  			// 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해준다       
        bag[j] += bag[j-type[i]];
  }
  return bag[target];
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output = ocean(100, [10, 20, 50]);
console.log(output); // 10

let output = ocean(30, [5, 6, 7]);
console.log(output); // 4