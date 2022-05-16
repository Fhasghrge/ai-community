import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../apis';
import { checkParams } from '../../utils';

export default function Switch({ refreshInfo }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-[500px] m-auto border-2 rounded-lg mt-20 border-gray-300 shadow-xl text-gray-700 h-96">
      <div className="switch flex text-xl border-b-2 text-center border-gray-300" >
        <div
          className="w-1/2 border-r-2 border-gray-300 py-2"
          onClick={() => setToggle(true)}
        >登录</div>
        <div
          className="w-1/2 py-2"
          onClick={() => setToggle(false)}
        >注册</div>
      </div>
      {
        toggle ? <Login refreshInfo={refreshInfo} /> : <Register />
      }
    </div>
  )
}

function Login({refreshInfo}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <div className="form w-4/5 text-right m-auto flex flex-col space-y-8 text-lg mt-8 text-gray-700">
        <div className="flex m-auto space-x-3">
          <span className="w-20">用户名 </span>
          <input
            className='inputel'
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="flex m-auto space-x-3">
          <span className='w-20 tracking-bigger'>密码</span>
          <input
            className="inputel"
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div
          className='text-center bg-blue-400 opacity-90 w-max mx-auto py-1 px-16 rounded text-gray-700 tracking-bigger'
          onClick={() => {
            const params = { name, password };
            if (!checkParams(params)) {
              toast('所有的选项必填')
              return;
            }
            Api.login(params).then(res => {
              if (res.code === 0) {
                toast('登录成功🎉', {
                  autoClose: 2000,
                })
                refreshInfo()
                setTimeout(() => {
                  navigate('/home')
                }, 3000)
              }
            })
          }}
        >登录</div>
      </div>
      <div className="use-others pt-2 pb-6 px-16 text-gray-400 text-center">
        <div>或用下面方式登录：</div>
        <div className="flex justify-center space-x-10 text-xs text-center mt-4">
          <div>
            <div><svg t="1648202949525" className="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3344" width="200" height="200"><path d="M692.901549 442.146927c11.770115 0 23.54023 1.023488 34.798601 2.046976-31.216392-145.847076-187.298351-254.336832-365.385307-254.336832C163.246377 189.857071 0 325.469265 0 497.927036c0 99.278361 54.244878 181.157421 144.823588 244.613694l-36.333833 109.001499L235.402299 788.085957c45.545227 9.211394 81.87906 17.911044 126.912544 17.911044 11.258371 0 22.516742-0.511744 33.775112-1.535232-7.164418-24.051974-11.258371-49.63918-11.258371-75.738131 0-158.128936 136.123938-286.576712 308.069965-286.576711zM497.927036 343.892054c27.122439 0 45.545227 17.911044 45.545228 45.033483 0 27.122439-17.911044 45.545227-45.545228 45.545228-27.122439 0-54.244878-17.911044-54.244877-45.545228 0-27.122439 27.122439-45.033483 54.244877-45.033483zM244.613693 434.470765c-27.122439 0-54.756622-17.911044-54.756622-45.545228 0-27.122439 27.634183-45.033483 54.756622-45.033483s45.033483 17.911044 45.033483 45.033483c0 27.122439-17.911044 45.545227-45.033483 45.545228z" fill="#83D944" p-id="3345"></path><path d="M1023.488256 724.629685c0-144.823588-144.823588-263.036482-307.558221-263.036482-172.457771 0-308.069965 118.212894-308.069965 263.036482 0 144.823588 135.612194 263.036482 308.069965 263.036482 36.333833 0 72.667666-9.211394 109.001499-17.911045l99.278361 54.244878-27.122439-90.578711c72.155922-54.756622 126.4008-127.424288 126.4008-208.791604z m-407.348326-45.545227c-17.911044 0-36.333833-17.911044-36.333833-36.333833 0-17.911044 17.911044-36.333833 36.333833-36.333833 27.634183 0 45.545227 17.911044 45.545227 36.333833-0.511744 18.422789-18.422789 36.333833-45.545227 36.333833z m199.068466 0c-17.911044 0-35.822089-17.911044-35.822089-36.333833 0-17.911044 17.911044-36.333833 35.822089-36.333833 27.122439 0 45.545227 17.911044 45.545227 36.333833-0.511744 18.422789-18.422789 36.333833-45.545227 36.333833z" fill="#D8D8D8" p-id="3346"></path></svg></div>
            <div className="mt-1">微信</div>
          </div>
          <div>
            <div><svg t="1648203911383" className="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5158" width="200" height="200"><path d="M666.122449 909.061224c-10.44898 0-21.420408-1.044898-31.869388-2.612244-39.183673-4.702041-74.710204-23.510204-100.832653-53.289796-13.583673 5.22449-28.212245 5.22449-41.795918 0-21.420408 28.212245-61.64898 48.065306-108.669388 53.289796-66.35102 7.314286-138.44898-11.493878-144.718367-55.379592-5.22449-34.481633 37.093878-61.126531 81.502041-75.755102-25.6-28.212245-43.363265-63.738776-51.2-101.355102l-0.522449 0.522449c-25.077551 31.346939-41.795918 50.155102-61.126531 50.155102-2.089796 0-4.179592-0.522449-6.269388-1.044898-7.314286-2.612245-13.061224-8.881633-17.240816-18.808164-16.195918-34.481633-9.404082-100.310204 15.15102-150.465306 0 0 0-0.522449 0.522449-0.522449 12.538776-22.465306 27.689796-43.363265 45.453061-62.171428-6.269388-11.493878-10.44898-24.032653-12.016326-37.093878v-3.134694c0.522449-19.330612 10.44898-37.093878 26.644898-47.542857-10.971429-73.142857 9.926531-147.330612 58.514286-203.232653 49.110204-56.946939 120.163265-88.816327 194.873469-86.204081h4.702041c65.306122 0 129.567347 26.122449 177.110204 72.097959 49.110204 47.542857 76.8 112.326531 77.844898 180.767347v7.314285c0.522449 9.926531 0 19.330612-1.044898 29.257143 14.106122 8.881633 21.420408 20.37551 21.420408 48.065306 0 13.583673-1.044898 27.689796-9.926531 36.04898 13.061224 17.763265 28.734694 42.840816 41.27347 62.693877l2.612245 4.179592c20.37551 32.391837 23.510204 74.187755 22.987755 96.130613 0 17.240816-2.089796 58.514286-18.285714 70.530612-3.657143 2.612245-7.314286 3.657143-12.016327 3.657143h-4.179592c-26.122449 0-41.273469-23.510204-57.991837-48.587755l-1.567347-2.089796c-8.881633 36.571429-26.122449 71.053061-50.677551 99.265306 27.167347 9.404082 83.069388 31.346939 75.755103 73.142857-5.746939 35.526531-55.902041 62.171429-114.416327 62.171428z m-388.702041-63.738775z m250.253061-11.493878z m276.375511-140.016326z m-47.020409-235.102041z" fill="#7BD4EF" p-id="5159"></path></svg></div>
            <div className="mt-1">QQ</div>
          </div>
        </div>
      </div>
    </>
  )
}

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('男');
  const [school, setSchool] = useState('');
  return (
    <div className="form w-4/5 text-right m-auto flex flex-col space-y-8 text-lg mt-8 pb-10">
      <div className="flex m-auto space-x-3">
        <span className="w-20">用户名 </span>
        <input
          className='inputel'
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="flex m-auto space-x-3">
        <span className='w-20 tracking-bigger'>密码</span>
        <input
          className="inputel"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="flex m-auto space-x-3">
        <span className='w-20 tracking-bigger'>性别</span>
        <select
          className='inputel'
          name="gender"
          onChange={e => setGender(e.target.value)}
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div className="flex m-auto space-x-3">
        <span className='w-20 tracking-bigger'>学校</span>
        <input
          className="inputel"
          type="text"
          onChange={e => setSchool(e.target.value)}
        />
      </div>
      <div
        className='text-center bg-blue-400 opacity-90 w-max mx-auto py-1 px-16 rounded text-gray-700 tracking-bigger'
        onClick={() => {
          const params = { name, password, gender, school };
          if (!checkParams(params)) {
            toast('所有的选项必填')
            return;
          }
          Api.register(params).then(res => {
            if (res.code === 0) {
              toast('注册成功🎉')
            }
          })
        }}
      >注册</div>
    </div>
  )
}
