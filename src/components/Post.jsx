import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'
import styles from './css/Posts.module.css'

export function Post(props){
    return ( 
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://i.pinimg.com/564x/b2/8b/d1/b28bd157a332be5dcbfaa016c9427ef4.jpg"/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>Dev Full Stack</span>
                    </div>
                </div>
                <time title='Publicado a 21 de Novembro' dateTime='2022-05-11 20:23'>Publicado cerca 1h atrás</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder='Comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}