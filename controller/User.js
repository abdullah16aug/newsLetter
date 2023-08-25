import User from '../model/User.js'
export const UserEmail=async(req,res)=>{
try {
    const user=await User.find();
    res.status(200).json(user)
} catch (error) {
    res.error(500).json({error:error.message})
}
}
export const signUpUser=async(req,res)=>{
    const {email}=req.body
try {
    const user=await User.create({email});
    res.status(200).json(user)
} catch (error) {
    res.status(500).json({error:error.message})
}
}
// export const logInUser=async(req,res)=>{
//     const {email,password}=req.body
// try {
//     const user=await User.findOne({email,password});
//     const userEmail=user.email
//     res.status(200).json({email:userEmail})
// } catch (error) {
//     res.error(500).json({error:error.message})
// }
// }

export const getAllUserEmails = async () => {
  try {
    // Use the find method on the User model to fetch all documents
    // and project only the email field in the result.
    const emails = await User.find({}, 'email');

    // Map the result to extract only the email values
    const userEmails = emails.map((user) => user.email);

    return userEmails;
  } catch (error) {
    // Handle any potential errors
    console.error('Error fetching user emails:', error);
    return [];
  }
};

// Usage example







