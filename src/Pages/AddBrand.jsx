import { Button } from "react-bootstrap"
import CoustomLayout from "../Components/CoustomLayout"


const AddBrand = () => {
  return (
    <div>
      <div className="mb-4">Add Brand</div>
      <div>
        <form action="" className="action">
            <CoustomLayout type="text" label="Add Brand"/>
            <Button className="my-3" type="submit">Add Brand</Button>
            
        </form>
      </div>
    </div>
  )
}

export default AddBrand
