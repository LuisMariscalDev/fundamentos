const stack = ["Java", "NodeJS", "HTML", "CSS", "ReactJS"];
// const tec2 = stack.filter(function(tech) {
//     if(tech == 'Java') {
//         return tech
//     }
// })

const tec2 = stack.map(function(tech) {
    if(tech === "NodeJS") {
        return 'NestJS'
    } else {
        return tech
    }
})

console.table(tec2)