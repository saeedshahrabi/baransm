import './../assets/styles/style.scss'
import { Provider } from 'react-redux';
import { store } from './../redux/store/store';

export default function MyApp({ Component, pageProps }) {
     return (
          <Provider store={store}>
               <Component {...pageProps} />
          </Provider>
     )
}