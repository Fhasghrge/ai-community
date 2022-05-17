import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Api from '../../apis';
import PostListImg from '@/images/postListImg.jpg';
const projects = [
  {
    title: '金山云37°Data数据标注服务',
    detail: `37℃ Data 2017为金山云独立业务部。于2019年6月，由金山云
      投资，分拆成为独立公司，专为AI行业提供各类高质量训练数据。
      服务内容：为全球企业提供一站式的数据解决方案。包括各类数据采集、标
      注、基于云...`,
    imgurl: '/images/img4.png'
  }, {
    title: '智能语音评测服务',
    detail: `智能语音评测（Computer Assisted Pronunciation Training）基于智能语音分析技术，以音素为粒度，对发音的准确度、完整度、流利度、重音、实际发音对应的音标等维度进行全方位评测，并能对发音情况进行错误定位...`,
    imgurl: '/images/img2.png'
  },
  {
    title: '创新奇智ABC一体机，企业智能化体系架构解决方案',
    detail: `创新奇智ABC一体机在异构硬件的基础上，融合A（AI）、B（Big data）、C（Cloud）三种能力，并基于创新奇智长期的行业洞察与实践，内嵌面向不同应用场景的AI算子，以“产品+服务”的方式提供软硬一体...`,
    imgurl: '/images/img3.jpeg'
  },
  {
    title: '视频内容审核 ',
    detail: `内容安全AI审核系统`,
    imgurl: '/images/img1.jpeg'
  }
]
export default function Solicit() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Api.getAriList(4).then(res => {
      if(res.code === 0) {
        setList(res.data)
      }
    })
  }, [])
  return (
    <div>
      <div className="w-full h-96 overflow-hidden">
        <img className='object-fill w-full h-full' src={PostListImg} />
      </div>
      <div className="w-2/3 m-auto flex flex-col space-y-10 mt-6">
        {
          list?.map(({ title, body, imgurl, articleId }, index) => (
            <ProjectItem 
              key={articleId} 
              id={articleId} 
              title={title} 
              detail={body} 
              imgurl={imgurl} 
              index={index}
            />
          ))
        }
      </div>
    </div>
  )
}


function ProjectItem({ title, detail, imgurl, id, index }) {
  const naviagte = useNavigate();
  return (
    <div className="flex border p-4 rounded-lg shadow-lg border-gray-500">
      <div className='w-64 h-32 bg-gray-500 flex py-2'>
        <img className="w-full" src={`/images/tech/${(index)%10}.jpeg`} alt="" />
      </div>
      <div className="w-full px-4">
        <div 
          className="text-xl font-bold text-gray-700 hover:cursor-pointer hover:underline"
          onClick={() => naviagte('/detail/' + id)}
        >{title}</div>
        <div className="text-gray-500 h-20 text-ellipsis">{detail.slice(0, 120)} {detail.length > 120 && '...'}</div>
        <div className="contact flex justify-end pr-8">
          <svg t="1648209517100" className="icon w-8 h-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4821" width="200" height="200"><path d="M863.9 361.1c0-1-0.1-2.1-0.3-3.2-11.5-74.9-53.5-143.9-118-194.1-64.5-50.1-146.9-77.7-232.1-77.7-87.2 0-171 28.7-236.1 80.9C212 219.4 171 290.8 162 368.1c-0.1 0.9-0.2 1.8-0.2 2.7-47 8-82.8 49-82.8 98.2v136.9c0 54.9 44.7 99.6 99.6 99.6h4.3c54.9 0 99.6-44.7 99.6-99.6v-137c0-45.6-30.8-84.1-72.7-95.9 16-134 149.2-238.9 303.7-238.9 151.3 0 280.6 98 302.2 228.5-42.7 11.2-74.2 50.2-74.2 96.3v136.9c0 54.9 44.7 99.6 99.6 99.6h4.3c54.9 0 99.6-44.7 99.6-99.6V458.9c0-48.6-35-89.2-81.1-97.8zM234.5 468.9v136.9c0 28.4-23.1 51.6-51.6 51.6h-4.3c-28.4 0-51.6-23.1-51.6-51.6V468.9c0-28.4 23.1-51.6 51.6-51.6h4.3c28.5 0 51.6 23.2 51.6 51.6zM897 595.8c0 28.4-23.1 51.6-51.6 51.6h-4.3c-28.4 0-51.6-23.1-51.6-51.6V458.9c0-28.4 23.1-51.6 51.6-51.6h4.3c28.4 0 51.6 23.1 51.6 51.6v136.9zM459.8 769.4c-38.6 0-71.3 25.8-81.7 61.1h-96c-33.9 0-63.4-23.1-71.7-56.1-3.2-12.9-16.3-20.7-29.1-17.4-12.9 3.2-20.7 16.3-17.4 29.1 6.5 25.9 21.7 49.3 42.7 66 21.4 17 48.3 26.4 75.5 26.4h96c10.4 35.3 43 61.1 81.7 61.1 46.9 0 85.1-38.2 85.1-85.1s-38.2-85.1-85.1-85.1z m0 122.3c-20.5 0-37.1-16.7-37.1-37.1 0-20.5 16.7-37.1 37.1-37.1s37.1 16.7 37.1 37.1-16.7 37.1-37.1 37.1z" p-id="4822" fill="#1296db"></path></svg>
        </div>
      </div>
    </div>
  )
}
