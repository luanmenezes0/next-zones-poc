import { Provider } from 'react-redux';

import store from '../../home/app/store';
import '../../home/styles/water.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
