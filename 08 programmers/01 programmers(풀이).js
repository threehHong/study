/* 코딩 테스트 연습 / Lv.0 / 두 수의 곱. (22.10.17)  */
/* function solution(num1, num2) {
    if(num1 <= 100 && num1>=0 && num2 <= 100 && num2>=0){
        let answer = (num1 * num2);
        return answer;
    }
} */

/* 코딩 테스트 연습 / Lv.0 / 두 수의 차. (22.10.18)  */
/* function solution(num1, num2) {
    if(num1 <= 50000 && num1>=-50000 && num2 <= 50000 && num2>=-50000){
        let answer = (num1 - num2);
        return answer;
    } else {
        let error = "error";
        console.log(error);
    }
} */

/* 코딩 테스트 연습 / Lv.0 / 나이 출력. (22.10.22)  */
/* function solution(age) {
    if(age > 0 && age <= 120) {
        let answer = (2022-age) + 1;
        return answer;
    } else {
        let error = "error";
        console.log(error);
    }
} */

/* /* 코딩 테스트 연습 / Lv.0 / 몫 구하기. (22.10.22)  */
/* function solution(num1, num2) {
    if(num1 <= 100 && num1 > 0 && num2 <= 100 && num2 > 0){
        let calc = num1 / num2;
        let answer = Math.floor(calc);
        return answer;
    } else {
        let error = "error";
        console.log(error);
    }
} */

/* 코딩 테스트 연습 / Lv.0 / 두 수의 합. (22.10.23)  */
/* function solution(num1, num2) {
    if(num1 <= 50000 && num1 >= -50000 && num2 <= 50000 && num2 >= -50000){
        let answer = num1 + num2;
        return answer;
    } else {
        console.log('error');
    }
} */

/* 코딩 테스트 연습/ Lv.0 / 숫자 비교하기. (22.10.23)  */
/* function solution(num1, num2) {
    if(num1 <= 10000 && num1 >= 0 && num2 <= 10000 && num2 >= 0){
        if(num1 == num2){
            return 1;
        } else {
            return -1;
        }
    } else {
        console.log('error');
    }
} */

/* 코딩 테스트 연습/ Lv.0 / 각도기. (22.10.24)  */
/* function solution(angle) {
    if(angle % 1 != 0){
        console.log('정수를 입력하세요');
    } else{
        if(angle < 90 && angle > 0){
            return 1;
        } 
        if (angle == 90) {
            return 2;
        } 
        if (angle < 180 && angle > 90) {
            return 3;
        } 
        if (angle == 180){
            return 4;
        }.
    }
} */

/* 코딩 테스트 연습/ Lv.0 / 두 수의 나눗셈. (22.10.25)  */
/* function solution(num1, num2) {
    if(num1 <= 100 && num1 > 0 && num2 <= 100 && num2 > 0){
        let answer = Math.floor((num1/num2) * 1000);
        return answer;
    } else {
        console.log('error');
    }
} */

/* 코딩 테스트 연습/ Lv.0 / 분수의 덧셈. (22.10.25) 테스트는 통과, 제출 후 채점하기는 X 정확성 33.3프로 */
/* function solution(denum1, num1, denum2, num2) {
    if(0 < denum1 < 1000 && 0 < num1 < 1000 && 0 < denum2 < 1000 && 0 < num2 < 1000) {
        numerator = (denum1 * num2) + (denum2 * num1);
        denominator = num1 * num2;
        
        let answer = [];
        answer[0] = numerator;
        answer[1] = denominator;

        numerator > denominator ? comp = numerator : comp = denominator;
        let maxnum = 1;
        let loop = 1;
        let i = 2;

        for(i = 2; i <= comp; i++){
            while(loop){
                a = answer[0]/i
                b = answer[1]/i
                if(a%1 != 0 || b%1 != 0) {
                    loop = 0;
                } 
                if (answer[0] % i == 0 && answer[1] % i == 0) {
                    answer[0] = answer[0] / i;
                    answer[1] = answer[1] / i;
                    maxnum *= i;
                }
            }
        }
        
        answer[0] = numerator / maxnum;
        answer[1] = denominator / maxnum;

        return answer;
    } else {
        console.log('error');
    }
} */

/* 코딩 테스트 연습/ Lv.0 / 분수의 덧셈 (22.10.27) */
/* GCD : Greatest Common Divisor */
// function solution(denum1, num1, denum2, num2) {
//     if(0 < denum1 < 1000 && 0 < num1 < 1000 && 0 < denum2 < 1000 && 0 < num2 < 1000) {
//         let numerator = (denum1 * num2) + (denum2 * num1);
//         let denominator = num1 * num2;
//         let answer = [];
        
//         /* 최대공약수 구하는 공식 밑에 내용 암기하고 다른 풀이 추후 탐구 및 정리(해당 문제에서 다른 사람의 풀이 보기 + 구글링) */
           /* 나머지 수를 결국 둘 중 최솟값에 나눈 나머지가 0이 되어야 최대공약수가 되는게 아닐까 싶음 이라는 의견 있음 */
           /* a % b에서 a<b일 경우 a % b의 결과 값은 a 이다 */
//         let GCD = (a, b) => {
//             return a % b === 0 ? b : GCD(b, a % b)
//         };

//         let gcd = GCD(numerator, denominator);
    
//         console.log(gcd)
    
//         answer[0] = numerator / gcd;
//         answer[1] = denominator / gcd;
    
//         return answer;
//     }
// }

