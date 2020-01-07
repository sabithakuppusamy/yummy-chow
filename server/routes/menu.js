const router = require('express').Router();
const Menu = require('../model/menu.model');

router.route("/").get((req,res)=>{
   Menu.find()
   .then(menuList=>res.json(menuList))
   .catch(err=>res.status(400).json('Error occured:'+err));
});

router.route("/").post((req,res)=>{
   const menuList = req.body;
   const menu = new Menu(menuList);
   menu.save()
   .then(()=>{res.json('Menu Added!')})
   .catch(err=>res.status(400).json('Error While uploading the documents!The Error is:'+err));
});

module.exports = router;
