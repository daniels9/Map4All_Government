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

class Overview extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      state: [
        {
            "id": "1",
            "name": "Baden-Wuerttemberg"
          },
          {
            "id": "2",
            "name": "Bayern"
          },
          {
            "id": "3",
            "name": "Berlin"
          },
          {
            "id": "4",
            "name": "Brandenburg"
          },
          {
            "id": "5",
            "name": "Bremen"
          },
          {
            "id": "6",
            "name": "Hamburg"
          },
          {
            "id": "7",
            "name": "Hessen"
          },
          {
            "id": "8",
            "name": "Mecklenburg-Vorpommern"
          },
          {
            "id": "9",
            "name": "Niedersachsen"
          },
          {
            "id": "10",
            "name": "Nordrhein-Westfalen"
          },
          {
            "id": "11",
            "name": "Rheinland-Pfalz"
          },
          {
            "id": "12",
            "name": "Saarland"
          },
          {
            "id": "13",
            "name": "Sachsen"
          },
          {
            "id": "14",
            "name": "Sachsen-Anhalt"
          },
          {
            "id": "15",
            "name": "Schleswig-Holstein"
          },
          {
            "id": "16",
            "name": "Thueringen"
          },
      ],
      district: [
        {
            "id": "1",
            "name": "All"
          },
        {
          "id": "2",
          "name": "Emmendingen"
        },
        {
          "id": "3",
          "name": "Freibrug im Breisgau"
        },
        {
          "id": "4",
          "name": "Mannheim"
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

    var stateID = "3";
    var url = "https://map4all.appspot.com/enactment/state/" + stateID;

    fetch(url, {
      method: 'GET',
      'headers': {
        'Authorization': 'Basic YWRtaW46WHpGcnhNcTdtR0VoRUhZMjd3cFQzSG1JZ2F4WXpZaVoycXAyUnhrVmZBazM4dHR5OXBJUVc2MXEwTmM2ZEQwUA=='
      }
    });

  }

 
  render() {

    return (
      <div className="Overview">
        <PageHeader className="site-page-header" title="Übersicht" />

        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" size={'middle'} onFinish={this.onFinish} >

          <Form.Item label="Bund" name="state" rules={[{ required: true }]}>
            <Select>
              {this.state.state.map((state) =>
                <Select.Option key={state.id} value={state.name}>{state.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item label="Landkreis" name="district" rules={[{ required: true }]}>
            <Select>
              {this.state.district.map((district) =>
                <Select.Option key={district.id} value={district.name}>{district.name}</Select.Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={console.log("Suchen")}>
              Suchen
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="button" onClick={console.log("Suchen")}>
              Zurück
            </Button>
          </Form.Item>

        </Form>
      </div>
    )
  };
}

export default Overview;
