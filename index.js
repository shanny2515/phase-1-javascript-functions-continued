function saturdayFun(activity = "roller-skate") {
   return (`This Saturday, I want to ${activity}!`);
}
saturdayFun('bathe my dog');

function mondayWork(act = "go to the office"){
    return (`This Monday, I will ${act}.`);
}
mondayWork('work from home');

 function wrapAdjective( flair ="*"){
    return function(you = "special"){
        return (`You are ${flair}${you}${flair}!`)
    }
 }
 console.log(wrapAdjective('*')('a hard worker'));
 console.log(wrapAdjective('||')('a dedicated programmer'));
