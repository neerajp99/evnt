import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ConfirmDiv,
    ConfirmContainer

} from "./styles/Confirm";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Confirm extends Component {
    // state = {

    // }

    // componentDidMount() {

    // }

    render() {
        console.log(this.props)
        const notify = () => toast.info('🦄 Confirmation email has been sent!', {
            position: "top-center",
            autoClose: 500000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });;
        return (
            <ConfirmDiv>
                <ConfirmContainer>
                <button onClick={notify}>Notify !</button>
                <ToastContainer
                    position="top-center"
                    autoClose={500000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                </ConfirmContainer>
            </ConfirmDiv>
        );
    }
}

Confirm.propTypes = {

};

export default Confirm;