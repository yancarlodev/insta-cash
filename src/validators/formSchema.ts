import * as yup from 'yup'

export interface IFormData {
    amount: string,
    installments: number,
    mdr: number
}

export const formSchema: yup.SchemaOf<IFormData> = yup.object().shape({
    amount: yup.string().typeError('É necessário ser o padrão "R$ 0,000.00"!').required('É necessário um valor!'),
    installments: yup.number().typeError('É necessário ser um número!').max(12, 'Só são permitidos no máximo 12 parcelas!').required('É necessário informar as parcelas!'),
    mdr: yup.number().typeError('É necessário ser um número!').required('É necessário o MDR!')
})
