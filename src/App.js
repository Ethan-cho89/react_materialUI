import './app.css';
import Boxes from './component/layout/boxes/boxes';
import Button1 from './component/inputs/buttons/button1';
import Dropdown from './component/inputs/buttons/dropdown';
import Checkboxes from './component/inputs/checkboxes/checkboxes';
import Containers from './component/layout/containers/containers';
import containers from './component/layout/containers/containers';
import Grids from './component/layout/grids/grids';
import Grids1 from './component/layout/grids/grids1';
import ErrorRadios from './component/inputs/radios/errorRadios';
import Radios from './component/inputs/radios/radios';
import TextField2 from './component/inputs/textField/textField2';
import TextField3 from './component/inputs/textField/textField3';
import Drawer1 from './component/navigation/drawer/drawer1';
import Card1 from './component/surface/card/card1';
import Progress1 from './component/feedback/progress/progress1';
import Progress2 from './component/feedback/progress/progress2';
import FormDialog from './component/feedback/dialog/formDialog';
import Backdrop1 from './component/feedback/backdrop/backdrop1';
import Modal1 from './component/utils/modal/modal1';

function App() {
  return (
    <div className='appWrapper'> 
      <FormDialog />
      <Modal1 />
    </div>
  );
}

export default App;
