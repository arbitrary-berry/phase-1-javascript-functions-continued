// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(symbol) {
    return function (praise) {
        return `You are ${symbol}${praise}${symbol}!`;
    }
}
wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");