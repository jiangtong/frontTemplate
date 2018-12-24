import React, {Component} from 'react';
import ListModal from '@pages/Teacher/commen/ListModal';

export default class Basicinfo extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.listModal = new ListModal('majorList');
        let res = await this.listModal.reloadData();
        console.log(res);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
