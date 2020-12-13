import { SignatureHelpTriggerCharacter } from "typescript"

interface Song {
    readable: boolean
    id: number
    title: string
    duration: number
    author: string
    album: string
    album_cover: string
    link: string
    preview_link: string
    isPlaying?: boolean
    preview_duration?: number
}

export default Song;