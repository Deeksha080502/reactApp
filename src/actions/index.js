export function AddTOCart(serialNo){
    console.log("INCREMENTINCREMENT")
    return{
        type : 'ADDTOCART',
        value : serialNo
    }
}

export function onDecrement(serialNo){
    return{
        type : 'DECREMENT',
        value : serialNo
    }
}

export function onIncrement(serialNo){
    return{
        type : 'INCREMENT',
        value : serialNo
    }
}

export function onDelete(serialNo){
    return{
        type : 'DELETE',
        value : serialNo
    }
}

export function storeData(allProduct){
    console.log("storeDatastoreData"+allProduct)
    return{
        type : 'STOREDATA',
        value : allProduct
    }
}
