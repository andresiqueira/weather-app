const Error = ({ message }: { message: string | undefined }) => {

  return (
    <span className="text-red-500 text-sm max-w-[20rem] text-center">{message}</span>
  )
}

export default Error