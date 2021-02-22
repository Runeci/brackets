module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let arr = str.split("");
    let bracket = 0;

    while(bracket < arr.length){
        stack.push(arr[bracket]);
        for (let i = 0; i < bracketsConfig.length; i++){
            if (stack[stack.length-2] === bracketsConfig[i][0] && stack[stack.length-1] === bracketsConfig[i][1]){
                stack.pop();
                stack.pop();
            }
        }
        bracket++;
    }
    return !stack.length;
};
