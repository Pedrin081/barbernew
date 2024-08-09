import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from './ui/button';
import { MenuIcon } from "lucide-react";


const Header = () => {
    return ( 
        <Card> 
            <CardContent className=" p-5 flex flex-row items-center justify-between">
                <Image alt="Fsw barber" src="/Logo.png" height={18} width={120} />
                <Button size="icon" variant="outline">
                    <MenuIcon></MenuIcon>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;