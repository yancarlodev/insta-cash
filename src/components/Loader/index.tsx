import styles from './styles.module.scss'

const Loader = ({ isLoading }: { isLoading: boolean }): JSX.Element => { 
      
    return(
        <>
            {
                isLoading ?
                    <div className={styles.container}>
                        <div className={styles.spinner}></div>
                    </div>
                :
                    <></>
            }
        </>
    )
}

export default Loader