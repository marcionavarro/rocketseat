import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/38962433?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcio Navarro</strong>
                            <time title='17 de Fevereiro ás 11:23' dateTime="20024-02-17 11:23:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}