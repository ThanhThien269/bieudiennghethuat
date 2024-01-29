class cloth{
    constructor(id,pants,shirt,change=false){
        this.id=id;
        this.pants=pants;
        this.shirt=shirt;
        this.change=change;
    }
    toString(){
        return `Cloth ${this.pants} và áo ${this.shirt}`;
    }
}

module.exports={
    cloth,
};