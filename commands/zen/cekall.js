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
        text2 = text2.join("")
        const jawab = `${Math.floor(Math.random() * 101)}`.trim()
        switch (type) {
            case "sange":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Sange`)
                break
            case "bego":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Bego`)
                break
            case "tolol":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Tolol`)
                break
            case "jones":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Jones`)
                break
            case "haram":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Haram`)
                break
            case "halal":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Halal`)
                break
            case "lucu":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Lucu`)
                break
            case "caper":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Caper`)
                break
            case "imut":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Imut`)
                break
            case "gay":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Gay`)
                break
            case "lesbi":
                m.reply(`Siapa: ${text1}\nJawaban : ${jawab}% Lesbi`)
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
