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
import TextFields from './component/inputs/textField/textFields';

function App() {
  return (
    <div className='appWrapper'> 
      <TextFields />
    </div>
  );
}

export default App;
