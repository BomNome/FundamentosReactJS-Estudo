/*EXPORT FUNCTIONS*/
import { Post } from './components/Posts.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

/*CSS*/ 
import styles from './components/css/App.module.css'
import './components/css/Geral.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post 
          author='Alberto Jone' 
          content='Olá, sou Alberto Jone.'
          />
          <Post
            author="Mauricio Fernandez"
            content='Meu nome é Mauricio, e eu gosto de macarronada.'
          />
        </main>
      </div>
    </div>
  )
}
