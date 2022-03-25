export default function Encrypt() {
  return (
    <div className="w-3/5 m-auto p-5 pl-16 mt-4">
      <div className="form flex flex-col space-y-9">
        <div className="flex">
          <span className="w-20">文件上传:</span>
          <input className='bg-gray-400 text-gray-800 rounded-md' type='file'/>
        </div>
        <div className="flex items-center">
          <span className="w-20">备注:</span>
          <input className="bg-gray-400 opacity-70 rounded-md h-8 w-80" type="text" />
        </div>
        <div className="flex items-center">
          <span className="w-20">联系方式: </span>
          <input className="bg-gray-400 opacity-70 rounded-md h-8 w-80" type="text" />
          <span>（邮箱）</span>
        </div>
      </div>
      <div className="payways mt-16">
        <div>支付方式：</div>
        <div className="pl-12 flex flex-col space-y-4">
          <div className="mt-4">
            <span className="w-16 inline-block">微信: </span>
            <input type='checkbox'/>
          </div>
          <div>
            <span className="w-16 inline-block">支付宝：</span>
            <input type="checkbox" />
          </div>
          <div>
            <span className="w-16 inline-block">银行卡：</span>
            <input type="checkbox" />
          </div>
        </div>
        <div className="mt-10 text-gray-400 text-sm">说明： 将于1～3个工作日内发到你的邮箱中，将在通知中告知您，请注意查收。</div>
      </div>
    </div>
  )
}