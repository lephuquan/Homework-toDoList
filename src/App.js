import Header from './layouts/Header';
import Body from './layouts/Body';
import Footer from './layouts/Footer';
import { useState } from 'react';
import './App.css';
import './css/form.css';
import { STATUS_CONTENT } from './config/constants';

const todoArray = [
  {
    content: 'Dùng create-react-app tạp app',
    status: STATUS_CONTENT.NEW,
  },
  {
    content: 'Tao home page import vào app',
    status: STATUS_CONTENT.NEW,
  },
  {
    content: 'Tạo UI như design ',
    status: STATUS_CONTENT.DONE,
  },
  {
    content: 'Tao home page import vào app',
    status: STATUS_CONTENT.NEW,
  },
];
function App() {
  const [listToDo, setListToDo] = useState(todoArray) // use State to save listToDo(by listToDo) and add element(by setListToDo) 


  const addNewToDo = (valueItem) => { //valueItem includes the content and status from the header component sent back
    setListToDo([ // set listToDo by the way a array
      ...listToDo, // get these already exist elements 
      {//add content and status of valueItem to state
        content: valueItem.content,
        status: valueItem.status,
      },
    ]);
  };

  const changeStatus = (indexItem) => {
    const arrToDo = listToDo;
    arrToDo.splice(indexItem, 1, { // replace 1 element at indexItem index by 1 object below
      content: listToDo[indexItem].content, //content: still the content at the index Item element
      status://status will change
        listToDo[indexItem].status === STATUS_CONTENT.NEW
          ? STATUS_CONTENT.DONE : STATUS_CONTENT.DONE
    });
    setListToDo([...arrToDo]); //resets setListToDo by returning a full array from arrayTodDO
  };

  const deleteItem = (indexItem) => { //take the indexItem parameter to process
    const arrToDo = listToDo;
    arrToDo.splice(indexItem, 1);//delete 1 this indexItem
    setListToDo([...arrToDo]);//resets setListToDo by returning a full array from arrayTodDO
  };

  return (
    <div className="todo-app">
      <Header addNewToDo={addNewToDo}> </Header> {/*transmit a function to header component*/}
      <Body todoArray={listToDo} changeStatus={changeStatus} deleteItem={deleteItem} />
      <Footer />

    </div>
  );
}
export default App;
