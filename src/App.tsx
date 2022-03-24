import React, { useState } from "react";

import Menu from "./Menu";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <Menu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />;
};

export default App;
