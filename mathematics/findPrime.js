// https://programmers.co.kr/learn/courses/30/lessons/12921
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

function solution(n) {
	let primeArr = [];

	for (let i = 0; i <= n; i++) {
		primeArr.push(true);
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (primeArr[i]) {
			for (let j = i * i; j <= n; j += i) {
				primeArr[j] = false;
			}
		}
	}

	primeArr.splice(0, 2, false, false);
	return primeArr.filter((el) => { return el; }).length;
}