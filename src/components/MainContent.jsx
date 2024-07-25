import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  console.log('123')
  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
