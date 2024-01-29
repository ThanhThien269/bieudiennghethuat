const cloth = require('./cloth');
const Song = require('./song');
const Dance = require('./dance');
const delay = require('./delay');
/**
 * 
 * @param {*} cloth 
 * @returns {cloth.cloth[]}
 */

async function repairCloth(cloth){



   let clothes = []
   clothes.push(new cloth.cloth('01', 'Jean','shirt',false));
    clothes.push(new cloth.cloth('02','Skirt','T-shirt',false));
    clothes.push(new cloth.cloth('03','ballonpant','crop-top',false));

    await delay.delay(1500);
    console.log("Da chuan bi xong quan ao");
    return clothes;
}
async function changeClothes(cloth){
    for(let i=0;i<cloth.length;i++){
        cloth[i].change=true;

        console.log("Da thay  quan " + cloth[i].pants + ' và áo ' + cloth[i].shirt);
        await delay.delay(3000);
    }
    console.log("chon quan ao",cloth[cloth.length -1].toString());
    return cloth;
}
async function singaSong(song){
    song = new Song.Song('01','Havana','Camila Cabello');
    await delay.delay(4000);
    console.log("bieu dien bai hat",song.toString());

}
async function takeDance(dance){
    dance = new Dance.Dance('01','Bachata');
    await delay.delay(2000);
    console.log("Bieu dien ",dance.toString());
}
async function end(){
    await delay.delay(500);
    console.log("Bieu dien ket thuc");
}


(async()=>{
    console.time("time");
    let myClothes = await repairCloth(cloth);
   await changeClothes(myClothes);
   Promise.all([takeDance(),singaSong()]).then(async(value)=>{await end(value[0],value[1])});
    console.timeEnd("time");
})()