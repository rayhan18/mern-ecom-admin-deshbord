import { Button } from "react-bootstrap"
import CoustomLayout from "../Components/CoustomLayout"


const AddColor = () => {
  return (
    <div>
      <div className="mb-4">Add Color</div>
      <div>
        <form action="" className="action">
            <CoustomLayout type="color" label="Add color"/>
            <Button className="my-3" type="submit">Add color</Button>
            
        </form>
      </div>
    </div>
  )
}

export default AddColor
