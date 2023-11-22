/*COMPONENTS*/
import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

/*CSS*/ 
import styles from './components/css/App.module.css'
import './components/css/Global.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post 
          author='Roberto Carlos' 
          content='Fala galeraa 👋
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          👉jane.design/doctorcare
          
          #novoprojeto
          #nlw
          #rocketseat
          '
          />
          <Post 
          author='Alberto Jone' 
          content='Olá, sou Alberto Jone.'
          />
        </main>
      </div>
    </div>
  )
}
