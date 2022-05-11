import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Render({text}) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} >{text}</ReactMarkdown>
}
