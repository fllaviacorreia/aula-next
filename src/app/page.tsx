'use client'
import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { signin } from "./server/action";


export default function Login() {
  const [state, action] = useFormState(signin, undefined)
  
  return (
    <main className="flex flex-col justify-center w-full h-full items-center">
      <form className="bg-slate-300 flex flex-col w-1/2 h-4/6 justify-center items-center rounded-sm" action={action}>
      <h1>Formulário</h1>
        <Input
          id="nome"
          name="nome"
          type="text"
          title="Insira seu nome"
          placeholder="Nome completo"
          errors={state?.errors?.nome || undefined}
        />
        <Input
          id="password"
          name="password"
          type="password"
          title="Insira sua senha"
          placeholder="Senha"
          errors={state?.errors?.password || undefined}
        />
        <Input
          id="data"
          name="data"
          type="date"
          title="Insira sua data de nascimento"
          placeholder="Data de nascimento"
          errors={state?.errors?.data || undefined}
        />
        <Button title="Submit" color="bg-green-500" type="submit" />
        {/* {
           state?.message ? <p className='text-red-600'>{state?.message}</p> : <></>
        } */}
      </form>
      <div className="w-1/2 flex justify-center">
        <Button title="Register" color="bg-cyan-500" type="submit" />
      </div>
    </main>
  );
}
