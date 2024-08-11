import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopPageProps{
    params: {
        id: string
    }
}

const BarbershopPage = async ({params}: BarbershopPageProps) => {
    
    const barbershop = await db.barbershop.findUnique({
        where: {
            id:params.id,
        }
    })

    return <div>
        {/*imagem*/}
        <div className="relative w-full h-[250px]">
            <Image src={barbershop?.imageUrl}  fill className="object-cover" alt="barbershopname" />

            <Button size="icon" variant="secondary" className="absolute left-4 top-4" asChild>
               <Link href="/">
                <ChevronLeftIcon/>
               </Link>
            </Button>        

            <Button size="icon" variant="secondary" className="absolute right-4 top-4" asChild>
                <MenuIcon/>
            </Button>        
        </div>

        <div className="p-5">
            <h1 className="font-bold text-xl">{barbershop.name}</h1>
            <div className="flex items-center"> <MapPinIcon className="text-primary"/>  </div>
            <p className="text-sm">{barbershop?.address}</p>
        </div>
    </div>

}
 
export default BarbershopPage;