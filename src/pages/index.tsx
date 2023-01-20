import styles from '../styles/index.module.scss'
import Form from '../components/Form'
import { formSchema, IFormData } from '@/validators/formSchema'
import { handleSubmit } from '../utils/handleSubmit'
import Loader from '@/components/Loader'
import { useState } from 'react'
import { Input } from '@/components/Input'

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [valuesArray, setValuesArray] = useState<number[]>([0, 0, 0, 0])

    return (
        <div className={styles.container}>
            <div className={styles.boxContainer}>
                <section className={styles.boxLeft}>
                    <h1 className={styles.title}>Simule sua antecipação</h1>

                    <Form formSchema={formSchema} onSubmit={(values: IFormData) => handleSubmit(values, setIsLoading, setValuesArray)}>
                        <Input name='amount' label='Informe o valor da venda *' placeholder='R$ 1.000,00'/>
                        <Input name='installments' label='Em quantas parcelas *' sublabel='Máximo de 12 parcelas'/>
                        <Input name='mdr' label='Informe o percentual de MDR *'/>
                        <button hidden></button>
                    </Form>
                </section>
                <section className={styles.boxRight}>
                    <h3 className={styles.subTitle}>VOCÊ RECEBERÁ:</h3>
                    <p className={styles.valueText}>Amanhã: <span className={styles.valuePrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valuesArray[0])}</span></p>
                    <p className={styles.valueText}>Em 15 dias: <span className={styles.valuePrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valuesArray[1])}</span></p>
                    <p className={styles.valueText}>Em 30 dias: <span className={styles.valuePrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valuesArray[2])}</span></p>
                    <p className={styles.valueText}>Em 90 dias: <span className={styles.valuePrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valuesArray[3])}</span></p>
                </section>
            </div>

            <Loader isLoading={isLoading}/>
        </div>
    )
}
