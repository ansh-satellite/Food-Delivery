import userModel from "../models/userModel.js"

//add items to user cart

const addToCart = async(req,res) =>{
 try {
    let userData = await userModel.findOne({_id:req.body.userId});
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
       cartData[req.body.itemId] = 1 
    }

    else{
        cartData[req.body.itemId] += 1 
    }

    await userModel.findByIdAndUpdate(req.body.userId,{cartData});

    res.json({success:true,message:"Added successfully to the cart"})

 } catch (error) {
    
    console.log(error);
    return res.json({success:false,message:"An error occured"})
    
     }

}


//remove items from cart

const removeFromCart = async(req,res)=>{

    try {
        
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1 ;
         }
        
      await userModel.findByIdAndUpdate(req.body.userId,{cartData});

      res.json({success:true,message:"Item successfully removed from cart"});

    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"An error occured"})
    
    }
}




//fetch user cart data

const getCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({sucess:true,cartData})
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"An error occured"})
    
    }
}



export{addToCart,removeFromCart,getCart}