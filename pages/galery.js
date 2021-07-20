import MainGrid from '../src/components/MainGrid'
import Galery from '../src/components/Galery'
import Box from '../src/components/Box'

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault,OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

const BASE_URL = 'http://alurakut.vercel.app/';


export default function myGalery(){
    return (

    <>

    <AlurakutMenu/> 

    <MainGrid> 
        <Box>
            <AlurakutProfileSidebarMenuDefault />  
        </Box>        
            
        <Box>
        <Galery>
                <h1>Minha Galeria De Fotos!</h1>

                <div className="image-content">
                    {/* Os Dados Das Fotos Viram Dinamicamente Da Api Do Datocms */}                      
                    <img src={`https://github.com/dvamleite.png`} />                               
                    <img src={`https://github.com/juunegreiros.png`} />
                    <img src={`https://github.com/omariosouto.png`} />
                    <img src={`https://github.com/peas.png`} />
                    <img src={`https://github.com/rafaballerini.png`} />
                    <img src={`https://github.com/maykbrito.png`} />
                    <img src={`https://github.com/diego3g.png`} />
                   {/* Aki vai ser Implementado uma Função pra Adiciona mais Fotos Na galeria */}
                    <img src={`${BASE_URL}/icons/plus.svg`} />
                    
                </div>
        
            </Galery>      </Box>     

        </MainGrid>     
    
</>

)       
}