/* 최초 gcd(3, 5)호출 기준으로

1. 3 % 5 = 3이므로 재귀함수 gcd(5, 3)
2. 5 % 3 = 2이므로 gcd(3, 2)
3. 3 % 2 = 1이므로 gcd(2, 1)
4. 2 % 1 = 0이므로 gcd(1, 0)
5. num2가 0이므로 num1인 1을 return

gcd(3, 5)는 결과는 gcd(5, 3), 
gcd(5, 3)의 결과는 gcd(3, 2), 
gcd(3, 2)의 결과는  gcd(2, 1),
gcd(2, 1)의 결과는 gcd(1, 0),
gcd(1, 0)의 결과값은 1이므로 결과적으로 gcd(3, 5)의 값도 1이됨

즉, gcd(1, 0)은 1이니까 gcd(1, 0) === 1을 반환하는 gcd(2, 1)의 값도 1,
gcd(2, 1)을 반환하는 gcd(3, 2)의 값도 1,
타고타고 가서 결과적으로 gcd(3, 5)의 값은 1이 나옴 */

/* 코딩 테스트 연습/ Lv.0 / 짝수의 합. (22.10.28) */
/* function solution(n) {
    let answer = 0;

    for(i=1; i<=n; i++){
        if(i%2 == 0){
            answer += i;
        }
    }

    return answer;
} */

/* 코딩 테스트 연습/ Lv.0 / 배열의 평균값 (22.10.28) */
/* function solution(numbers) {
    let answer = 0;
    let sum = 0;
    let arr = [];
    arr = numbers;

    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }

    answer = sum / arr.length;

    return answer;
}
numbers = [89,90,91,92,93,94,95,96,97,98,99]
console.log(solution(numbers)); */

/* 코딩 테스트 연습/ Lv.0 / 머쓱이보다 키 큰 사람 (22.10.28) */
/* function solution(array, height) {
    let answer = 0;

    for(i=0; i<array.length; i++){
        if(array[i] > height){
            answer += 1;
        }
    }
    return answer;
}
array = [180,120,140];
height = 190;
console.log(solution(array, height)); */

/* 코딩 테스트 연습/ Lv.0 / 중복된 숫자 개수 (22.10.29) */
/* function solution(array, n) {
    let answer = 0;

    for(i=0; i<array.length; i++) {
        if(array[i] == n) {
            answer ++;
        }
    }

    return answer;
}
array = [1,1,2,3,4,5];

console.log(solution(array, 1)); */

/* 코딩 테스트 연습/ Lv.0 / 양꼬치 (22.10.30) */
/* function solution(n, k) {
    var answer = 0;

    let service = 0;

    for (i = 1; i <= n; i++){
        if(i % 10 == 0) {
            service += 2000;
        }
    }

    let meat = n * 12000;
    let beverage = (k * 2000) - service;

    return answer = (meat+beverage);
}
console.log(solution(64, 3)); */

/* 코딩 테스트 연습/ Lv.0 / 편지 (22.10.30) */
/* function solution(message) {
    var answer = 0;
    
    for(i=0; i<message.length; i++){
        answer++;
    }

    return answer*2;
}
console.log(solution("i love you~")); */

/* 코딩 테스트 연습/ Lv.0 / 짝수 홀수 개수 (22.10.30) */
/* function solution(num_list) {
    let answer = [];

    let evennum = 0;
    let oddnum = 0;

    for(i=0; i<num_list.length; i++) {
        if(num_list[i] % 2 == 0){
            evennum++;
        } else {
            oddnum++;
        }
    }

    answer[0] = evennum;
    answer[1] = oddnum;

    return answer;
}
console.log(solution([1,3,5,7])); */

/* 코딩 테스트 연습/ Lv.0 / 배열 두배 만들기 (22.10.31) */
/* function solution(numbers) {
    let answer = [];

    for(i=0; i<numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }

    return answer;
}
console.log(solution([1,2,100,-99,1,2,3])); */

/* 코딩 테스트 연습/ Lv.0 / 배열 뒤집기 (22.11.01) */
/* function solution(num_list) {
    let answer = [];

    for(i=0; i < num_list.length; i++){
        answer[i] = num_list[num_list.length-1-i]
    }

    return answer;
}

console.log(solution([1,2,3,4,5])) */

/* 코딩 테스트 연습/ Lv.0 / 문자열 뒤집기 (22.11.03) */
/* function solution(my_string) {
    let answer = '';

    for(i=0; i<my_string.length; i++){
        console.log(my_string[(my_string.length-1)-i]);
        answer[i] = my_string[(my_string.length-1)-i];
    }

    return answer;
}


console.log(solution("jaron")); */

/* 코딩 테스트 연습/ Lv.0 / 제곱수 판별하기 (22.11.07) */
/* Number.isInteger() 괄호안의 숫자가 정수일 경우 true, 정수가 아닐 경우 false 반환
   Math.sqrt() 괄호안의 숫자의 제곱근을 반환. */
/* function solution(n) {
    let answer = 0;

    let a = Number.isInteger(Math.sqrt(n));
    console.log(a)

    if(Number.isInteger(Math.sqrt(n))){
        answer = 1;
    } else {
        answer = 2;
    }

    return answer;
}

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2
}

console.log(solution(144)); */

/* 코딩 테스트 연습/ Lv.0 / 문자 반복 출력하기 (22.11.13) */
/* function solution(my_string, n) {
    var answer = '';
    
    console.log(my_string);

    for(i=0; i<my_string; i++) {
        for(j=0; j<n; j++) {
            answer[i] = my_string[i];
        }
    }

    return answer;
}

console.log(solution('hello')); */

/* 코딩 테스트 연습/ Lv.0 / 약수 구하기 (22.11.16) */
function solution(n) {
    var answer = [];

    for(i=1; i<=n; i++) {
        if(n % i == 0) {
            answer[i] = i;
        }
    }

    answer.sort;

    answer.sort((a, b) => {
        return a - b;
    });

    console.log(answer);

    return answer;
}

console.log(solution(24));