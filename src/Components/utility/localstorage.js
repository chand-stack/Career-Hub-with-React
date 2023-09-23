const getFromLS = () => {
    const idfromLs = localStorage.getItem('jobsId')
    if(idfromLs){
     return JSON.parse(idfromLs)
    }
    return []
}

const setOnLS = id => {
    const storageArr = getFromLS();
    const exist = storageArr.find(num => num === id)
    if(!exist){
        storageArr.push(id)
        localStorage.setItem('jobsId',JSON.stringify(storageArr))
    }
    
    
    
}

export {getFromLS, setOnLS}