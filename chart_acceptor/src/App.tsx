import React from 'react';
import FileUpload from './Models/ChartUploader';
import { store } from './Store/Store'
import { Provider } from 'react-redux'
import FileView from './Page/FileView'


function App() {
  return (
    <Provider store={store}>
      <div>
        <FileUpload />
        <FileView id={1} />
      </div>
    </Provider>
  );
}

export default App;
