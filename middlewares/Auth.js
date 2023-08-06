export const isAuthenticated=async(req,res,next)=>{
    console.log('middleware is running')
    req.customProperty='hello world'
    next()
}
