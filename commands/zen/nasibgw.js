const ms =require("parse-ms")

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
module.exports = {
    name: "nasibgw",
    alias: ["nasibgw"],
    desc: "Nasib Check Information",
    type: "zen",
    example: "%prefix",
	noLimit: true,
    start: async(killua, m, {isPremium, isOwner}) => {
const nasib = [
{ "url":"https://g.top4top.io/m_2679bvcn60.mp4", "mess":"Amit amit-_- lah ye"},
{ "url":"https://l.top4top.io/m_26794pu8u1.mp4", "mess":"Beruntung Banget luu anjing -_-"},
{ "url":"https://a.top4top.io/m_2679bp9vb2.mp4", "mess":"Lu kenapa lagi depresi"},
{ "url":"https://a.top4top.io/m_2679bp9vb2.mp4", "mess":"Lu kenapa lagi depresi"},
{ "url":"https://b.top4top.io/m_2679a1bgh3.mp4", "mess":"Aduhh bang nasib lu"},
{ "url":"https://b.top4top.io/m_2679a1bgh3.mp4", "mess":"Aduhh bang nasib lu"},
{ "url":"https://b.top4top.io/m_2679a1bgh3.mp4", "mess":"Aduhh bang nasib lu"},
{ "url":"https://c.top4top.io/m_2679cmb8z4.mp4", "mess":"Hati hati ya jangan terlalu gegabah"},
{ "url":"https://c.top4top.io/m_2679cmb8z4.mp4", "mess":"Hati hati ya jangan terlalu gegabah"},
{ "url":"https://c.top4top.io/m_2679cmb8z4.mp4", "mess":"Hati hati ya jangan terlalu gegabah"}
]
        const jawab = nasib[Math.floor(Math.random() * nasib.length)]
        m.reply(`Tunggu sampe videonya terkirim :)`)
		killua.sendFile(m.from, jawab.url, jawab.mess, m)

	}
}