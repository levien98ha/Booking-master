import React, {Component} from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
  
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };
  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };
  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}


class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: this.props.posts, editingKey: '' };
      this.columns = [
        {
          title: 'Name Room',
          dataIndex: 'name',
          width: '15%',
          editable: true,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '15%',
            editable: true,
          },
        {
          title: 'Price',
          dataIndex: 'price',
          width: '15%',
          editable: true,
        },
        {
          title: 'Categories',
          dataIndex: 'categories',
          width: '15%',
          editable: true,
        },
        {
            title: 'Service',
            dataIndex: 'service',
            width: '15%',
            editable: true,
          },
          {
            title: 'Decription',
            dataIndex: 'decription',
            width: '30%',
            editable: true,
          },
        {
          title: 'Action',
          dataIndex: 'operation',
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
                <>
              <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                Edit
              </a>
                {/* <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>Delete</a>
                </Popconfirm> */}
            </>
            )
          },
        },
      ];
    }
  
    isEditing = record => record.key === this.state.editingKey;

    handleDelete = key => {
        const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.id !== key) });
      };
      handleSave = row => {
        const newData = [...this.state.data];
        const index = newData.findIndex(item => row.key === item.id);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData });
      };

    cancel = () => {
      this.setState({ editingKey: '' });
    };
  
    save(form, key) {
      form.validateFields((error, row) => {
        if (error) {
          return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.id);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          this.setState({ data: newData, editingKey: '' });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: '' });
        }
      });
    }
  
    edit(key) {
      this.setState({ editingKey: key });
    }
  
    render() {
        const { data } = this.state;
      const components = {
        body: {
         row: EditableFormRow,
          cell: EditableCell,
        },
      };
  
      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex ,
            dataIndex: col.dataIndex,
            editable: col.editable,
            // dataIndex: col.dataIndex,
            // handleSave: this.handleSave,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      });
  
      return (
        <EditableContext.Provider value={this.props.form}>
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel,
            }}
          />
        </EditableContext.Provider>
      );
    }
  }
  
  const AdminRooms = Form.create()(EditableTable);


// class AdminRooms extends Component {
//     render(){
//         const data = this.props.posts
//     return (
//         <>
//         <Table columns={columns} dataSource={data} className='AdminRooms'/>
//         </>
//     );}
// }

const columns = [
    {
      title: 'Name Room',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Service',
      key: 'service',
      dataIndex: 'service'
    },
    {
        title: 'Decription',
        key: 'decription',
        dataIndex: 'decription'
      },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a className='delAdmin'>Delete</a>
          <a className='editAdmin'>Edit</a>
        </span>
      ),
    },
  ];

const mapStateToPros = (state) => {
    const {posts} = state;
    return {posts}
}

export default connect(mapStateToPros)(AdminRooms);