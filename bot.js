const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = "^";


const Canvas = require('canvas') // بكج
const r1 = require('snekfetch'); //بكج

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set(); // الا ديفايند على كيف امك؟ هوست زق

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  var prefix = "^";
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
  var prefix = '^';
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

 client.on('message',async message => {
  let messageArray = message.content.split(' ');
  let mention = message.mentions.users.first();
  if(message.content.startsWith(prefix + 'transfer')) {
    if(!mention) return message.channel.send('**منشن شخص**');
    if(isNaN(messageArray[2])) return message.channel.send('**هذه الخانة يجب ان تكون رقم وليس احرف**');
    credits[mention.id].credits += (+messageArray[2]);
    credits[message.author.id].credits += (-messageArray[2]);
    fs.writeFile('./creditsCode' ,JSON.stringify(credits), (err) => {
      if(err) console.error(err);
    });
    message.channel.send(`**:moneybag: | ${message.author.username}, has transfered ${messageArray[2]}$ to ${mention}**`)
  }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 
            
	
		 


 message.author.sendMessage(`
 **
__~~Premier League~~__ By: @русский#8162
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
┃╰━╯┣━┳━━┳╮╭┳┳━━┳━╮┃┃╱╱╭━━┳━━┳━━┳╮╭┳━━╮
┃╭━━┫╭┫┃━┫╰╯┣┫┃━┫╭╯┃┃╱╭┫┃━┫╭╮┃╭╮┃┃┃┃┃━┫
┃┃╱╱┃┃┃┃━┫┃┃┃┃┃━┫┃╱┃╰━╯┃┃━┫╭╮┃╰╯┃╰╯┃┃━┫
╰╯╱╱╰╯╰━━┻┻┻┻┻━━┻╯╱╰━━━┻━━┻╯╰┻━╮┣━━┻━━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
                 
╔[❖════════════❖]╗
             Prefix = ' ^ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ ^kick <mention > ➾ kick member from server

 ❖ ^clear ➾ clear chat ( not ready yet fixing)
 
 ❖ ^mute < mention > ➾ mute member

 ❖ ^unmute <mention> ➾ unmute member

 ❖ ^band ➾ Give Someone Band

 ❖ ^ct <name> ➾ create channel

 ❖ ^cv <name> create voice channel
  
 ❖ ^bc <message> ➾ message all members in server    

 ❖ ^mutechannel ➾ Shut the chat

 ❖ ^unmutechannel ➾ Open the chat 

 ❖ ^role ➾  give rank

 ❖ ^roleremove➾  delet rank

╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ ^credits ➾  You see the money

❖ ^daily ➾  Take the gift after you

❖ ^transfer ➾  Convert money to someone

❖ ^roll <number> ➾ role 

❖ ^date ➾ see date

❖ ^member ➾ members info

❖ ^sv-logo ➾ server avatar

❖ ^uptime ➾ to see uptime

❖ ^cc ➾ Create colors

❖ ^own ➾ bot owner

❖ ^id ➾ your id

❖ ^avatar ➾ your avatar account

❖ ^ping ➾ to see ping

❖ ^bot ➾ bot informations 

❖ ^server ➾ server informations 

❖ ^invite ➾ bot invite link

❖ ^avater ➾ your personal photo 

❖ ^move all ➾ Pulls all those in the rheumatism

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "welcome"


==================================================================

Server support: https://discord.gg/7n4vGZD

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=462119357955309568&scope=bot&permissions=8

==================================================================

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 
            
	
		 


 message.author.sendMessage(`
 **
__~~Premier League~~__ By: @русский#8162 
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
┃╰━╯┣━┳━━┳╮╭┳┳━━┳━╮┃┃╱╱╭━━┳━━┳━━┳╮╭┳━━╮
┃╭━━┫╭┫┃━┫╰╯┣┫┃━┫╭╯┃┃╱╭┫┃━┫╭╮┃╭╮┃┃┃┃┃━┫
┃┃╱╱┃┃┃┃━┫┃┃┃┃┃━┫┃╱┃╰━╯┃┃━┫╭╮┃╰╯┃╰╯┃┃━┫
╰╯╱╱╰╯╰━━┻┻┻┻┻━━┻╯╱╰━━━┻━━┻╯╰┻━╮┣━━┻━━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯

╔[❖════════════❖]╗
                  Prefix = ' ^ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝ 

 ❖  ^kick <mention > ➾ لطرد عضو
 
 ❖ ^mute < mention > ➾ اسكات عضو 

 ❖ ^clear  ➾ لتنضيف المحادثة (fixing)

 ❖ ^cl ➾ لمسح الشات بعدد

 ❖ ^band ➾ امر اعطاء باند

 ❖ ^cv <name> ➾ صنع روم صوتية

 ❖ ^ct <name> ➾ صنع روم كتابية

 ❖^unmute <mention> ➾ فك الاسكات من العضو
  
 ❖ ^bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر

 ❖ ^mutechannel ➾ تسكر الشات

 ❖ ^unmutechannel ➾ تفتح الشات

 ❖ ^role ➾  يقوم باعطاء رتبة يجب عليك تحديد الرتبة والمنشن

 ❖ ^roleremove➾  يقوم بازالة الرتبة من الشخص يجب تحديد منشن

╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝  

❖ ^credits ➾ تشوف فلوسك

❖ ^daily ➾ تاخذ المكافئة اليومية

❖ ^transfer ➾ تحويل فلوس كرديت

❖ ^roll <number> ➾ قرعة

❖ ^member ➾ معلومات الاعضاء

❖ ^avatar ➾  شعار حسابك

❖ ^sv-logo ➾ شعار السيرفر

❖ ^uptime ➾ مدة التشغيل

❖ ^id ➾ اي دي

❖ ^date ➾ التاريخ

❖ ^cc ➾ انشاء الوان

❖ ^voicesetup ➾  انشاء روم يحسب لك كم شخص فى الرومات الصوتية

❖ ^own ➾ مسؤول البوت

❖ ^ping ➾ عرض سرعه اتصال البوت

❖ ^bot ➾ معلومات البوت

❖ ^server ➾ معلومات السيرفر

❖ ^invite ➾ رابط دعوة البوت

❖ ^avater ➾ صورتك الشخصية بلديسكورد

❖ ^move all ➾ يسحب الكل

╔[❖════════════❖]╗ 
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "welcome"

==================================================================

Server support: https://discord.gg/7n4vGZD

bot invite link: https://discordapp.com/oauth2/authorize?client_id=462119357955309568&scope=bot&permissions=8

==================================================================


`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	 message.channel.send('**تم ارسالك في الخاص**');	 
            
	
		 


 message.author.sendMessage(`
 
I chose it to understand you!!ااختار الامر استمتع بلبوت
^help-ar
^help-en
^Premier League لمعرفة مواعيد مباريات الدورى الانجليزي

`);

    }
});

 client.on('message', message => {
  if (true) {
if (message.content === '^invite') {
      message.author.send(' https://discordapp.com/oauth2/authorize?client_id=462119357955309568&scope=bot&permissions=8').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "^invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
    const prefix = "^"
              
          if(!message.channel.guild) return;
   if(message.author.Prince) return;
      if(message.content === prefix + "sv-logo"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0xffffff)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
client.on('message', message => {
   if (message.content === "^id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {

    if (message.content === "^mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "^unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('^bcall')){ 
   if(!message.member.hasPermission("BAN_MEMBERS")) return;
 if(!message.author.id === '408646404517396481') return;
message.channel.sendMessage('Sending the message |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "say") {
     message.channel.sendMessage(args.join("  "))
     message.delete()
    }
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`WORLD CUP`, '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on('message', message => {
    if(message.content === "^bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** :angry: !ممنوع النشر هنا :angry: ! **`)
    }
}
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '^avater') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='^members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
    
