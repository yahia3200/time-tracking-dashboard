import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [data, setData] = useState(null)
    const [isPendiing, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const abortCont = new AbortController() 

    useEffect(()=>{
            fetch(url, { signal : abortCont.signal })
        .then((res)=>{
            if (!res.ok){
                throw Error('could not fetch data');
            }
            return res.json()})
        .then((data)=>{
            setData(data)
            setIsPending(false)
            setError(null)})
        .catch((err)=>{

            if (err.name !== 'AbortError'){
                setIsPending(false)
                setError(err.message)
            }
        })

        return () => {
            return abortCont.abort()
        }
        
        // eslint-disable-next-line
    }, [url])

    return { error, data, isPendiing }
}

export default useFetch;