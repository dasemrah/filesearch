const dir = process.env.DIR
const fs = require('fs')


console.log(dir)

async function getImageDir(){
    return dir
}

async function findImage(name){
    console.log(name)
    const names = await fs.promises.readdir(dir);
    const finded = names.filter(e => e.toLowerCase().includes(name.toLowerCase()))
    const images = new Promise(resolve => {
        const imageArr = finded.map( e => {
            const filedir = `${dir}/${e}`
            console.log('filedir-->', filedir)
            const base64DATA = fs.readFileSync(filedir, 'base64')
            return {name: e, url:`data:${getExtension(e)};base64,${base64DATA}`
        }

        })
        resolve(imageArr)
    })
    return  images
}

function getExtension(filename) {
    const i = filename.lastIndexOf('.')
    const ext = (i < 0) ? '' : filename.substr(i+1)
    return ext.includes('jpg') ? 'image/jpg' : 'image/png'
}
module.exports ={
    findImage, getImageDir
}
