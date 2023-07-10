import { Button } from "react-bootstrap"
import CoustomLayout from "../Components/CoustomLayout"


const AddCategory = () => {
  return (
    <div>
      <div className="mb-4">Add AddCategory</div>
      <div>
        <form action="" className="action">
            <CoustomLayout type="text" label="Add AddCategory"/>
            <Button className="my-3" type="submit">Add AddCategory</Button>
            
        </form>
      </div>
    </div>
  )
}

export default AddCategory
