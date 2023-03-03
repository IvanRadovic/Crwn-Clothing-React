/* --- Styled Components ---- */
import { DirectoryItemContainer, DirectoryBackgroundImage, DirectoryBody  } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <DirectoryItemContainer>
          <DirectoryBackgroundImage
            style={{
            backgroundImage: `url(${imageUrl})`,
            }}
           />
          <DirectoryBody>
              <h2>{title}</h2>
              <p>Shop now !</p>
          </DirectoryBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;