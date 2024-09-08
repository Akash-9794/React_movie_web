import loader from '/circle.gif';



const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative'>
      <img className='h-1/2 ' src={loader} alt="loder" />
    </div>
  )
}

export default Loading
