
import AddForm from './AddForm';
import Header from './Header'
import './BookListApp.css'

function BookListApp() {
  return (
    <div >
            <div className='container d-flex flex-column mt-4 bodyBookList'>
                <Header></Header>
                <AddForm></AddForm>
            </div>
    </div>
  );
}

export default BookListApp;
