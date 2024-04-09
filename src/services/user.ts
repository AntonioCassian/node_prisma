import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma"

/*interface ICreateUser {
    name: string,
    email: string
}
*/
export const createUser = async (data: Prisma.UserCreateInput) => {
    try {
        const user = await prisma.user.create({ data });
        return user;
    } catch (err) {
        return false;
    }
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        return prisma.user.createMany({
            data: users,
            skipDuplicates: true
        });
    } catch (err) {
        return false;
    }
}