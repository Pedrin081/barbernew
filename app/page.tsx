import Header from './_components/header';
import { Input } from './_components/ui/input';
import { Button } from './_components/ui/button';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar, AvatarImage } from './_components/ui/avatar';

const Home = () => {

  return <div>
    <Header />
    <div className='p-5'>
    <h2 className='text-xl font-bold'>Olá, Pedro</h2>
    <p>Sexta-Feira, 5 de agosto</p>

    {/*busca*/}


    <div className='mt-6 flex items-center gap-2'>
    <Input placeholder='Faça sua busca' />
    <Button>
      <SearchIcon />
    </Button>
    </div>

    {/*imagem*/}

 
    <div className='relative mt-6 w-full h-[150px] rounded-xl'>
      <Image src="/banner01.png" fill className="object-cover" alt='banner01'/>
    </div>

    {/*card com servicos*/}
    <Card className="mt-6">
      <CardContent className='flex justify-between p-0'>
        {/*div esquerda*/}
        <div className='flex flex-col gap-2 py-5 pl-5'>
            <Badge className='w-fit'>Confirmado</Badge>
            <h3 className='font-semibold'>Corte de Cabelo</h3>

            <div className="flex itemscenter">
                <Avatar className=' h-6 w-6'>
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png">

                  </AvatarImage>
                  <p className='text-sm'>Barbearia Client</p>
                </Avatar>
            </div>     
          </div>
          {/*div direita*/}
          <div className='flex flex-col items-center justify-center px-5 border-l-2 border-solid '>
            <p className='text-sm'>Agosto</p>
            <p className='text-2xl'>05</p>
            <p className='text-sm'>20:00</p>
          </div>
      </CardContent>
    </Card>
    </div>
  </div >

}

export default Home
