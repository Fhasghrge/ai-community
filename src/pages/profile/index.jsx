const questions = [
  'uu们，多时间尺度3D卷积神经网络的步态识别中MT3D模型的局部变换模型怎么搞呀?',
  '有研究深度通用线性嵌入的跨视角步态识别的大佬吗?求助!',
  '知识图谱构建流程原型、工具、数据、表示、推理以及可视化',
  '日常遇到的错误集合[更新中，待分类]'
]
export default function Profile() {
  return (
    <div className="w-[700px] m-auto mt-3 text-gray-700">
      <header className="flex items-center">
        <div className="w-18 h-18 bg-gray-600 rounded-full flex justify-center items-center">
          <img className="w-16 h-16" src="https://avatars.dicebear.com/api/adventurer/shuangddfsdffsdffsd.svg" alt="" />
        </div>
        <div className="ml-4">
          <div className="font-bold text-xl">超级骆驼</div>
          <div className="text-xs text-gray-500">编辑资料</div>
        </div>
      </header>
      <div className="grid border grid-cols-3 text-center py-1 rounded mt-5 border-gray-300">
        <div>关注</div>
        <div className="border-x border-gray-300">收藏</div>
        <div>最近浏览</div>
      </div>
      <div className="grid grid-cols-3 p-2 mt-8 gap-4 border rounded-md tracking-wider border-gray-300">
        <div>问题</div>
        <div>回答</div>
        <div>赞与关注</div>
        <div>购买记录</div>
        <div>专属客服</div>
        <div>进站必看</div>
      </div>
      <div className="mt-8">
        <div className="mb-2">你可能会感兴趣的话题:</div>
        <div className="border h-40 rounded-lg flex flex-col space-y-2 indent-4 py-2 overflow-scroll border-gray-300">
          {
            questions.map(item => (
              <div className="text-gray-500" key={item}>{item}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
