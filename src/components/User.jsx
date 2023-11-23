import styles from './css/Avatar.module.css'

/*Borda verde ou sem borda dependendo do lugar - Comment, Post ou Sidebar*/
export function Avatar({hasBorder = true, src}){
    return(
        <img className={hasBorder ? styles.avatar : styles.avatarNoBorder} src={src}/>
    )
}
/*Nome de Usuário - De quem está logado*/
export function Username(props){
    return(
        <strong>{props.username}</strong>
    )
}