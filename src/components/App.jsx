import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    isLoading: false,
  };

  formSubmitHandler = data => {
    this.setState({
      name: data.name,
      pictures: [],
      page: 1,
    });
  };

  buttonPaginateHandler = () => {
    const counter = this.state.page + 1;
    this.setState({ page: counter });
  };

  async componentDidUpdate(prevProps, prevState) {
    const query = this.state.name;
    const page = this.state.page;

    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `/?q=${query}&page=${page}&key=34100220-38e5a3f6c25c883f1441c4bda&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.data.hits],
        isLoading: false,
      }));
    }
  }

  render() {
    const { pictures, isLoading } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <div>
          {pictures.length > 0 ? <ImageGallery toRender={this.state} /> : null}
          {isLoading ? (
            <Loader />
          ) : (
            <Button
              toVisible={this.state}
              pageSubmit={this.buttonPaginateHandler}
            />
          )}
        </div>
      </div>
    );
  }
}
