import { createParamDecorator } from "@nestjs/common";
import { User } from "../entity/userEntity";

export const GetUser = createParamDecorator((data, req): User => {
    return req.user;
})