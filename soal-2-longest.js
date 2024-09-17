const sentence = "Saya sangat senang mengerjakan soal algoritma"

const words = sentence.split(" ")

let longest = words[0]

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i]
    }
}

console.log(longest + ": " + longest.length + " karakter")