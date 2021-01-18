let info = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

info.itemName = function() {
    return this.displayedName.displayedName.value[0]; // return the name of item
};

info.storesInStock = function() {
    let stores = [];
   for (number in this.stock.stocks[34]) {
       if (parseInt(this.stock.stocks[34][number]) > -1) {
        stores.push(number);
       }
   }
   return stores; //return array with store numbers that have items in stock
}

info.maxAmount = function() {
    let maxItems = 0;
    let storeNumber = '';
    Object.keys(this.stock.stocks[34]).forEach(store => {
        if (parseInt(this.stock.stocks[34][store]) > maxItems) {
            maxItems = parseInt(this.stock.stocks[34][store]);
            storeNumber = store;
        }

    });
    return storeNumber + ' ' + maxItems; // return store number with max quantity of items
}

console.log(info.itemName());
console.log(info.storesInStock());
console.log(info.maxAmount());