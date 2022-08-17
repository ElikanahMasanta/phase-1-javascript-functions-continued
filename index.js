function saturdayFun(action ='roller-skate') {
    return `This Saturday, I want to ${action}!`
}
saturdayFun(`This Saturday, I want to roller-skate!`)

function mondayWork(action=`go to the office`) {
    return `This Monday, I will ${action}.`
}
mondayWork(`This Monday, I will go to the office.`)

function wrapAdjective(action =`a hard worker`) {
    let result = wrapAdjective(action)
      let emphatic = result(`a hard worker`)
      return `You are ${action}!`
}
wrapAdjective(`You are, a hard worker`)