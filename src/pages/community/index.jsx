import { useState, useEffect } from "react"
import { Drawer, Form, Input, Button, Select } from 'antd'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import Render from "../../components/markdownRender";

import * as Api from '../../apis';

const { Option } = Select;
const  { TextArea } = Input;
const questions = [
  {
    text: 'uu们，多时间尺度3D卷积神经网络的步态识别中MT3D模型的局部变换模型怎么搞呀?',
    good: 13,
    comment: 26,
    collect: 35
  },
  {
    text: '有研究深度通用线性嵌入的跨视角步态识别的大佬吗?求助!',
    good: 31,
    comment: 32,
    collect: 33
  },
  {
    text: '知识图谱构建流程原型、工具、数据、表示、推理以及可视化',
    good: 81,
    comment: 42,
    collect: 3
  },
  {
    text: '日常遇到的错误集合[更新中，待分类]',
    good: 14,
    comment: 24,
    collect: 93
  },
]

export default function Community() {
  const [drawerVis, setDrawerVis] = useState(false);
  const [quesList, setQuesList] = useState([]);

  const refresh = () => {
    Api.getAriList(1).then(res => {
      if(res.code === 0) {
        setQuesList(res.data)
      }
    })
  }
  const postSuccess = () => {
    setDrawerVis(false);
    refresh()
  }
  useEffect(() => {
    refresh()
  }, [])
  return (
    <div>
      <div className="community flex box-border pt-2 m-auto space-x-2 justify-center">
        <div className="w-1/2">
          {
            quesList.map((item) => (
              <Question key={item.articleId} item={item} />
            ))
          }
        </div>
        <div className="border border-gray-400 w-48 p-2 rounded-lg">
          <div className="flex items-center" onClick={() => setDrawerVis(pre => !pre)}>
            <svg t="1648201296813" className="w-8 h-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7755" width="200" height="200"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m32 106.666667v160H704v64h-160V704h-64v-160.021333L320 544v-64l160-0.021333V320h64z" p-id="7756" fill="#e6e6e6"></path></svg>
            <span>
              新建
            </span>
          </div>
        </div>
      </div>
      <Drawer
        title="发布"
        placement="right"
        onClose={() => setDrawerVis(false)}
        visible={drawerVis}
      >
        <PostForm postSuccess={postSuccess} />
      </Drawer>
    </div>
  )
}

function PostForm({ postSuccess }) {
  const onFinish = (values) => {
    Api.postArticle(values).then(res => {
      if(res.code === 0) {
        postSuccess()
        toast('文章发布成功！')
      }else {
        toast(res.msg || '发布失败')
      }
    }) 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      initialValues={{
        category: 1
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入标题',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='分类'
        name='category'
      >
        <Select >
          <Option value={0}>行业资讯</Option>
          <Option value={1}>AI论坛</Option>
          <Option value={2}>订单滚动</Option>
          <Option value={3}>合作方</Option>
          <Option value={4}>项目招揽</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="内容"
        name="body"
      >
        <TextArea rows={8} />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          发布文章
        </Button>
      </Form.Item>
    </Form>
  )
}


function Question({ item }) {
  const naviagte = useNavigate();
  return (
    <div className="p-2 mb-8 border border-gray-400 rounded-md bg-gray-500 shadow-md">
      <div 
        className="title font-bold text-lg underline"
        onClick={() => naviagte('/detail/' + item.articleId)}
      >{item.title}</div>
      <div className="mb-5"><Render text={item?.body} /></div>
      <div className="actions flex justify-around border border-gray-400 rounded-lg py-1">
        <div className="flex items-center space-x-1">
          <svg t="1648200775000" className="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7383" width="200" height="200"><path d="M581.674667 170.666667c6.72 0 18.538667 1.429333 27.584 4.352 44.544 14.442667 70.186667 61.76 59.797333 109.12l-1.066667 4.437333-39.701333 148.906667h157.269333c19.093333 0 37.973333 7.082667 50.773334 21.248 14.293333 15.829333 19.861333 36.778667 15.616 57.109333l-1.066667 4.352-82.922667 295.253333a51.882667 51.882667 0 0 1-46.08 37.76l-3.84 0.128H298.666667V452.501333c84.949333-18.389333 209.194667-244.373333 209.194666-244.373333C525.525333 184.170667 546.944 170.666667 581.674667 170.666667zM234.666667 448v405.333333H170.666667V448h64z m347.008-213.333333c-9.6 0-13.546667 1.109333-18.453334 6.613333l-1.706666 2.005333-8.064 14.08-8.64 14.613334a1342.848 1342.848 0 0 1-63.189334 96.426666c-24.512 33.92-48.597333 63.146667-72.234666 86.464-15.722667 15.509333-31.146667 28.437333-46.72 38.464V789.333333h346.154666L789.333333 502.485333c0-0.277333-0.128-0.448-0.490666-0.853333 0.298667 0.341333-0.853333-0.149333-3.285334-0.149333H544.981333l61.162667-229.44c4.394667-16.426667-3.626667-31.936-16.597333-36.138667a46.016 46.016 0 0 0-7.893334-1.237333z" p-id="7384" fill="#e6e6e6"></path></svg>
          <span>
            {item?.like || '0'}
          </span>
        </div>
        <div className="border-x w-1/3 flex justify-center items-center space-x-1">
          <svg t="1648200790245" className="w-6 h-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7569" width="200" height="200"><path d="M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334z m0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333z m-271.36 213.334v64h-176.64v-64h176.64z m122.026-128v64H362.667v-64h298.666z" p-id="7570" fill="#e6e6e6"></path></svg>
          <span> {item?.comment || '0'}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg t="1648200519984" className="w-6 h-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7029" width="200" height="200"><path d="M490.261333 173.44a49.066667 49.066667 0 0 1 64.064 19.178667l1.664 3.093333 87.850667 177.813333 196.352 28.501334a49.066667 49.066667 0 0 1 29.717333 81.066666l-2.538666 2.645334L725.333333 624l33.536 195.349333a49.066667 49.066667 0 0 1-68.010666 53.269334l-3.157334-1.514667L512 778.858667l-175.701333 92.266666a49.066667 49.066667 0 0 1-71.637334-48.426666l0.469334-3.328L298.666667 624.021333 156.629333 485.76a49.066667 49.066667 0 0 1 23.893334-83.114667l3.285333-0.597333 196.352-28.501333 87.850667-177.813334a49.066667 49.066667 0 0 1 22.250666-22.272z m-67.626666 258.581333l-199.658667 28.992 144.469333 140.650667-34.133333 198.741333L512 706.56l178.688 93.845333-34.133333-198.741333 144.469333-140.650667-199.658667-28.992L512 251.157333l-89.386667 180.864z" p-id="7030" fill="#e6e6e6"></path></svg>
          <span>{item?.collect || '0'}</span>
        </div>
      </div>
    </div>
  )
}
