import Addchoresform from "../../components/dataFlow/choreregistreation/AddChoresForm";
import UploadingChoresToDb from "../UploadingChoresToDb";

const HandyMan = (props) => {
  // error and submittion checker

  return (
    <div>
      <Addchoresform>
        {props.children}
        {/* <form>
          <select id="LineOfMaintainance" required>
            <option value=""></option>
            <option value="Full house">Full house </option>
            <option value="New house">New house</option>
          </select>
        </form> */}
      </Addchoresform>
    </div>
  );
};
export default HandyMan;