client.on('message', ra3d => {
            var prefix = "^";
  if (ra3d.content ===  prefix + 'cc'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
       
client.on('message', message => {
  if(message.content === '^عقاب') {
    if(!message.channel.guild) return message.reply('**هاذا الامر فقط للسيرفرات**');
    var edits = ['تضرب نفسك كف' , 'لا تتحرك ابد' , 'خلاص مسامحك' , 'ارمي حالك ببير' , 'روح دق على كل بيوت العماره']
    var embed = new Discord.RichEmbed()
 .setDescription(`${edits[Math.floor(Math.random() * edits.length)]}`)
 .setThumbnail(message.author.avatarURL)
 .setFooter('By @русский#8162 ')
 .setColor('RANDOM')
message.channel.send(embed);
}
});

client.on("message", m =>{
    if(m.content == "go"){
  m.guild.leave()
      .then(g => console.log(`Left the guild ${g}`)) //يخرج البوت من امر 
      .catch(console.error);
   }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["408646404517396481"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**انت صاحب* البوت تم اثبات ملكية البوت لكـ` + `✅`)
} else {
   message.reply('انت منتب راعي البوت ' + '❌');   
}
}
});

client.on('message', msg => { 
if (msg.content.startsWith(`^report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`منشن شخص`)

  if (!args[1]) return msg.reply(`ما هو البلاغ ؟؟`)

  if (msg.guild.channels.find('name', 'report')) {

    msg.guild.channels.find('name', 'report').send(`
  تبليغ على : ${msg.mentions.members.first()}
  بلغ عليه من قبل : ${msg.member}
  السبب : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
})

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "^mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}!${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "^unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}!${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

 client.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('Mention a User').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Ban This User").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', function (message) {
    var messageParts = message.content.split(' ');

    var command = messageParts[0].toLowerCase();
    var parameters = messageParts.splice(1, messageParts.length);


    switch (command) {
        case "^join":
        if(message.guild.voiceConnection){
            message.reply('I\'m Already In A Voice Connection!');
        }else if(!message.member.voiceChannel){
            message.reply('You\'re Not In A Voice Channel!');
        }else{
    let channel = message.member.voiceChannel;
    channel.join();
        }
            break;
case "&play":
        if(!message.guild.voiceConnection){
            message.reply('I\'m Not In A Voice Channel!');
        }else{
//كود بدء الموسيقى مالك
        }
            var voiceConnection = client.voiceConnections.first();

            break;
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith("^info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``WORLD CUP`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[^]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | @русский#8162 ')
    })
}
});

client.on('message', msg => {
//هنا الأمر حق الافتراحات  
if(msg.content.startsWith('^suggest')) {
//هنا اذا واحد كتب الأمر للبوت بالخاص يقوله انه للسيرفرات
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
//هنا اذا ما كان فيه روم للإقتراحات بيقولك تسوي
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('Add Suggestions room');
    let args = msg.content.split(" ").slice(1);
//اذا الشخص كتب الأمر بدون الأقتراح بيرد عليه البوت
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
//هنا اسم روم القتراحات اذا ما تبي بالأسم ذا غيره 
    if(msg.guild.channels.find('name', 'suggestions')) {
//واذا غيرت فوق غير هنا كمان
      msg.guild.channels.find('name', 'suggestions').send(`
      تم الاقتراح من قبل : ${msg.member}

      الاقتراح : 
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
//هنا عشان البوت يسوي ريأكشن للتصويت
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('^bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Premier League";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ |   ${message.guild.members.size} يتم ارسال البرودكاست الى عضو `).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('البرودكاست') .addField('السيرفر', message.guild.name) .addField('المرسل', message.author.username)
       .addField('الرساله', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    })

client.on('message', message => {
            if (message.content.startsWith("قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
  var prefix = "^";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  ⚠  ** **');
      var msg;
      msg = parseInt();

    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تم المسح",
      color: 0x06DF00,
      description: "Messages successfully cleared",
      footer: {
        text: ""
      }
    }}).then(msg => {msg.delete(3000)});
                        }


});

client.on('message', message => {
 if(!message.channel.guild) return;
  if (message.author.kick) return;
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("Mention a User").then(message => message.delete(4000))
  if(!reason) return message.reply ("Supply a Reason").then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Kick This User").then(message => message.delete(4000))

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Action : Kick')
  .setColor("BLACK")
  .setTimestamp()
  .addField("User :",  `${user.tag}`)
  .addField("By :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
            .setColor('#36393e')
  message.channel.send(`${user.tag} Has Been Kicked`).then(message => message.delete(10000))
  message.guild.channels.find('name','log').send({embed : banembed})
}
});

client.on('message', message => {
  var prefix = "^"
     if(message.content.startsWith(prefix + "DM")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("DM A Person", `Who are you going to DM ${message.author.tag}?`)
            .setFooter(`lol why did i add dis again?`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("DM A Person", `What are you going to say to ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("DM A Person", `Successfully sent a DM to ${user.tag}!`)
        .setFooter(`lol.`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("You have received mail! :mailbox_with_mail:", `**${reason}**`)
        .setFooter(`Sent by ${message.author.tag}.`);
    user.send({embed: embed1});
}
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "Premier League") {
		 
            
	
		 


message.author.sendMessage(`
الدور الاول 
https://cdn.discordapp.com/attachments/468694199852859403/468714335800393738/Screenshot_46.png
https://cdn.discordapp.com/attachments/468694199852859403/468714372353490944/Screenshot_47.png
https://cdn.discordapp.com/attachments/468694199852859403/468714453999943680/Screenshot_48.png
https://cdn.discordapp.com/attachments/468694199852859403/468714621189095454/Screenshot_49.png
https://cdn.discordapp.com/attachments/468694199852859403/468714653241966593/Screenshot_50.png

الدور الثاني
https://cdn.discordapp.com/attachments/468694199852859403/468715699196657674/Screenshot_51.png
https://cdn.discordapp.com/attachments/468694199852859403/468715735804280832/Screenshot_52.png

`);

    }
});

const devs = ['408646404517396481' , '' , '' , ''];
const adminprefix = "^";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });
  
client.on('message', message => {
    var prefix = "^"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

   client.on('message', ReBeeL => {
  var prefix = "^";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "cowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** ^cowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );
  
client.on('message', message => {
    if(message.content == '^Bot-All-Server') {
             if(!message.author.id === '462119357955309568') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
    
  client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
       
  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });      

client.on("message", (message) => {
if (message.content.startsWith("^ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

client.on("message", (message) => {
if (message.content.startsWith("^cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
  if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    
client.on('guildCreate', guild => {
  client.channels.get("470705896335605773").send(`**تم اضافة البوت في سيرفر جديد مبروكك
//MPBot
اسم السيرفر: __${guild.name}__
اونر السيرفر: __${guild.owner}__**`)
});

client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "408646404517396481") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('NDYyMTE5MzU3OTU1MzA5NTY4.DjUcbw.8S81oJEySGJ5V33pHCe2ycQlCgQ');
        },3000);
    }
});

  client.on('message', message => {
   if(message.content.startsWith(prefix + "دعوات")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} لقد قمت بدعوه ${inviteCount} دعوه.`);
});
  }
});

client.on('message', message => {
    let args = message.content.split(" ").slice(1);
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'cl')) {

        if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
        if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
                timeout: 5000
            })))
    }
});

