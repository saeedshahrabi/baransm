import '../src/assets/styles/style.scss'

export default function MyApp({ Component, pageProps }) {
     return (
          // <Provider store={store}>
               <Component {...pageProps} />
          // </Provider>
     )
}