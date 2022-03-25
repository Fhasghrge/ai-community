import RobotPic from '@/images/robot.jpg';

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
    title: '订单滚动',
    newlists: [

    ]
  },
  {
    title: 'AI论坛',
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

    ]
  }
]
export default function Home() {
  return (
    <div>
      <div className="picture border border-gray-500 border-t-0 rounded-sm relative w-2/3 h-80 m-auto overflow-hidden shadow">
        <img className='w-full absolute' src={RobotPic} />
        <div className='absolute top-2/3 left-2/3 text-xl text-right text-gray-300'>
          <div> 人工神经网络模型</div>
          <div className='text-sm mt-3'>加密保护技术</div>
        </div>
      </div>
      <div className="news grid grid-cols-2 w-2/3 m-auto">
        {news.map(item =>
          <NewItem key={item.title} title={item.title} newlists={item.newlists} />
        )}
      </div>
    </div>
  )
}



function NewItem({ title, newlists = [] }) {
  return (
    <div className='p-4'>
      <div className="title text-center text-xl font-bold">{title}</div>
      <div className='indent-2 flex flex-col space-y-2 text-gray-300 text-sm mt-2'>
        {
          newlists.map((item, index) => (
            <div key={index} className='truncate hover:underline hover:cursor-pointer'>{index + 1} :{item}</div>
          ))
        }
      </div>
    </div>
  )
}