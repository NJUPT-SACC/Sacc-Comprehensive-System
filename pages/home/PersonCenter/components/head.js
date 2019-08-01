import React from 'react';
import '../less/head.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';
import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Head extends React.Component{

  constructor(props){
    super(props)
    this.portraitRef = React.createRef()
    this.state ={
      loading:false
    }
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
     
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

    render(){
      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const { imageUrl } = this.state;
    return (
      <div className="PChead">
        <div className="PCgreenSlide"></div>
        <div className="personHeadLeft">
          <div className="PCimgBox">
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '70px', height: '70px' }} /> : uploadButton}
            </Upload>
          </div>
          <div className="PCDes">
            <p>ouu</p>
            <span>前端组</span>
            <span>打字员打字员</span>
          </div>
        </div>
        <div className="personHeadRight">
          <button>打卡</button>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
	}
};
const mapDispatchToProps = (dispatch) => {
	return {

	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Head)