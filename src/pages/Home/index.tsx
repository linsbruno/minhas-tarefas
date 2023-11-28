import BoataoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDetarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDetarefas />
    <BoataoAdicionar />
  </>
)

export default Home
