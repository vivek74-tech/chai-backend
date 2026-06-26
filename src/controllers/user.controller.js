import {asyncHandler} from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async (req,res) =>{
  // get user detail from fronted
  // validation -not empty
  // check if user already exists: username,email
  // check for images,check for avatar
  // upload them to cloudinary , avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const {usename,email,fullname,password} = req.body 
  console.log("email",email);
})


export { registerUser };
