import Link from "next/link";
import PocketBase from 'pocketbase';
import "./Notes.module.css";
import CreateNote from "./CreateNote";

//pocket base variables
export const dynamic = "auto",
    dynamicParams = true,
    revalidate = 0,
    fetchCache = "auto",
    runtime = "nodejs",
    preferredRegion = "auto"

async function getNotes() {
    // usual way
    // const res = await fetch(
    //     "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    //     {"cache": "no-store"}
    // )
    // const data  = await res.json()

    // pocketbase way
    const db = new PocketBase('http://127.0.0.1:8090')

// fetch a paginated records list
    const data = await db.collection('notes').getList(1, 50)
    return data?.items as any[]
}

export default async function NotePage() {
    const notes = await getNotes()
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}/>
                })}
            </div>
            <CreateNote/>
        </div>
    )
}

function Note({note}: any) {
    const {id, title, content, created} = note || {}
    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}