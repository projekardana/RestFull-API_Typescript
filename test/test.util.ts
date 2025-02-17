import {prismaClient} from "@prisma/client";

export class UserTest {

    static async delete() {
        await prismaClient.user.delete({
            where: {
                username: "test"
            }
        })
    }
}