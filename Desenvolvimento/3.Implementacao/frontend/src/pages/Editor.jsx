import { BrowserRouter } from 'react-router-dom';

import Nav from '../components/Nav';
import Logo from '../components/Logo';
import EditorRoutes from '../routes/Editor.routes';

const Editor = () => {
  return (
    <BrowserRouter>
      <div className="editor">
        <Logo />
        <Nav />
        <EditorRoutes />
      </div>
    </BrowserRouter>
  )
}

export default Editor;