import styled from 'styled-components';

const Gallery = styled.main`
    width: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        margin: 15px;
        text-align: center  ;
    }

    .image-content{
        display: flex;       
        flex-wrap: wrap;
        max-width: 900px;

    }

    img{
        width: 180px;
        height: 180px;

        margin: 10px;
        padding: 10px;

        border-radius: 18px;

        background-color: #FFFFFF;
    }

    p{
        font-size: 20px;
        color: red;
        text-align: center;
    }

    img:hover{       
        background-color: greenyellow;
    }
`

export default Gallery;