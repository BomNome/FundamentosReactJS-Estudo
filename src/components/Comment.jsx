import { Avatar } from './Avatar'
import styles from './css/Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1679637506474508291/v-uaoIMa_400x400.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Vitor Aurilândio</strong>
                        <time title='Publicado a 21 de Novembro' dateTime='2022-05-11 20:23'>Publicado cerca 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Meus parabéns.</p>
                </div>

                <footer>
                    <button>     
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}