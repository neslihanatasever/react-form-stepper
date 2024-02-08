import * as Yup from "yup"

export const stepperValidation = Yup.object().shape({
    name: Yup.string().required("required field"),
    surname: Yup.string().required("required field"),
    age: Yup.string().required("required field"),
    job: Yup.string().required("required field"),
    about: Yup.string().required("required field"),
})