client.on('message', message => { 
var prefix = "^";

if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if (command == "role") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
message.guild.members.forEach(m => {
m.addRole(message.guild.roles.find('name', MRole))
})
message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
}
});

client.on('message', message => { 
var prefix = "^";

if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if (command == "remove") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
message.guild.members.forEach(m => {
m.removeRole(message.guild.roles.find('name', MRole))
})
message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
}
});
 
 client.on('message', message => {
  if (message.content === '^sup') {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.addField('سيرفر المساعدة \'','https://discord.gg/ffY99qC')
.setFooter(client.user.username, client.user.avatarURL);
message.channel.send(embed);
  }
});

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("^ping")) {
    message.channel.sendMessage(`Pong ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});

client.on("message", message => {
    var prefix = "^";
    var args = message.content.split(' ').slice(1); 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }     
    

        
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return    message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        } 
    } 
});

 const child_process = require("child_process");
  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "bot.js");
  }, time);
});

client.on('message', msg => { 
    if (msg.content.startsWith(`^warn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب')
      //غير اسم الروم او سوي روم بذا الاسم 
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان 
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})

client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("^rt")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace('[user]' ,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    
    }
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    if(message.content.toLowerCase().startsWith(prefix + "uptime")) {
      let upTime = process.uptime();
  
      let days = Math.floor(upTime / 86400);
      upTime %= 86400;
  
      let hrs = Math.floor(upTime / 3600);
      upTime %= 3600;
  
      let min = Math.floor(upTime / 60);
      let sec = Math.floor(upTime % 60);
  
      message.channel.send(`\`${days} days, ${hrs} hrs, ${min} min, ${sec} sec\``);
    }
});

