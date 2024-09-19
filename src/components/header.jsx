import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Header = () => {
    return (
      <div>
        <nav className="py-4 flex justify-between items-center">
            <Link>
            <img src="/SkillHunt.png" className="h-20"/>
            </Link>
            {/* <Button varient="outline">Login</Button> */}
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    );
  };
  
  export default Header;