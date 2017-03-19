import React from 'react';
import Modal from 'react-modal';

class AttractionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: true };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return(
      <Modal
        isOpen={ this.state.modalOpen }
        onRequestClose={ this.closeModal }>
        { this.props.attraction.name }
      </Modal>
    );
  }
}

export default AttractionDetail;
