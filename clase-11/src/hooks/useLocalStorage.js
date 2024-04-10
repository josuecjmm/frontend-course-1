function getUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(user) {
        return user; 
    } else {
        console.error('user not logged')
    }
    
}

export default getUserFromLocalStorage; 