interface GeneralIconProps {
  component: any
  className: string
}

const GeneralIcon = ({ component, className }: GeneralIconProps) => {
  const Component = component

  return (
    <Component className={className} />
  )
}

export default GeneralIcon