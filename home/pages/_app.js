import { Provider } from 'react-redux';
import store from '../app/store';
import '../styles/water.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
