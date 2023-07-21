
export async function getData(key) {
    var result = await JSON.parse(localStorage.getItem(key));
    if(!result) return []
    return result
}

export async function storeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}