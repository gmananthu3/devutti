/*coded by Jacksparrow 
https://youtube.com/channel/UCU5ZnSCVsUlNJBVkIoBfOWw
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHEKILUM EZHUTHAN JACK PARANJU"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'barcode ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: devika.jpg, caption: 'Made by jack' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'barcode ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${match[1]}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: devika.jpg, caption: 'Made by Jack' })

    }));
    
}
