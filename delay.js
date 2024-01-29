// tạo delay cho các hàm bất đồng bộ
 function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
module.exports = {
    delay,
};