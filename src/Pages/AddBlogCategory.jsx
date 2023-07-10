import { Button } from "react-bootstrap"
import CoustomLayout from "../Components/CoustomLayout"


const AddBlogCategory = () => {
  return (
    <div>
      <div className="mb-4">Add blog category</div>
      <div>
        <form action="" className="action">
            <CoustomLayout type="text" label="Blog category"/>
            <Button className="my-3" type="submit">Add blog category</Button>
            
        </form>
      </div>
    </div>
  )
}

export default AddBlogCategory
