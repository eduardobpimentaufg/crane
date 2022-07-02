import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../lib/mongodb"
import TwitchProvider from "next-auth/providers/twitch"
import * as dotenv from "dotenv";
dotenv.config({path:'../../.env'});

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    // Configure one or more authentication providers
    providers: [
        TwitchProvider({
        clientId: "gkqg56xa0fms5kzk3o6c1jukjt2w4b",
        clientSecret: "fb0zwdsctidep8s3zerium1acffqsm",
        authorization: {
            params: {
                scope: "openid user:read:email channel:manage:redemptions channel:read:redemptions channel:manage:predictions channel:read:predictions"
            }
        }
        })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
            }
            return token
        }
    }
})