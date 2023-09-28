import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/card/card';
import Modal from '../../components/modal/modal';
import { getBooks } from '../../services/book';
import { useEffect, useState } from 'react';

const Home = () => {
    const [books, setBooks] = useState([]);
    const getData = async () => {
        try {
            const data = await getBooks();
            console.log(data, "from axios");
            setBooks(data.data);
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
  

  return (
    <div id="wrapper">
        <Sidebar />

        <Navbar />

        <Card />

        <Modal />

    </div>
  );
};

export default Home;
