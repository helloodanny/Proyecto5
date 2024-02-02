const {response, request} = require('express') 

const userGet = async(req=request,res=response)=>{
    res.status(200).json({
        message: 'ingreso al get'
    })
}


module.exports={userGet}