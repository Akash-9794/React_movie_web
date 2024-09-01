import loader from '/load-fluid.gif';
import lo from '/index.svg';



const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative'>
      <img className='h-screen w-screen ' src={lo} alt="loder" />
      <img className='h-1/2 w-1/2 absolute' src={loader} alt="loder" />
    </div>
  )
}

export default Loading
