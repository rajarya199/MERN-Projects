import User from "../models/user.model.js"
export const addUser=async(request,response)=>{
  const { name, username, email, phone, address } = request.body;

    try{
           if (!name || !username || !email) {
      return response.status(400).json({ message: 'Name, username, and email are required.' });
    }

     // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return response.status(400).json({ message: 'Username or email already exists.' });
    }

    const newUser = new User({ name, username, email, phone, address });

    await newUser.save()
        response.status(201).json(newUser)
    }
    catch(error){
 response.status(500).json({message:error.message})
    }
}

export const getAllUsers=async(req,res)=>{
  try{
    const users=await User.find({})
    res.status(200).json(users)
  }
  catch(error){
     response.status(500).json({message:error.message})

  }
}