import React from 'react'
import { API_URL } from '../App/constants'
import { Button } from '@material-ui/core'
import transport from '../../services/transport'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../../reducers/newss'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../../actions/news'

export default function News(props) {
    // const [news, setNews] = React.useState([])
    // const [isLoading, setIsLoading] = React.useState(false)
    // const [isError, setIsError] = React.useState(false)

    // const loadData = () => {
    //     setIsLoading(true)
    //     setIsError(false)
    //
    //     fetch(API_URL)
    //         .then((response) => {
    //             console.log('success', { response })
    //
    //             if (!response.ok || response.status !== 200) {
    //                 throw Error('Something went wrong')
    //             }
    //
    //             return response.json()
    //         })
    //         .then((responseJson) => {
    //             console.log('second then in promise', { responseJson })
    //
    //             setNews(responseJson)
    //             setIsLoading(false)
    //         })
    //         .catch((error) => {
    //             console.error('error', error)
    //
    //             setIsLoading(false)
    //             setIsError(true)
    //         })
    // }

    // const loadData = async () => {
    //     try {
    //         const response = await fetch(API_URL)
    //
    //         if (!response.ok || response.status !== 200) {
    //             throw Error('Something went wrong')
    //         }
    //
    //         const responseJson = await response.json()
    //
    //         console.log({ response, responseJson })
    //     } catch (error) {
    //         console.error('error', error)
    //     }
    // }

    // const loadDataByAxios = () => {
    //     transport
    //         .get(API_URL)
    //         .then(({ data }) => console.log('success', { data }))
    //         .catch((error) => console.error('error', error))
    // }

    // const loadDataByAxios = async () => {
    //     setIsLoading(true)
    //     setIsError(false)
    //
    //     try {
    //         const { data } = await transport.get(API_URL)
    //
    //         console.log('success', { data })
    //
    //         setNews(data)
    //         setIsLoading(false)
    //     } catch (error) {
    //         console.error('error', error)
    //
    //         setIsLoading(false)
    //         setIsError(true)
    //     }
    // }

    const { status, list } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>News page</p>
            <Button onClick={loadData}>Load Data</Button>
            <Button onClick={loadDataByAxios}>Load Data By Axios</Button>
            <Button onClick={clearData}>Очистить данные</Button>

            {status !== NEWS_REQUEST_STATUS.ERROR ? (
                <ol className="bordered">
                    {list.map((newsItem) => (
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </ol>
            ) : (
                <p style={{ color: 'red' }}>ERROR!!!</p>
            )}
        </div>
    )
}
