import { IFormData } from "@/validators/formSchema"
import api from "./api"
import { errorToast } from "./errorToast"

export const handleSubmit = (formData: IFormData, setIsLoading: (state: boolean) => void, setValuesArray: (state: number[]) => void): void => {
    setIsLoading(true)

    const formattedAmount = formData.amount.replace('R$', '').replace('.', '').trim().split(',')
    const amountInCents = Number(formattedAmount[0]) * 100 + Number(formattedAmount[1])
    if(!amountInCents) {
        return errorToast('O formato do valor de venda deve ser R$ 0.000,00!')
    }

    const formDataToNumber = {
        amount: amountInCents,
        installments: Number(formData.installments),
        mdr: Number(formData.mdr)
    }

    api.post('', formDataToNumber)
    .then((response) => {
        const dayArray: number[] = []

        for(const day in response.data) {
            dayArray.push(response.data[day])
        }

        setValuesArray(dayArray)
    })
    .catch((error) => {
        if(error.response.status === 408) {
            errorToast('Limite de tempo extrapolado!')
        } else if(error.response.status === 500) {
            errorToast('Ocorreu um erro no servidor, tente novamente mais tarde!')
        } else {
            errorToast(error?.response?.data?.message ? `${error?.response?.data?.message}!` : 'Um erro ocorreu, por favor, tente novamente!')
        }
    })
    .finally(() => {
        setIsLoading(false)
    })
}