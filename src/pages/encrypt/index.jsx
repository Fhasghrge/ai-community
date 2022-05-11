import UploadImg from '@/images/uploadImg.png';
export default function Encrypt() {
  return (
    <div >
      <div className="w-full h-96 overflow-hidden">
        <img className='w-full h-full object-fill' src={UploadImg} />
      </div>
      <div className="form flex w-1/3 m-auto flex-col space-y-9 text-gray-700 mt-10">
        <div className="flex">
          <span className="w-20">文件上传:</span>
          <input className='bg-gray-200 text-gray-800 rounded-md' type='file'/>
        </div>
        <div className="flex items-center">
          <span className="w-20">备注:</span>
          <input className="bg-gray-200 opacity-70 rounded-md h-8 w-80" type="text" />
        </div>
        <div className="flex items-center">
          <span className="w-20">联系方式: </span>
          <input className="bg-gray-200 opacity-70 rounded-md h-8 w-80" type="text" />
          <span>（邮箱）</span>
        </div>
      </div>
      <div className="payways mt-16 text-gray-700 w-1/3 m-auto">
        <div className='my-2'>支付方式：</div>
        <div className='pl-2'>微信/支付宝： 15303576100</div>
        <div className="mt-10 text-gray-400 text-sm">说明： 将于1～3个工作日内发到你的邮箱中，将在通知中告知您，请注意查收。</div>
      </div>
    </div>
  )
}
