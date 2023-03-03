import DirectoryItem from "../directory-item/directory-item.component";

/* ---- Styled Components ---- */
import { DirectoryContainer } from "./directory.style";

const Directory = ({ categories }) => {
  return(
    <DirectoryContainer>
      {categories.map(( category ) => (
       <DirectoryItem key={category.id}  category = {category} />
      ))};  
    </DirectoryContainer>
  )
}

export default Directory;