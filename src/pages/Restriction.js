import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  PageHeader
} from 'antd';
import Moment from 'moment'
import './Restriction.css';

const { TextArea } = Input;

class Restriction extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      state: [
        {
          "id": "1",
          "name": "Baden-Württemberg"
        },
        {
          "id": "2",
          "name": "Bayern"
        },
        {
          "id": "3",
          "name": "Berlin"
        },
      ],
      district: [
        {
          "id": "1",
          "name": "Emmendingen"
        },
        {
          "id": "2",
          "name": "Freibrug im Breisgau"
        },
        {
          "id": "3",
          "name": "Mannheim"
        },
      ],
      action: [
        {
          "id": "1",
          "name": "Schul- und Kitaschließung"
        },
        {
          "id": "2",
          "name": "Ausnahme Schul-und Kitaschließung"
        },
        {
          "id": "3",
          "name": "Hochschulschließung"
        },
      ]
    };

  }

  componentWillMount() {
    fetch("https://httpbin.org/get")
      .then(res => res.json())
      .then(
        (result) => {
          /*
          this.setState({
            state: result.state,
            district: result.district
          })
          */
        },
        (error) => {
          alert("Error while API call")
          console.log(error)
          /*
          this.setState({
            isLoaded: true,
            error
          });
          */
        }
      )
  }

  onFinish = (values) => {
    // Handle Form Data
    console.log(values);

    var startDateMoment = Moment(values.startDate);
    var endDateMoment = Moment(values.endDate);
    if (startDateMoment.isAfter(endDateMoment)) {
      alert("Start has to be before end");
      return
    }

    
    fetch('https://map4all.appspot.com/regulation-class/', {
      method: 'GET',
      'headers': {
        'Authorization': 'Basic YWRtaW46WHpGcnhNcTdtR0VoRUhZMjd3cFQzSG1JZ2F4WXpZaVoycXAyUnhrVmZBazM4dHR5OXBJUVc2MXEwTmM2ZEQwUA=='
      }
    });

  }

 
  render() {

    return (
      <div className="Restriction">
        <PageHeader className="site-page-header" title="Datenpflege" />

        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" size={'middle'} onFinish={this.onFinish} >

          <Form.Item label="Bundesland" name="state" rules={[{ required: true }]}>
            <Select>
              {this.state.state.map((state) =>
                <Select.Option key={state.id} value={state.name}>{state.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item label="Landkreis" name="district" >
            <Select>
              {this.state.district.map((district) =>
                <Select.Option key={district.id} value={district.name}>{district.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item label="Erlassdatum" name="releaseDate" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item label="Startdatum" name="startDate" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item label="Enddatum" name="endDate">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Maßnahmentyp" name="restrictionType" rules={[{ required: true }]}>
            <Select>
              {this.state.action.map((action) =>
                <Select.Option key={action.id} value={action.name} >{action.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item label="Info" name="details">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="URL" name="url">
            <Input />
          </Form.Item>

          <Form.Item label="Maßnahmentyp 2.0" name="restrictionType2">
            <Select mode="multiple">
              {this.state.action.map((action) =>
                <Select.Option key={action.id} value={action.name} >{action.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={console.log("Test 2")}>
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    )
  };
}

export default Restriction;
