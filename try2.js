array1= [{apples: 25}, {tomatoes: 34}, {bananas: 56}, {mangoes: 67}, {berries: 45}]
for (const item in array1) {
    if (Object.hasOwnProperty.call(array1, item)) {
         element = array1[item];
        console.log(element);
    }
}
console.log("c",names= (Object.keys(element)))