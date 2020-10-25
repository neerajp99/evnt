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
        const notify = () => toast("Wow so easy !");
        return (
            <ConfirmDiv>
                <ConfirmContainer>
                <button onClick={notify}>Notify !</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
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