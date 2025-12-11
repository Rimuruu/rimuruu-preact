import "./ImageGridItem.css"

function ImageGridItem({ onclick,id, url, description }) {

    return (<div onClick={onclick} class="image-item-container" data-id={id} id={`image-item-${id}`}>
        <img class="image-item" src={url} />
        <p class="image-item-description">{description}</p>
    </div>

    )

}

export default ImageGridItem;