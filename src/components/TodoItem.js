import * as statusContent from '../config/constants.js';
import background from '../images/Group 13.png'

function TodoItem({ content, status, changeStatus, deleteItem }) { // reveive data from app.js

    const chooseStyleStatus = () => { // get status in App.js to change css
        switch (status) {
            case statusContent.STATUS_CONTENT.NEW:
                return {
                    color: 'black',
                    fontStyle: 'normal',
                    fontWeight: 'bold',

                };

            case statusContent.STATUS_CONTENT.DONE:
                return {
                    color: 'blue',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    border: 'none'
                };
            default:
                return {
                    color: 'black',
                };
        }
    }

    const iconStatus = () => {
        switch (status) {
            case statusContent.STATUS_CONTENT.NEW:
                return {
                    backgroundImage: `url(${background})`,
                    height: '30px',
                    width: '30px',
                    backgroundSize: 'cover',
                    border: 'none',
                    paddingBottom: '10px',
                };

            case statusContent.STATUS_CONTENT.DONE:
                return {
                    color: 'blue',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    border: 'none'
                };
        }
    }


    return (
        <div className="todoItem">
            <div className="todoItem_content">
                <p style={chooseStyleStatus()} >{content}</p>
            </div>

            <div className="todoItem_button">
                <button className="todoItem_button--green" style={iconStatus()} onClick={changeStatus}></button>
                <button className="todoItem_button--black" onClick={deleteItem}></button>
            </div>
        </div>

    )
}
export default TodoItem;