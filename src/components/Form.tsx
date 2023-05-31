'use client'

import api from "../utils/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  useQuery,
} from '@tanstack/react-query'
import { CgSpinnerAlt } from "react-icons/cg";

import Input from "./Input"
import { useState } from "react";
import Card from "./Card";
import Error from "./Error";

export interface FormProps {
  city: string;
  idade: string;
}

const schema = yup.object({
  city: yup.string().required("Cidade é um campo obrigatório"),
}).required()

const Form = () => {
  const [city, setCity] = useState<string | undefined>(undefined)

  const { data, isInitialLoading, isError } = useQuery({
    queryKey: ["city", city],
    queryFn: ({ signal }) => api(city, signal),
    enabled: !!city
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormProps>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<FormProps> = data => {
    setCity(data?.city)
    reset()
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col relative w-80 h-48 m-8 p-3 justify-center items-center rounded-2xl bg-white"
      >
        <Input
          className="text-gray-600 w-4/5 absolute top-5 flex flex-col"
          name="city"
          placeholder="São Luís, Maranhão"
          error={errors.city}
          label="Nome da Cidade"
          register={register}
        />
        <button
          className="bg-gray-200 text-gray-500 w-4/5 absolute bottom-5 p-3 rounded-md"
          type="submit"
          disabled={isInitialLoading}
        >
          ENVIAR
        </button>
      </form>

      {
        data &&
        <Card
          city={data.city_name}
          countryCode={data.country_code}
          temperature={data.temp}
          appTemp={data.app_temp}
        />
      }
      {isInitialLoading && <CgSpinnerAlt className="animate-spin w-10 h-10 text-gray-200" />}
      {isError && <Error message="Houve algum problema na sua requisição, verifique o dado digitado e tente novamente"/>}
    </>
  )
}

export default Form