// 문제
// 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 소문자 문자열
// 출력
// 배열(arr)을 리턴해야 합니다.
// arr[i]는 각 부분집합의 원소로 구성된 문자열
// 주의사항
// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
// arr[i]는 알파벳 순서로 정렬되어야 합니다.
// 집합은 중복된 원소를 허용하지 않습니다.
// 부분집합은 빈 문자열을 포함합니다.
// arr은 사전식 순서(lexical order)로 정렬되어야 합니다.

const powerSet = function (str) {
	let sortArr = str.split('').sort()
	sortArr = new Set(sortArr);
	sortArr = [...sortArr];
	let result = [];

	const pickOrNot = (idx, subset) => {
		if (idx === sortArr.length) {
			result.push(subset);
			return;
		}

		pickOrNot(idx + 1, subset);
		pickOrNot(idx + 1, subset + sortArr[idx]);
	};

	pickOrNot(0, '');

	return result.sort();
}

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']