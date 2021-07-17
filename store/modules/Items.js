const state = {
    drops: [{
        id: 0,
        title: "DEPOT",
        start: 0,
        end: 5
    },
    {
        id: 1,
        title: "ORBITA",
        start: 6
    }
    ],
    selectedDrop: {},
    items: [{
        id: 1,
        img: [
            require("../../public/item/6OG FATE T MOONDUST/l_m2_cropped.gif"),
            require("../../public/item/6OG FATE T MOONDUST/1.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/2.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/3.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/4.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/5.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/6.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/7.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/8.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/9.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/10.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/11.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/12.jpg"),
            require("../../public/item/6OG FATE T MOONDUST/13.jpg"),
        ],
        preview_img: require("../../public/item/6OG FATE T MOONDUST/l_m.gif"),
        name: "6OG FATE T MOONDUST",
        sizeTable: require("../../public/item/t-shirt.svg"),
        noSalePrice: 4500,
        price: 4500,
        description: "sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ғᴀᴛᴇ” ɢʀᴀᴘʜɪᴄs ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br><br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ<br>92% ᴄᴏᴛᴛᴏɴ 8% ʟʏᴄʀᴀ<br>ᴍᴏᴏɴᴅᴜsᴛ ᴄᴏʟᴏʀ",
        selectedSize: "m",
        oneSize: false
    }, {
        id: 2,
        img: [
            require("../../public/item/Hoodie/Hoodie2_cropped.gif"),
            require("../../public/item/Hoodie/1.jpg"),
            require("../../public/item/Hoodie/2.jpg"),
            require("../../public/item/Hoodie/3.jpg"),
            require("../../public/item/Hoodie/4.jpg"),
            require("../../public/item/Hoodie/5.jpg"),
            require("../../public/item/Hoodie/6.jpg"),
            require("../../public/item/Hoodie/7.jpg"),
            require("../../public/item/Hoodie/8.jpg"),
            require("../../public/item/Hoodie/9.jpg"),
            require("../../public/item/Hoodie/10.jpg"),
            require("../../public/item/Hoodie/11.jpg"),
            require("../../public/item/Hoodie/12.jpg"),
            require("../../public/item/Hoodie/13.jpg"),
        ],
        preview_img: require("../../public/item/Hoodie/Hoodie.gif"),
        name: "6OG SECURE HOODIE BLACK",
        sizeTable: require("../../public/item/hoodie.svg"),
        noSalePrice: 7000,
        price: 7000,
        description: "ᴏʙʟᴏɴɢ ғɪᴛ ᴄᴏᴛᴛᴏɴ ʜᴏᴏᴅɪᴇ<br>“sᴇᴄᴜʀᴇ” ɢʀᴀᴘʜɪᴄs ᴘʀɪɴᴛᴇᴅ ʙᴏᴛʜ sɪᴅᴇs<br><br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ<br>100% ᴄᴏᴛᴛᴏɴ<br>ʙʟᴀᴄᴋ",
        selectedSize: "m",
        oneSize: false
    },
        {
            id: 3,
            img: [
                require("../../public/item/6OG DEPOT T WHITE/l_w2_cropped.gif"),
                require("../../public/item/6OG DEPOT T WHITE/1.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/2.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/3.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/4.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/5.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/6.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/8.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/9.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/10.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/11.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/12.jpg"),
                require("../../public/item/6OG DEPOT T WHITE/13.jpg"),
            ],
            preview_img: require("../../public/item/6OG DEPOT T WHITE/l_w.gif"),
            name: "6OG DEPOT T WHITE",
            sizeTable: require("../../public/item/t-shirt.svg"),
            noSalePrice: 4500,
            price: 4500,
            description: "sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ᴅᴇᴘᴏᴛ” ɢʀᴀᴘʜɪᴄs ᴀɴᴅ ʟᴏɢᴏ ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br><br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ<br>100% ᴄᴏᴛᴛᴏɴ<br>ᴡʜɪᴛᴇ",
            selectedSize: "m",
            oneSize: false
        },
        {
            id: 4,
            img: [
                require("../../public/item/6OG DEPOT T FLAMINGO/l_p2_cropped.gif"),
                require("../../public/item/6OG DEPOT T FLAMINGO/1.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/2.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/3.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/4.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/5.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/6.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/7.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/8.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/9.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/10.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/11.jpg"),
                require("../../public/item/6OG DEPOT T FLAMINGO/12.jpg"),
            ],
            preview_img: require("../../public/item/6OG DEPOT T FLAMINGO/l_p.gif"),
            name: "6OG DEPOT T FLAMINGO",
            sizeTable: require("../../public/item/t-shirt.svg"),
            noSalePrice: 4500,
            price: 4500,
            description: "<span>sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ᴅᴇᴘᴏᴛ” ɢʀᴀᴘʜɪᴄs ᴀɴᴅ ʟᴏɢᴏ ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br><br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ<br>92% ᴄᴏᴛᴛᴏɴ 8% ʟʏᴄʀᴀ<br>ғʟᴀᴍɪɴɢᴏ ᴄᴏʟᴏʀ",
            selectedSize: "m",
            oneSize: false
        },
        {
            id: 5,
            img: [
                require("../../public/item/6OG DEPOT T BLACK/l_b2_cropped.gif"),
                require("../../public/item/6OG DEPOT T BLACK/1.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/2.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/3.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/4.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/5.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/6.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/8.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/9.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/10.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/11.jpg"),
                require("../../public/item/6OG DEPOT T BLACK/12.jpg"),
            ],
            preview_img: require("../../public/item/6OG DEPOT T BLACK/l_b.gif"),
            name: "6OG DEPOT T BLACK",
            sizeTable: require("../../public/item/t-shirt.svg"),
            noSalePrice: 4500,
            price: 4500,
            description: "sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ᴅᴇᴘᴏᴛ” ɢʀᴀᴘʜɪᴄs ᴀɴᴅ ʟᴏɢᴏ ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br><br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ<br>100% ᴄᴏᴛᴛᴏɴ<br>ʙʟᴀᴄᴋ",
            selectedSize: "m",
            oneSize: false
        },
        {
            id: 6,
            img: [
                require('../../public/item/Bag/bag.png'),
                require('../../public/item/Bag/5t.png'),
                require('../../public/item/Bag/2t.jpg.png'),
                require('../../public/item/Bag/3t.png'),
                require('../../public/item/Bag/4t.png'),
            ],
            preview_img: require('../../public/item/Bag/bag.png'),
            name: "6OG CHEST RIG 0001",
            sizeTable: require("../../public/item/t-shirt.svg"),
            noSalePrice: 3500,
            price: 3500,
            description: "COLOR: 013 BLACK<br>COUNTRY: RUSSIA<br>100% WATERPROOF",
            selectedSize: "ONESIZE",
            oneSize: true
        },
        {
            id: 7,
            img: [
                require("../../public/item/6OG RED ORBITA T/RED_cropped.gif"),
                require("../../public/item/6OG RED ORBITA T/1_1.jpg"),
                require("../../public/item/6OG RED ORBITA T/1_2.jpg"),
                require("../../public/item/6OG RED ORBITA T/1_3.jpg"),
                require("../../public/item/6OG RED ORBITA T/1_4.jpg"),
                require("../../public/item/6OG RED ORBITA T/1.jpg"),
                require("../../public/item/6OG RED ORBITA T/2.jpg"),
                require("../../public/item/6OG RED ORBITA T/3.jpg"),
                require("../../public/item/6OG RED ORBITA T/4.jpg"),
                require("../../public/item/6OG RED ORBITA T/5.jpg"),
                require("../../public/item/6OG RED ORBITA T/6.jpg"),
            ],
            preview_img: require("../../public/item/6OG RED ORBITA T/RED_cropped.gif"),
            name: "6OG ORBITA T RED COSMOS",
            sizeTable: require("../../public/item/orbita-table.svg"),
            noSalePrice: 4500,
            price: 4500,
            description: "sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ᴏʀʙɪᴛᴀ” ɢʀᴀᴘʜɪᴄs ʙᴀᴄᴋ ᴀɴᴅ ʟᴏɢᴏ ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴏɴ ᴛʜᴇ ғʀᴏɴᴛ ᴜɴᴅᴇʀ ᴛʜᴇ ᴘʀɪɴᴛ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ ᴠɪᴀ ɪɴsᴛᴀɢʀᴀᴍ<br>92% ᴄᴏᴛᴛᴏɴ 8% ʟʏᴄʀᴀ<br>ʀᴇᴅ ᴄᴏsᴍᴏs ᴄᴏʟᴏʀ",
            selectedSize: "m",
            oneSize: false
        },
        {
            id: 8,
            img: [
                require("../../public/item/6OG BLACK ORBITA T/BLACK_cropped.gif"),
                require("../../public/item/6OG BLACK ORBITA T/1_1.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/1_2.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/1_3.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/1_4.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/1.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/2.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/3.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/4.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/5.jpg"),
                require("../../public/item/6OG BLACK ORBITA T/6.jpg"),
            ],
            preview_img: require("../../public/item/6OG BLACK ORBITA T/BLACK_cropped.gif"),
            name: "6OG ORBITA T SOLAR BLUE",
            sizeTable: require("../../public/item/orbita-table.svg"),
            noSalePrice: 4500,
            price: 4500,
            description: "sʜᴏʀᴛ sʟᴇᴇᴠᴇ ᴄᴏᴛᴛᴏɴ ᴏᴠᴇʀsɪᴢᴇᴅ ᴛ-sʜɪʀᴛ<br>“ᴏʀʙɪᴛᴀ” ɢʀᴀᴘʜɪᴄs ʙᴀᴄᴋ ᴀɴᴅ ʟᴏɢᴏ ᴘʀɪɴᴛᴇᴅ ɪɴ ғʀᴏɴᴛ<br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴀᴛ ʙᴀᴄᴋ<br>NFC ᴄʜɪᴘ ᴀᴘᴘʟɪᴇᴅ ᴏɴ ᴛʜᴇ ғʀᴏɴᴛ ᴜɴᴅᴇʀ ᴛʜᴇ ᴘʀɪɴᴛ<br>AR ɪɴᴛᴇʀᴀᴄᴛᴇᴅ ᴘʀɪɴᴛ ᴠɪᴀ ɪɴsᴛᴀɢʀᴀᴍ<br>92% ᴄᴏᴛᴛᴏɴ 8% ʟʏᴄʀᴀ<br>sᴏʟᴀʀ ʙʟᴜᴇ ᴄᴏʟᴏʀ",
            selectedSize: "m",
            oneSize: false
        },
        ]
}


const getters = {}


const actions = {}


const mutations = {
    selectSize(state, payload) {
        state.items[payload.id].selectedSize = payload.size
    },
    selectDrop(state, payload) {
        state.selectedDrop = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}