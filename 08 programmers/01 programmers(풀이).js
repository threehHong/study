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

/* 코딩 테스트 연습/ Lv.0 / 분수의 덧셈. (22.10.25)  */
function solution(denum1, num1, denum2, num2) {
    if(0 < denum1 < 1000 && 0 < num1 < 1000 && 0 < denum2 < 1000 && 0 < num2 < 1000) {
        let answer = [];
        numerator = (denum1 * num2) + (denum2 * num1);
        denominator = num1 * num2;

        answer[0] = numerator;
        answer[1] = denominator;

        let maxnum = 0;
        let loop = 1;
        

        for(i = 0; i<= numerator; i++){
            if(answer[0]%i === 0 || answer[1]%i === 0){
                maxnum = i;
            }
        }
        while(loop){
            if(answer[0]/maxnum != 0 || answer[1]/maxnum != 0){
                loop = 0;
            } else {
                answer[0] = answer[0]/maxnum ;
                answer[1] = answer[1]/maxnum ;
            }
        }
        return answer;
    } else {
        console.log('error');
    }
}

console.log(solution(4,3,2,1));