const bot = new Discord.Client({disableEveryone: true});
const Canvas = require('canvas') // بكج
const fs = module.require("fs"); //بكج
const r1 = require('snekfetch'); //بكج
 
 
//var يعني تختصر للحاجه زي منا عامل كدة
 
var copy = "Issun#4555"
 
 
var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"
 
 
bot.on("ready", async () => { // كل حاجه هتتفح لما البوت يشتغل
 
    console.log(`I'm Online \n By ${copy}`) // الي هيظهر في الكونسل
    console.log(`Logged in as ${bot.user.tag}!`); // نفس الي فوق
 
    bot.user.setGame(`${bot.users.size} users `,"http://twitch.tv/") // الي هيظهر في بلاينق
    bot.user.setStatus("online") // حاله البوت (اونلاين
 
}); // نهايه الكود
 
 
 
bot.on('message', message => {
 
if (message.content.startsWith("$profile")) { // الامر
 let canvas = new Canvas(300, 300) //حجم الصوره الي هتظهر
 let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
   
   
                      //  ava.src = buf;
 
    fs.readFile(__dirname + '/images_profile/profile.png', function(err, picture) { //مكان الصوره
      if (err) throw err
      var img = new Image
                var url = message.author.avatarURL; //افتار صورتك
        url = url.substring(0, url.indexOf('?'));
 
        r1.get(url).then(res => {
            var dataURL = res.body.toString('base64');
            dataURL = 'data:image/png;base64,' + dataURL;
            img.onload = function() {
 
                ctx.save();
            ctx.beginPath();
            ctx.arc(54, 103, 47, 0, Math.PI * 2, true); // احدثيات الدائره
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 8, 57, 92, 92); // الصوره
            ctx.restore();
            }
            img.src = dataURL;
        });
       
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 300, 300)
     //   ctx.drawImage(message.author.avatarURL, 152, 27, 95, 95);
        ctx.font = "regular 11px Cairo" // نوع الخط وحجمه
        ctx.fillStyle = "#9f9f9f" // لون الخط
        ctx.fillText(`${message.author.username}`, 140, 137)
        ctx.fillText(`${mo}  `, 143, 219) //money
        ctx.fillText(`${po}`, 120, 202) // النقاط
 
        //Level
        ctx.font = "regular 21px Cairo"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${lev}`, 47, 255) //لفل
 
        ctx.save()
       
      }
      img.src = picture
           
    })
       
   
 
   
 
    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/diamond_prof_bg.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
      fs.writeFile(`image.png`, buf)
     
        message.channel.send("", {
          file: `image.png`
        })
      })
    }, 1000)
 
 
    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
 
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
 
      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;
 
      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
 
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }
 
        test = line + words[i] + ' ';
        metrics = context.measureText(test);
 
        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
 
      ctx.fillText(line, x, y);
    }
 
 
 
 
};
 
 
 
 
});
 
 
client.login('NDYyMTE5MzU3OTU1MzA5NTY4.DjUcbw.8S81oJEySGJ5V33pHCe2ycQlCgQ');