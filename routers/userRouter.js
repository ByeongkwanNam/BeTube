import express from "express";
import routes from "../routes";
import { users, changePassword, editProfile, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);

// 만약 8번과 9번 코드가 바뀐다면 /users/edit-profile 이라고 했을 때 edit-profile을 :id 라고 인식한다.

export default userRouter;
