var sayi1 = 10
sayi1 = "engin demirog"
let student = { id: 1, name: "engin" }
//console.log(student)

function save(puan = 10, ogrenci) {
    //console.log(ogrenci.name + ":" + puan)
}
let students = ["a", "b", "c", "d"]
//console.log(students)

let students2 = [students, { id: 2, name: "ipek" }, "ankara", { city: "istanbul" }]
//console.log(students2)


//rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])

}

// console.log(typeof showProducts)
//showProducts(10, ["elma", "armut", "karpuz"])

//spread
let points = [1, 2, 3, 4, 5, 6]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//DESTRUCTURİNG
let populations = [10000, 20000, 30000, [40000, 50000]]
let [small, medium, high, [veryHigh, max]] = populations
console.log(veryHigh)
console.log(max)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = { id: 1, name: "icdrinkecek" }
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)
