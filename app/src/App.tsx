import Sidebar from './components/sidebar/sidebar.component';
import StepManager from './components/step-manager/step-manager.component';

import { Container } from './App.styles';

function App() {
  return (
    <Container>
      <Sidebar />
      <StepManager />
    </Container>
  );
}

export default App;
