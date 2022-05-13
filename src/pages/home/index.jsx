import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Api from '../../apis';
import HomeImg from '@/images/homeImg.jpg';

const news = [
  {
    title: '行业资讯',
    newlists: [
      '墨奇科技携手浪潮信息共建元脑生态，加速Al产业化应用',
      'Kroger携手NVIDIA基于AI赋能的先进应用和服务',
      '案例研究:由AI驱动的故障分析和检测系统可更快发现问题',
      'AI芯片行业需求全面爆发爱芯元智再获A+ +轮8亿元融资加速...'
    ]
  },
  {
    title: 'AI论坛',
    newlists: [
      '下单时间：20220302192313客户：小**',
      '下单时间：20220302192445客户：成*',
      '下单时间：20220302193617客户：间***',
      '下单时间：20220302193636客户：是**'
    ]
  },
  {
    title: '订单滚动',
    newlists: [
      'uu们，多时间尺度3D卷积神经网络的步态识别中MT3D模型的局部变换模型怎么搞呀?',
      '有研究深度通用线性嵌入的跨视角步态识别的大佬吗?求助!',
      '知识图谱构建流程原型、工具、数据、表示、推理以及可视化',
      '日常遇到的错误集合[更新中，待分类]'
    ]
  },
  {
    title: '合作方',
    newlists: [
      '成都大象分形智能科技有限公司',
      '（入驻）攀枝花天一科技',
      '（入驻）成美智能制造'
    ]
  }
]
const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Promise.all([0,1,2,3].map(item => {
      return Api.getAriList(item).then(res => res.data?.slice(-4,) || [])
    })).then(res => {
      news.forEach((item, index) => {
        item.newlists = res[index]
      })
      setList(news)
    })
  }, [])

  return {
    list,
    loading
  }
}

export default function Home() {
  const { loading, list } = useList()
  return (
    <div>
      <div className="picture relative w-full h-96 overflow-hidden">
        <img className='w-full h-full object-fill' src={HomeImg} />
      </div>
      <div className="news grid grid-cols-2 w-2/3 m-auto">
        {list.map(item =>
          <NewItem key={item.title} title={item.title} newlists={item.newlists} />
        )}
      </div>
    </div>
  )
}



function NewItem({ title, newlists = [] }) {
  const navigate = useNavigate()
  const clicktoDetail = (articleId) => {
    navigate('/detail/' + articleId)
  }
  return (
    <div className='p-4'>
      <div className="title text-center text-xl font-bold text-blue-500">{title}</div>
      <div className='indent-2 flex flex-col space-y-2 text-gray-700 text-sm mt-2 pl-10'>
        {
          newlists.map((item, index) => (
            <div 
              key={index} 
              className='truncate hover:underline hover:cursor-pointer'
              onClick={() => {
                if(item.category === 1 | item.category === 0) {
                  clicktoDetail(item.articleId)
                }
              }}
            >{index + 1}. {item.title}</div>
          ))
        }
      </div>
    </div>
  )
}
