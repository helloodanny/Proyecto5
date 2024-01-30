const {response, request} = require ('express') 

const userGet = async(res=response,req=request)=>{
    res.json({
        message: 'ingreso al get'
    })
}


module.exports={userGet}