const checkValidation = (req, res, next) => {
    console.log('user is authenticated')
next();
}
    

module.exports = checkValidation;