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
function solution(num1, num2) {
    if(num1 <= 10000 && num1 >= 0 && num2 <= 10000 && num2 >= 0){
        if(num1 == num2){
            return 1;
        } else {
            return -1;
        }
    } else {
        console.log('error');
    }
}
