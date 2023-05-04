module.exports = {
    name: "cek",
    alias: ["cek"],
    use: "option",
    desc: "Gabut doank",
    type: "zen",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async (killua, m, { text, args, prefix, command }) => {
    type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        const jawab = `${Math.floor(Math.random() * 101)}`.trim()
        switch (type) {
            case "sange":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "bego":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "tolol":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "jones":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "haram":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "halal":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "lucu":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "caper":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "imut":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "gay":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
            case "lesbi":
                m.reply(`Pertanyaan : ${text2}\nJawaban : ${jawab}%`)
                break
        }
    },
    isQuery: true
}

function type() {
    return [
        "sange",
        "bego",
        "tolol",
        "jones",
        "haram",
        "halal",
        "lucu",
        "caper",
        "imut",
        "gay",
        "lesbi"
    ]
}
