const stack = ["Java", "NodeJS", "HTML", "CSS", "ReactJS", "TypeScript"];

// for(let i = 0; i < stack.length; i++) {
//     console.log(stack[i])
// }

// ForEach
// stack.forEach(function(tech) {
//     console.log(tech)
// })

// Map
const arrayMap = stack.map(function(tech) {
    return tech
})

// for ... of
for(let tech of stack) {
    console.log(tech)
}