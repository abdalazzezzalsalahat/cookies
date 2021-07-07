import Head from './CookiesHead'
import Header from './CookiesHeader'
import Main from './CookiesMain'
import Footer from './CookiesFooter'
import { useState } from 'react'

export default function Admin({username,password}){

    const [title,setTitle] = useState('Cookie Stand Admin');
    const [branches,setBranches] = useState('0')
    const [path,setPath] = useState("/overview")
    const [page,setPage] = useState("overview")

    return (
        <div className="bg-green-100">
        <Head title={title}/>
        <Header header={title} path={path} page={page} username={username}/>
        <Main title={title} setBranches={setBranches} username={username} password={password}/>
        <Footer branches={branches} />
        </div>
    )

}