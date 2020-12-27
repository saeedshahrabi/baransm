import "../src/assets/styles/style.scss";
import { Provider } from "react-redux";
import store from "./../src/redux/stroe";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
