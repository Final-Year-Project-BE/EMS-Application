import history from '../helpers/history';

export const isAuth=()=>{// decode your token here
    const user=localStorage.getItem('user')
    
    if(user){
        return true;
    }
    return false;
}

export const logout=()=>{// decode your token here
    localStorage.removeItem('user')
    history.push('/login')
    window.location.reload(false);
}

export const isAdmin=()=>{// decode your token here
    const user=JSON.parse(localStorage.getItem('user'))
    console.log(user.role)
    if(user.role=="admin"){
        return true;
    }
    return false;
}
