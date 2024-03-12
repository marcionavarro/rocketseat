import { useState } from 'react';
import { Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'


export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

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
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}