import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { IFormData } from "@/validators/formSchema"
import styles from './styles.module.scss'

export default function Form({ children, onSubmit, formSchema }: any): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(formSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name
              }
            })
          : child
       })}
    </form>
  )
}