
const HeaderName = ({ text }: { text: string }) => {
  return (
    <div className="text-center mt-10 flex justify-center">
      <h1 className="text-2xl border-b-1 w-auto">{text}</h1>
    </div>
  )
}

export default HeaderName