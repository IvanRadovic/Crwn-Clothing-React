import { useNavigate } from "react-router-dom";

/* --- Styled Components ---- */
import { DirectoryItemContainer, BackgroundImage, DirectoryBody  } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl} />
          <DirectoryBody>
              <h2>{title}</h2>
              <p>Shop now !</p>
          </DirectoryBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;