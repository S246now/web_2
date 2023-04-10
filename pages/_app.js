import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'; /* con el cliente, el Query react podrá almacenar la data dentro del objeto */
import {store} from '../redux/store'; /* para ingresar a lso valores de 'store' */
import { Provider } from 'react-redux'; /* con el componente 'Provider' puedo pasar store a los demás componenetes */

//crear un cliente
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
