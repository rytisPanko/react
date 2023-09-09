import NextAuth, { NextAuthOptions } from "next-auth"
import clientPromise from "../mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import  CredentialsProvider  from "next-auth/providers/credentials"
import { IUser, User } from "../../schemas/user.schema"
import connect from "../mongoose"
import { verifyPassword } from "./auth"
import { UserDto } from "../../dto/user.dto"

let userAccount: UserDto = null

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: "Prisijunkite",
            credentials: {
                username: {
                    label: "Vartotojas",
                    type: "text",
                    placeholder: "vartotojo vardas",
                },
                password: { label: "Slaptazodis", type: "password" },
            },
            async authorize(credential, req) {
                await connect()
                const user: IUser = await User.findOne({
                    username: credential.username,
                })
                if (!user) {
                    throw new Error("No user found!");
                }
                const isAuthenticated = await verifyPassword(
                    credential.password,
                    user.password
                )
                if (!isAuthenticated) throw new Error("Negeras slaptažodis");
                userAccount = {
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    username: user.username,
                }
                return userAccount as any
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 20 * 60,
        updateAge: 10 * 60,
    },
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        session({ session, token, user }) {
            const s: any = session;
            if (userAccount !== null) {
                s.user = userAccount;
                return s;
            } else if (
                typeof token.user !== typeof undefined &&
                (typeof s.user === typeof undefined ||
                    typeof s.user !== typeof undefined)
            )
                s.user = token.user as any;
            else if (typeof token !== typeof undefined) s.token = token
            return s
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            if (typeof user !== typeof undefined) {
                token.user = user
            }
            return token
        },
    },
};
export default NextAuth(authOptions)