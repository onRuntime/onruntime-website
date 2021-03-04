const findInArray = (array: { [key: string]: any }, path: string) => {
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');
    const a = path.split('.');

    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in array) {
            array = array[k];
        } else {
            return;
        }
    }
    return array;
}

export default findInArray;