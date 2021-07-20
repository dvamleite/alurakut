import styled from 'styled-components';

const Gallery = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        margin: 15px;
        text-align: center  ;
    }

    .image-content{
        display: flex;       
        align-items: center;
        align-items: center;
        flex-wrap: wrap;       
        width: 100%;
        min-width: 600px;
    }

    img{
        width: 180px;
        height: 180px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 5px;
        padding: 5px;

        border-radius: 18px;

        background-color: #FFFFFF;
    }

    img:hover{       
        background-color: greenyellow;
    }

    @media(max-width: 860px){
        img{
            align-content: center;
            width: 31%;
            height: 15vh;       
        }
        
        .image-content{
            min-width: 100%;
        }
    }

     @media(max-width: 320px){
        img{           
            width: 45%;
            height: 15vh;       
        }
        
        .image-content{
            min-width: 100%;
        }
    }
`

export default Gallery;