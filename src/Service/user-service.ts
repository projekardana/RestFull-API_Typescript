import {CreateUserRequest, toUserResponse, UserResponse} from "../model/user-model";
import {Validation} from "../validation/validation";
import {UserValidation} from "../validation/user-validation";
import {ErrorResponse} from "../error/error-response";
import bcrypt from "bcrypt";
import {prismaClient} from "@prisma/client";

export class UserService {
    static async register(request: CreateUserRequest) : Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        });

        if (totalUserWithSameUsername != 0) {
            throw new ErrorResponse(400, "User already exists");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await prismaClient.user.create({
            data: registerRequest
        });

        return toUserResponse(user)
    }
}