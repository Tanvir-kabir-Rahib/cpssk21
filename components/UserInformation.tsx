import { currentUser } from "@clerk/nextjs/server"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Button } from "./ui/button";



async function UserInformation() {
    const user = await currentUser()
    const firstName = user?.firstName;
    const lastName = user?.lastName;
    const imageURL = user?.imageUrl;
    const username = user?.username;
    return (
        <div className="flex flex-col justify-center items-center bg-white rounded-lg border py-4">
            <SignedIn>
                <Avatar>
                    <AvatarImage src={imageURL ? imageURL : "https://github.com/shadcn.png"} />
                    <AvatarFallback>{firstName} {lastName}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="font-semibold">
                        {firstName} {lastName}
                    </p>
                    <p className="text-xs">
                        {username}
                    </p>
                </div>
                <hr className="w-full border-gray-200 my-5" />
                <div className="flex justify-between w-full px-4 text-sm">
                    <p className="font-semibold text-gray-400">Posts</p>
                    <p className="text-gray-400">0</p>
                </div>
                <div className="flex justify-between w-full px-4 text-sm">
                    <p className="font-semibold text-gray-400">Comments</p>
                    <p className="text-gray-400">0</p>
                </div>
            </SignedIn >
            <SignedOut>
                <div className="text-center space-y-2">
                    <p className="font-semibold">You are not signed in</p>
                    <Button asChild className="bg-[#0b63c4] text-white">
                        <SignInButton>Sign In</SignInButton>
                    </Button>
                </div>
            </SignedOut>
        </div>


    )
}

export default UserInformation