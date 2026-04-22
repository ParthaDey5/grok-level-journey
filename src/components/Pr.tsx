import React, { useRef, useState } from 'react'

function Pr() {
  const [value, setValue] = useState<string>("")
  const [loader, setLoader] = useState<boolean>(false)
  const [results, setResults] = useState<any[]>([])
  
  


  const controllerRef = useRef(null)
  const cache = useRef({})


  // const fakeApi = (input, {signal}) => {

  //   let delay = Math.floor(Math.random() * 800 + 1000);


  //   const timerId= setTimeout(() => {

  //     console.log('API Request', input);

  //   }, delay);

  //   signal.addEventListener('abort', ()=>{
  //     clearTimeout(timerId)
  //   })

  // return timerId


  // }



  const fetchWithDelay = async (input, { signal }) => {

    const key = input.toLowerCase().trim()
    if (cache.current[key]) {
      console.log("CACHE HIT: ", key);
      setResults(cache.current[key])
      setLoader(false)
      return;
    } else {

    try {
      // console.log("START: ", input)
      setLoader(true)
      await new Promise((res, rej) => {
        const timeout = setTimeout(res, 1000)

        signal.addEventListener('abort', () => {
          clearTimeout(timeout)
          rej(new Error('aborted'))
        }, { once: true })



      })
      const res = await fetch(`https://dummyjson.com/products/search?q=${input}`, { signal })
      const data = await res.json()

      


      // console.log('SUCCESS: ', input);
      setLoader(false)

      if (!input.trim()) {
        setResults([])
        return;
      }

      setResults(data.products)
      cache.current[key]= data.products

      console.log(cache.current);
      
      
      

    } catch (error) {
      if (signal.aborted) {
        // console.log("ABORTED:", input);
        
        return;
      }
      // console.log("ERROR:", error);
    } finally {
      setLoader(false)
    }
  }
  }






  const debounce = (fn, delay) => {

    let timeout;
    return (value, { signal }) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn(value, { signal })
      }, delay);
    }
  }


  // const ref = useRef(debounce(fakeApi, 500))
  const ref = useRef(debounce(fetchWithDelay, 500))



  // const handleChange = (e) => {
  //   const value = e.target.value
  //   setValue(value)

  //  if (controllerRef.current) controllerRef.current.abort()

  //   controllerRef.current= new AbortController()

  //   // ref.current(value, {signal: controllerRef.current.signal})
  //   fakeApi(value, {signal: controllerRef.current.signal})

  // }
  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
    // console.log(value.length);
    
    if (controllerRef.current) controllerRef.current.abort()
      
      controllerRef.current = new AbortController()
      

      if (value.length > 2) {
      ref.current(value, { signal: controllerRef.current.signal })
    } else {
      setLoader(false)
      setResults([])
      return;
    }


  }

  return (
    <div className='w-[100vw] flex flex-col items-center gap-10'>
      <input type="text" value={value} onChange={handleChange} className='bg-red-300 mt-28' />

      <div className='relative space-y-2'>

        {/* spinner */}
        {loader &&
          <div className="absolute top-10 spinner center">
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
          </div>}

        {/* no result */}
        {!loader && value.length>2 && results.length===0 &&
          <p>No Result Found</p>
        }

        {/* Results */}
        {value && !loader && results?.map(e =>
          <div key={e.id}>{e.title}</div>)}


      </div>
    </div>

  )
}

export default Pr

// AbortController = communicator
// signal = message
// your async code = decision maker