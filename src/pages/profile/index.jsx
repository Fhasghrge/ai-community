export default function Profile() {
  return (
    <div className="w-[700px] m-auto mt-3">
      <header className="flex items-center">
        <div className="w-18 h-18 bg-gray-600 rounded-full flex justify-center items-center">
          <img className="w-16 h-16" src="https://avatars.dicebear.com/api/adventurer/shuangddfsdffsdffsd.svg" alt="" />
        </div>
        <div className="ml-4">
          <div className="font-bold text-xl">超级骆驼</div>
          <div className="text-xs indent-8 text-gray-500">编辑资料</div>
        </div>
      </header>
      <div className="grid border grid-cols-3 text-center py-1 rounded mt-5">
        <div>关注</div>
        <div className="border-x">收藏</div>
        <div>最近浏览</div>
      </div>
      <div className="grid grid-cols-3 p-2 mt-8 gap-4 border rounded-md tracking-wider">
        <div>问题</div>
        <div>回答</div>
        <div>赞与关注</div>
        <div>购买记录</div>
        <div>专属客服</div>
        <div>进站必看</div>
      </div>
      <div className="mt-8">
        <div className="mb-2">你可能会感兴趣的话题:</div>
        <div className="h-20 border rounded-lg"></div>
      </div>
    </div>
  )
}