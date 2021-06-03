class Customer {
    constructor(id, customerNumber) {
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "123456");

//prototyping
customer.name = "murat"
console.log(customer.name)

Customer.bisey = "bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndıvualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorparateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }
}