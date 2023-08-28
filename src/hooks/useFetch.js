import { useEffect, useState } from "react";

export default function useFetch (url, method = 'GET') {
    let [data, setData] = useState(null);
    let [postData, setPostData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);

        let options = {
          signal,
          method
        }

        let fetchData = () => {
          fetch(url, options)
          .then(res => {
            if (!res.ok) {
              throw Error('Something went wrong!');
            }
            return res.json();
          })
          .then(data => {
            setError(false);
            setLoading(false);
            return setData(data);
            })
          .catch(e => {
            setError(e.message);
          })
        }

        if (method === "POST" && postData) {
          options = {
            ...options,
          headers : {
            "Content-Type" : "application/json"
          },
            body : JSON.stringify(postData)
          }
          fetchData()
        }

        if (method === "GET") {
          fetchData();
        }

          return () => abortController.abort();
    }, [url, postData]);
    return { setPostData, data, loading, error };
}