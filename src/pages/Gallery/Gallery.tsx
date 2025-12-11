import { useState } from "preact/hooks";
import imageItem from "../../asset/image.json"
import ImageGridItem from "../../components/ImageGridItem/ImageGridItem";
import './Gallery.css'
import { createPortal } from "preact/compat";
interface ImageItem {
    id: number,
    url: string,
    description: string,

}

const initId = (imageItem: any[]): ImageItem[] => {
    let id = 0;
    return imageItem.map((e) => ({
        ...e,
        id: id++
    }));
}


const Gallery = () => {
    const gallery: ImageItem[] = initId(imageItem);
    const [showModal,setShowModal] = useState(false);
    const showModalTrue = () => {setShowModal(true)};
    return (
        <div id="gallery">

            {gallery.map((e) => (<ImageGridItem onclick={showModalTrue} url={e.url} description={e.description} id={e.id} />))}
            <div>
                {showModal && createPortal(
                    (<div class="modal">
                        <div class="item-image-modal">
                          Modal 
                        </div>

                    </div>),
                    document.body


                )}
            </div>
        </div>


    )
}


export default Gallery;