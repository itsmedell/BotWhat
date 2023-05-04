const ms =require("parse-ms")

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
module.exports = {
    name: "profile",
    alias: ["me"],
    desc: "profile Check Information",
    type: "users",
    example: "%prefix%command",
	noLimit: true,
    start: async(killua, m, {isPremium, isOwner}) => {
		let statuses
		try {
			statuses = await killua.fetchStatus(m.sender);
		} catch {
			statuses = "*Bego infonya di private..*"
		}
	    const role = `${pickRandom(['Exp', 'Gold', 'Mid', 'Jungle', 'All Role', 'Roamer'])}`
        const mood = `${pickRandom(['Good', 'Bad', 'Sange', 'Random', 'Happy Happy', 'Mager'])}`
		const tanya = ['Babi', 'Memek', 'Kontol', 'Si Ganteng', 'Si Cantik', 'Si Imut', 'Si Lucu', 'Lord', 'Bandar Bokep']
                const jawab = tanya[Math.floor(Math.random() * tanya.length)]
		try {
			var pp = await killua.profilePictureUrl(m.sender, "image");
		} catch {
			var pp = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png";
		}
		let caption = `┌──⭓ *About Me*\n`
		caption += `│\n`
		caption += `│⭔ Username : ${m.pushName}\n`
		caption += `│⭔ About : ${statuses.status || statuses}\n`;
		caption += `│⭔ Role : ${role}\n`
		caption += `│⭔ Julukan : ${jawab}\n`
		caption += `│⭔ Mood : ${mood}\n`
		caption += `│\n`
		caption += `└───────⭓\n`
		
		let buttons = [
                {buttonId: `mnsfwmenu`, buttonText: {displayText: '\n\nAku lagi sange'}, type: 1}
            ]
            let buttonMessage = {
                image: { url : pp },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            } 
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
    }
}