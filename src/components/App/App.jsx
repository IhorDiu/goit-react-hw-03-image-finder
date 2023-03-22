import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
// import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    // pixabayImg: [],
  };

  // async componentDidMount() {
  //   const response = await axios.get("/search?query=react");
  //   this.setState({ articles: response.data.hits });
  // }

  render() {
    // const { pixabayImg } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </>
    );
  }
}
