import { useGetGifs } from "../hooks/useGetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {loading, data:images}= useGetGifs(category);


  return (
    <>
        <h3 className="card-grid animate__animated animate__slideInLeft">{category}</h3>
        {loading && 'Cargando...'}
        <div className="card-grid animate__animated animate__slideInLeft">
            <ol>
                {
                    images.map(img=>(
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    </>
  )
}
