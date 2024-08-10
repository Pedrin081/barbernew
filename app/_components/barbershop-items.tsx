import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import { Image } from "lucide-react";

interface BarbershopItemprops{
    barbershop: Barbershop
}

const BarbershopItem = ( {barbershop} : BarbershopItemprops ) => {
    return <Card>
        <CardContent>
            {/* imagem */}
            <div className="relative h-{159px}">
                <Image  className="object-contain" src={barbershop.imageUrl}  />
            </div>
        </CardContent>
    </Card>
}
 
export default BarbershopItem;