import { TiWeatherCloudy } from "react-icons/ti"

import GeneralIcon from "./icons/GeneralIcon";

interface CardProps {
  city: string;
  temperature: number;
  appTemp: number;
  countryCode: string;
}

const Card = ({ city, temperature, appTemp, countryCode}: CardProps) => {

  return (
    <div className="flex flex-col w-80 h-60 m-8 p-3 rounded-2xl justify-center items-center bg-white">
      <div className="flex flex-row w-4/5">
        <h2 className="text-2xl">Temperatura: {Math.floor(temperature)}ºc</h2>
        <GeneralIcon component={TiWeatherCloudy} className='text-blue-300 text-md' />
      </div>

      <p className="text-sm w-4/5">
        Sensação térmica: {Math.floor(appTemp)}ºc <br />
        Cidade: {city}, {countryCode}
      </p>
    </div>
  )
}

export default Card