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
  renderCell = form => {
    this.form = form;
    const {
      editing ,
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
            {form.getFieldDecorator(dataIndex, {
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
          <div>{children}</div>
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}


class EditableTable extends React.Component {
  // componentWillMount () {
  //   console.log(this.props.posts);
  // }
  // componentDidMount () {
  //   console.log(this.props.posts);
  // }
    constructor(props) {
      super(props);
      this.state = { data: this.props.posts, editingKey: '' };
      this.columns = [
        {
          title: 'Name Room',
          dataIndex: 'name',
          width: '10%',
          editable: true,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
            title: 'Image',
            dataIndex: 'image',
            width: '15%',
            editable: true,
            sorter: (a, b) => a.image.length - b.image.length,
            sortDirections: ['descend'],
          },
        {
          title: 'Price',
          dataIndex: 'price',
          width: '10%',
          editable: true,
          sorter: (a, b) => a.price.length - b.price.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Categories',
          dataIndex: 'categories',
          width: '15%',
          editable: true,
          sorter: (a, b) => a.categories.length - b.categories.length,
          sortDirections: ['descend'],
        },
        {
            title: 'Service',
            dataIndex: 'service',
            width: '10%',
            editable: true,
            sorter: (a, b) => a.service.length - b.service.length,
          sortDirections: ['descend'],
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
                    <a onClick={() => this.save(form, record.key)} style={{ marginRight: 8 }}>
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
              {/* <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                Delete
              </a> */}
                {/* <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>Delete</a>
                </Popconfirm> */}
            </>
            )
          },
        },
        {
          title: 'Action',
          dataIndex: 'operation',
            render: (text, record) =>
          this.state.data.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null
          }
      ];
    }
  
    isEditing = record => record.key === this.state.editingKey;

    handleDelete = key => {
      console.log(key);
        const dataSource = [...this.state.data];
        this.setState({ data: dataSource.filter(item => item.key !== key) });
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
        console.log(newData);
        const index = newData.findIndex(item => key === item.key);
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
            rowClassName={() => "editable-row"}
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

// const columns = [
//     {
//       title: 'Name Room',
//       dataIndex: 'name',
//       key: 'name'
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       key: 'price',
//     },
//     {
//       title: 'Image',
//       dataIndex: 'image',
//       key: 'image',
//     },
//     {
//       title: 'Service',
//       key: 'service',
//       dataIndex: 'service'
//     },
//     {
//         title: 'Decription',
//         key: 'decription',
//         dataIndex: 'decription'
//       },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <span>
//            {/* <a className='delAdmin'>Delete</a>  */}
//           <a className='editAdmin'>Edit</a>
//         </span>
//       ),
//     },
//   ];

const mapStateToPros = (state) => {
    const {posts} = state;
    return {posts}
}

export default connect(mapStateToPros)(AdminRooms);