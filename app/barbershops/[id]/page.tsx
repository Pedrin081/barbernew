import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

    if(!barbershop){
        return notFound()
    }

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

        <div className="p-5 border-b border-solid">
            <h1 className="font-bold text-xl">{barbershop.name}</h1>
           
            <div    
                 className="flex items-center gap-1"> <MapPinIcon className="text-primary " size={18}/>  
                 <p className="text-sm">{barbershop?.address}</p>
            </div>    
            
            <div    
                 className="flex items-center gap-1"> <StarIcon  className="text-primary    fill-primary " size={18}/>  
                 <p className="text-sm">5.0 (292 avaliações)</p>
            </div>    
       
        {/*descrição*/}
       
       <div className="p-5 border-b border-solid space-y-3">
        <h2 className="font-bold uppercase text-gray-400 text-xs">Sobre Nós</h2>
        <p className="text-sm ">{barbershop?.description}</p>
       </div>
       
        </div>
    </div>

}
 
export default BarbershopPage;