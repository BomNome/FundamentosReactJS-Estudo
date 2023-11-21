import styles from './css/Posts.module.css'

export function Post(props){
    return ( 
    <div className={styles.postsBox}>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}