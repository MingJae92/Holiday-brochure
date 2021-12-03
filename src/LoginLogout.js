const LoginLogout=({status})=>{
    console.log(status)
    if({status}){
        return<h1>Welcome In</h1>;
    }else{
        return<h1>Please sign in!</h1>
    }
}

export default LoginLogout;