const imageKit = require("@imagekit/nodejs")

const imagekit = ({
    privateKey : "private_oVLlt2HK+oTvb40ShzdprJht8JU="
})

async function uploadFile(buffer) {

    const result = await imagekit.client.upload({
        file : buffer,
        fileName : "image.jpg"
    })

    return result;
}

module.exports = uploadFile;

// private_oVLlt2HK+oTvb40ShzdprJht8JU=