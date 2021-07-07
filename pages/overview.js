import Head from '../components/CookiesHead'
import Header from '../components/CookiesHeader'
import { useState } from 'react'

export default function Overview() {
    const [title,setTitle] = useState('Overview');
    const [path,setPath] = useState("/")
    const [page,setPage] = useState("Cookie Admin")

    return (
        <div className="bg-green-100">
          <Head title={title}/>
          <Header header={title} path={path} page={page}/>
        </div>
      )
}