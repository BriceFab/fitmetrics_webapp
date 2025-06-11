import Image from 'next/image';
import styles from './pushUpImage.module.css';

export default function PushUpImage() {
    return (
        <div className={styles.wrapper}>
            <Image
                src="/push-up.png"
                alt="Démonstration d’un exercice de push-up"
                /* fill = taille calquée sur le parent */
                fill
                /* srcset généré selon les largeurs finales ci-dessous */
                sizes="(max-width: 576px) 350px, (max-width: 992px) 150px, 250px"
                style={{ objectFit: 'contain' }}   /* pas de déformation */
                priority                            /* retirez-le si l’image n’est pas LCP */
            />
        </div>
    );
}
