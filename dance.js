class Dance {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    toString() 
{
    return ` điệu nhày ${this.name} `;
};
}

module.exports = {
    Dance,
};