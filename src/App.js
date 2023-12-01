import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Session1 from './include/session1';
import Session2 from './include/session2';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Tabs
          defaultActiveKey="session1"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="session1" title="Session 1">
            <Session1 />
          </Tab>
          <Tab eventKey="session2" title="Session 2">
           <Session2/>
          </Tab>
        </Tabs>
      </div>

    </div>
  );
}

export default App;
