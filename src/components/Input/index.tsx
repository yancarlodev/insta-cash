import styles from './styles.module.scss'

interface IProps {
    errors?: any,
    type?: string, 
    placeholder?: string,
    register?: any,
    name: string,
    label: string,
    sublabel?: string,
    rest?: any
}

export function Input({ errors, type = 'text', placeholder, register, name, label, sublabel, ...rest }: IProps): JSX.Element {
    return(
        <div>
            <label className={styles.label}>
                {label}
                <input placeholder={placeholder} type='text' {...register(name)} {...rest} className={styles.input}/>
            </label>
            {
                sublabel &&
                    <p className={styles.sublabel}>{sublabel}</p>
            }
            {
                errors &&
                <p className={styles.error}>{errors[name]?.message}</p>
            }
        </div>
    )
}