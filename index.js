// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function (str = "go to the office"){
    return `This Monday, I will ${str}.`
}
function wrapAdjective(flair = '*') {
    return function (name = 'special') {
        return `You are ${flair + name + flair}!`
    }
}