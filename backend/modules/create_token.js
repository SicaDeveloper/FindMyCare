function create_token( user_id, user_password){
    return jwt.sign({user_id, user_password}, process.env.SECRET_KEY, {expiresIn: '1h'});
}