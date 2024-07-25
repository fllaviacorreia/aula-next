import { redirect } from "next/navigation";
import { LoginSchema, LoginState } from "./validators/login";

export async function signin(state: LoginState, formData: FormData) {

    // Validate form fields
    const validatedFields = LoginSchema.safeParse({
      nome: formData.get('nome'),
      password: formData.get('password'),
      data: formData.get('data'),
    })

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const data = await fetch("URL"+"/endpoint", {
       method: "POST",
       body: JSON.stringify(validatedFields.data),
       headers: {
            "Content-Type": "application/json",
       } 
    })


    redirect('/home')

    // if(data.ok){
    //     redirect('/home')
    // }
    // return {message: "Erro ao logar." + data.text}
}