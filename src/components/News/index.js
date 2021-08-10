import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../../reducers/news'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../../actions/news'

export default function News(props) {
    const { status, list } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))

    React.useEffect(() => {
        loadDataByAxios()
    }, [])

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>News page</p>
            <Button onClick={loadData}>Load Data</Button>
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
                <div className="bordered">
                    <p style={{ color: 'red' }}>Something went wrong</p>
                    <button onClick={loadData}>Try again</button>
                </div>
            )}
        </div>
    )
}
