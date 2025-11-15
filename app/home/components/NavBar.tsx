import Image from "next/image";
import Link from "next/link";

export function HomeNavBar(){
    return <header> 

        <nav> 
            <Link href='/' className="logo" > 
            <Image src='' alt=""> 
            </Image>
            </Link>
        </nav>
    </header>;
}