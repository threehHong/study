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

/* 코딩 테스트 연습/ Lv.0 / 분수의 덧셈. (22.10.27) */
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

