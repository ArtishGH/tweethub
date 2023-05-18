import { handleError } from "../error.js"; 
import User from "../models/User.js";

export const getUser = async (req, res, next) => {
    try{
        const user  = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
};

export const update = async (req, res, next) => {
    if(req.parms.id === req.params.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: reqbody,
                },
                {
                    new: true
                }
            ); 

            res.status(200).json(updatedUser);
        }catch (err) {
            next(err);
        }
    } else {
        return next(handleError(403, "U can only update your own profile"));
    }  
};

export const deleteUser = async (req, res, next) => {
    if(req.parms.id === req.params.id){
        try{
                    await User.findByIdAndDelete(req.params.id);

            res.status(200).json('user Deleted');
        }catch (err) {
            next(err);
        }
    } else {
        return next(handleError(403, "U can only delete your own profile"));
    }  
};

export const Follow = async (req, res, next) => {
        try{
            
            const user = User.findById(req.params.id);

            const currentUser = await User.findById(req.body._id);

            if(!user.followers.includes(req.body.id)){
                await user.updateOne({
                    $push: {
                        followers: req.body.id}
                    });
                await currentUser.updateOne({
                    $push: {
                        following: req.params.id}
                    });
            } else {
                res.status(400).json('Already following');
            }
        res.status(200).json("folowed");
    } catch (err) {
      next(err);
    }
};

export const UnFollow = async (req, res, next) => {
    try{
        
        const user = User.findById(req.params.id);

        const currentUser = await User.findById(req.body._id);

        if(currentUser.following.includes(req.params.id)){
            await user.updateOne({
                $pull: {
                    followers: req.body.id}
                });

            await currentUser.updateOne({
                $pull: {
                    following: req.params.id}
                });
        } else {
            res.status(400).json('youre not following');
        }
    res.status(200).json("unfolowed");
} catch (err) {
  next(err);
}
};