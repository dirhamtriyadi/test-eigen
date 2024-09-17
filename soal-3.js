const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']

function findMatch(input, query) {
    let result = []
    for (let i = 0; i < query.length; i++) {
        let count = 0
        for (let j = 0; j < input.length; j++) {
        if (query[i] === input[j]) {
            count++
        }
        }
        result.push(count)
    }
    return result
}

console.log(findMatch(input, query))